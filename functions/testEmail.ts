import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const emailData = {
      service_id: Deno.env.get("NEXT_PUBLIC_EMAILJS_SERVICE_ID"),
      template_id: Deno.env.get("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID"),
      user_id: Deno.env.get("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY"),
      template_params: {
        to_name: "Test User",
        to_email: "test@example.com",
        amount: "22.00",
        serial_number: "123456789"
      }
    };

    console.log('Secrets check:', {
      hasServiceId: !!Deno.env.get("NEXT_PUBLIC_EMAILJS_SERVICE_ID"),
      hasTemplateId: !!Deno.env.get("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID"),
      hasPublicKey: !!Deno.env.get("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY")
    });

    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    const emailResult = await emailResponse.text();
    
    return Response.json({ 
      status: emailResponse.status,
      statusText: emailResponse.statusText,
      response: emailResult,
      secrets: {
        hasServiceId: !!Deno.env.get("NEXT_PUBLIC_EMAILJS_SERVICE_ID"),
        hasTemplateId: !!Deno.env.get("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID"),
        hasPublicKey: !!Deno.env.get("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY")
      }
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});