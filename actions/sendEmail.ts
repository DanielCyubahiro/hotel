"use server";

import {Resend} from 'resend';
import {FormSchemaType} from "@/components/ContactForm";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailTo = process.env.EMAIL_TO;

export async function sendEmail(data: FormSchemaType) {
    const {name, email, message} = data;

    if (!emailTo) {
        console.error("EMAIL_TO environment variable is not set.");
        return {success: false, error: "Server configuration error."};
    }

    try {
        const {error} = await resend.emails.send({
            from: 'Torino Rooms Inquiry <onboarding@resend.dev>',
            to: emailTo,
            subject: `New Inquiry from ${name}`,
            html: `
        <h1>New Inquiry from your Website</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        if (error) {
            console.error("Resend error:", error);
            return {success: false, error: "Failed to send email."};
        }

        return {success: true};
    } catch (error) {
        console.error("Error sending email:", error);
        return {success: false, error: "An unexpected error occurred."};
    }
}
