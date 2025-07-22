import ContactForm from "@/components/ContactForm";
import type {Metadata} from "next";

// Page-specific metadata. This will override the root layout.
export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with us to ask questions, schedule a viewing, or start your application. We're here to help you find your new home in Torino.",
};

export default function ContactPage() {
    return (
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
                <p className="mt-3 text-lg text-muted-foreground">
                    Have a question or want to schedule a viewing? Fill out the form below
                    and we'll get back to you as soon as possible.
                </p>
            </div>
            <ContactForm/>
        </div>
    );
}
