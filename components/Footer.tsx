import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div>
                        <p className="font-semibold">Torino Rooms</p>
                        <div className="flex items-center justify-center md:justify-start gap-2 mt-1 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 flex-shrink-0"/>
                            <span>Principessa Clotilde, 81, 10144 Torino TO, Italy</span>
                        </div>
                    </div>
                    <nav className="flex gap-4 mt-6 md:mt-0">
                        <Link href="#about" className="text-sm hover:underline">
                            About
                        </Link>
                        <Link href="#rooms" className="text-sm hover:underline">
                            Rooms
                        </Link>
                        <Link href="#contact" className="text-sm hover:underline">
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
                    &copy; {currentYear} Torino Rooms by Martin & Katherine Spadaro. <br/>All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
