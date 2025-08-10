import type {Metadata, Viewport} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Toaster} from "@/components/ui/sonner";
import React from "react";

const inter = Inter({subsets: ["latin"], variable: "--font-sans"});

export const metadata: Metadata = {
    title: {
        template: "%s | Torino Rooms - Student & Professional Housing",
        default: "Affordable Rooms in Torino | All-Inclusive Student & Professional Housing",
    },
    description:
        "Find your perfect room in Torino! We offer safe, all-inclusive, and fully-furnished rooms for students and young professionals in a friendly, historic guest house. All bills included. Inquire today!",
    keywords: [
        // Primary English
        "student accommodation Torino",
        "rooms for rent Turin",
        "young professional housing Torino",
        "affordable rooms Torino",
        "all-inclusive rooms Turin",
        "furnished rooms Torino",
        "student housing Italy",
        "long term stay Torino",

        // Primary Italian
        "stanze per studenti Torino",
        "affitti per giovani professionisti Torino",
        "alloggi per studenti Torino",
        "camere in affitto Torino",
        "contratto transitorio studenti",
        "affitto tutto incluso Torino",
        "residenza per studenti Torino",

        // Long-tail & Specific (English + Italian)
        "University of Turin housing",
        "Politecnico di Torino accommodation",
        "Erasmus housing Torino",
        "stanze singole con bagno privato Torino",
        "affitto breve studenti Torino",
        "safe neighborhood Turin",
        "international student housing Italy",
        "guest house Torino",
        "Martin and Katherine Spadaro",
        "accommodation near Turin city centre",
    ],
};

export const viewport: Viewport = {
    themeColor: "#ffffff",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased",
                inter.variable
            )}
        >
        <div className="relative flex min-h-dvh flex-col bg-background">
            <Toaster/>
            <Navbar/>
            <main className="flex-1">{children}</main>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
