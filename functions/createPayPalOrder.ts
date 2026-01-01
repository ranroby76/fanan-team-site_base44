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

Deno.serve(async (req) => {
  try {
    const { packId, price, packName, machineId, email } = await req.json();
    
    if (!machineId || !email) {
      return Response.json({ error: 'Machine ID and email are required' }, { status: 400 });
    }

    const accessToken = await getPayPalAccessToken();
    
    const orderData = {
      intent: "CAPTURE",
      purchase_units: [{
        amount: {
          currency_code: "USD",
          value: price
        },
        description: packName,
        custom_id: JSON.stringify({
          email,
          packId,
          machineId
        })
      }]
    };
    
    const response = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderData)
    });
    
    const order = await response.json();
    
    if (!response.ok) {
      console.error('PayPal API error:', order);
      return Response.json({ error: order.message || 'PayPal API error' }, { status: response.status });
    }
    
    console.log('PayPal order created:', order.id);
    return Response.json({ orderId: order.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});