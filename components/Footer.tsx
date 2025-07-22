import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {currentYear} Torino Rooms. All Rights Reserved.
                    </p>
                    <nav className="flex gap-4 mt-4 md:mt-0">
                        <Link href="/about" className="text-sm hover:underline">
                            About
                        </Link>
                        <Link href="/contact" className="text-sm hover:underline">
                            Contact
                        </Link>
                        <Link href="#" className="text-sm hover:underline">
                            Privacy Policy
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
