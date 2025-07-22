"use server";

import { FormSchemaType } from "@/components/ContactForm";

// This is a Server Action. It runs securely on the server, not in the browser.
// This means you can use sensitive information like API keys here.

export async function sendEmail(data: FormSchemaType) {
    // In a real application, you would integrate an email service here.
    // Popular choices are Resend, SendGrid, or Nodemailer.
    //
    // Example using Resend (you would need to install it: `npm install resend`):
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: 'Your Business <onboarding@resend.dev>',
        to: 'your-email@example.com', // Your personal email to receive notifications
        subject: `New Inquiry from ${data.name}`,
        reply_to: data.email,
        html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p>`,
      });
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false };
    }
    */

    // For now, we'll just log the data to the console to simulate success.
    console.log("Received data:", data);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return a success response. In a real app, this would depend on the email service's response.
    return { success: true };
}
