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
        template: "%s | Torino Rooms",
        default: "Affordable Rooms for Students & Professionals in Torino",
    },
    description:
        "Discover affordable, fully-furnished rooms for students and young professionals in the heart of Torino, Italy. Convenient, comfortable, and community-focused living.",
    keywords: [
        "student accommodation Torino",
        "rooms for rent Torino",
        "young professional housing Italy",
        "affordable rooms Torino",
        "stanze per studenti Torino",
        "affitti per giovani professionisti Torino",
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
            <Navbar/>
            {/* The main content for each page will be rendered here */}
            <main className="flex-1">{children}</main>
            <Footer/>
            {/* Toaster is used for showing success/error messages from the form */}
            <Toaster/>
        </div>
        </body>
        </html>
    );
}
