import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

const PAYPAL_API = "https://api-m.paypal.com";

async function getPayPalAccessToken() {
  const clientId = Deno.env.get("PAYPAL_CLIENT_ID");
  const secret = Deno.env.get("PAYPAL_SECRET");
  
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
  const id = parseInt(machineId);
  
  if (packId === 'max-pack') {
    // MAX pack formula: serial = (((((id + 7541) * 2) + 2001) * 2) - 9002)
    const serial = (((((id + 7541) * 2) + 2001) * 2) - 9002);
    return serial.toString();
  } else if (packId === 'mad-midi') {
    // MAD MIDI formula: ((((((id + 8354) * 2) + 1691) * 2) - 9097) then drop last digit
    const serial = ((((((id + 8354) * 2) + 1691) * 2) - 9097));
    const serialStr = serial.toString();
    return serialStr.slice(0, -1);
  }
  
  return machineId;
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
      const amount = captureData.purchase_units[0].payments.captures[0].amount.value;

      // Send thank you email via EmailJS
      const emailData = {
        service_id: Deno.env.get("NEXT_PUBLIC_EMAILJS_SERVICE_ID"),
        template_id: Deno.env.get("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID"),
        user_id: Deno.env.get("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY"),
        template_params: {
          to_name: customData.email.split('@')[0],
          to_email: customData.email,
          amount: amount,
          serial_number: serialNumber
        }
      };

      const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      const emailResult = await emailResponse.text();
      console.log('EmailJS response:', emailResponse.status, emailResult);

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