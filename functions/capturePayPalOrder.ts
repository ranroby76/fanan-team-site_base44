import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

const PAYPAL_API = "https://api-m.sandbox.paypal.com";

async function getPayPalAccessToken() {
  const clientId = Deno.env.get("PAYPAL_CLIENT_ID") || "AdoK3-mdDQxleLLbYSTCtVy1naeCPfP78ayxahlSAcwwhIEGtY6eEiaBJZrbFCKWdQ0g9seXWYTcO5zo";
  const secret = Deno.env.get("PAYPAL_SECRET") || "EDb4MZ_GLNK3H7ENiSgWyCnTeM2IjF5GjTIcvd9IYLy1-VSEPrtQSpeTe9TdFUifUFO8tcZ7vj-8LnoS";
  
  const auth = btoa(`${clientId}:${secret}`);
  
  const response = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      "Authorization": `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  });
  
  const data = await response.json();
  return data.access_token;
}

function generateSerialNumber(machineId, packId) {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  const packPrefix = packId === 'mad-midi' ? 'MM' : 'MX';
  return `${packPrefix}-${timestamp}-${random}`;
}

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { orderId } = await req.json();
    
    const accessToken = await getPayPalAccessToken();
    
    const response = await fetch(`${PAYPAL_API}/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      }
    });
    
    const captureData = await response.json();
    
    if (captureData.status === 'COMPLETED') {
      const customData = JSON.parse(captureData.purchase_units[0].payments.captures[0].custom_id);
      const serialNumber = generateSerialNumber(customData.machineId, customData.packId);
      
      // Send email with serial number
      await base44.asServiceRole.integrations.Core.SendEmail({
        to: customData.email,
        subject: `Your ${customData.packId === 'mad-midi' ? 'MAD MIDI MACHINES' : 'MAX! PACK'} Serial Number`,
        body: `Thank you for your purchase!

Your Machine ID: ${customData.machineId}
Your Serial Number: ${serialNumber}

Please copy this serial number and paste it into the plugin's registration window.

Best regards,
Fanan Team`
      });
      
      return Response.json({ 
        success: true,
        serialNumber,
        machineId: customData.machineId
      });
    }
    
    return Response.json({ error: 'Payment not completed' }, { status: 400 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});