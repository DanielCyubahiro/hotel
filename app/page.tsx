import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {MapPin, CheckCircle} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const amenities = [
    "Private room with private bathroom",
    "Heating and personal fan",
    "Fully equipped shared kitchen",
    "Washing machines & ironing facilities",
    "Single bed, desk, chair, wardrobe",
    "Fresh linen and towels (one set)",
    "High-speed internet",
    "Large screen TV",
];

const galleryImages = [
    {src: "/room1.jpg", alt: "View of the landscaped garden"},
    {src: "/room3.jpg", alt: "Comfortable resident lounge area"},
    {src: "/room4.jpg", alt: "Modern and clean shared kitchen"},
    {
        src: "/garden1.jpg",
        alt: "A cozy and well-lit private bedroom"
    },
    {
        src: "/front1.jpg",
        alt: "Exterior view of the historic hotel building"
    },
    {src: "/room2.jpg", alt: "Spacious common dining area"},
];


export default function SinglePageWebsite() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section id="home" className="w-full bg-gray-100 dark:bg-gray-800 py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                        Comfortable Living in the Center of Turin
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        Discover a unique, family-like community in a historic hotel. Private rooms with all-inclusive
                        bills, perfect for students and young professionals.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="#rooms">Rooms</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="#contact">Get In Touch</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Rooms Section */}
            <section id="rooms" className="w-full py-16 md:py-24 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold tracking-tight">
                            Comfortable & Private Rooms
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                            Each of our 10 resident rooms is designed to be your personal space.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-5 gap-8">
                        <div className="md:col-span-3">
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle>Your Personal Space & Amenities</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-lg dark:prose-invert">
                                    <p>
                                        Beyond your room, you&#39;ll have access to fantastic common facilities
                                        including a large, modern kitchen, a comfortable lounge with a large screen TV,
                                        and a beautiful landscaped garden.
                                    </p>
                                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                        {amenities.map((amenity, index) => (
                                            <li key={index} className="flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0"/>
                                                <span>{amenity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="md:col-span-2">
                            <Card className="sticky top-24">
                                <CardHeader>
                                    <CardTitle>Pricing & Contracts</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold">
                                        €575<span className="text-lg font-normal text-muted-foreground">/month</span>
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Prices starting from, for long-term contracts.
                                    </p>
                                    <p className="mt-4">
                                        Our rate includes <strong>all bills</strong>. We also assist with official
                                        contract registration to make your transition to Turin as smooth as possible.
                                    </p>
                                    <Button asChild size="lg" className="w-full mt-6">
                                        <Link href="#contact">Inquire Now</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold tracking-tight">Photo Gallery</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="w-full h-64 relative rounded-lg overflow-hidden group">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="w-full py-16 md:py-24 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            About US
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                            We are an elegant guest house in a historic hotel, fostering a
                            friendly, family-like environment where you can thrive.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="w-full h-80 relative rounded-lg overflow-hidden">
                            <Image
                                src="/about_us_photo.jpg"
                                alt="Owners Martin and Katherine Spadaro"
                                width={800}
                                height={400}
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="prose prose-lg dark:prose-invert">
                            <h3 className="text-2xl font-bold mb-5">Your Hosts</h3>
                            <p className="mb-4">
                                Welcome! We are <strong>Martin and Katherine Spadaro</strong>, your hosts. Our guest
                                house is an elegant old hotel within walking distance of the centre of Turin. We foster
                                a friendly family like environment, where each room is private, with a private bathroom,
                                and common facilities including a large kitchen, lounge, dining area and a beautiful
                                landscaped garden.
                            </p>
                            <p className="mb-4">
                                There are 14 bedrooms, but only 10 are used for residents. We are in a safe part of
                                town, and the house has constant support from us.
                            </p>
                            <p>
                                <strong>If you are a student, academic assistance may be available.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto max-w-5xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold tracking-tight">Get in Touch</h2>
                        <p className="mt-3 text-lg text-muted-foreground">
                            Have a question? Reach out to us.
                        </p>
                    </div>
                    <ContactForm/>
                </div>
            </section>

            {/* Location Section */}
            <section id="location" className="w-full py-16 md:py-24 bg-white dark:bg-gray-900">
                <div className="container mx-auto max-w-5xl px-4">
                    <div className="text-center mb-7">
                        <h2 className="text-4xl font-bold tracking-tight">Our Location</h2>
                    </div>
                    <div>
                        <div className="flex flex-col justify-center items-center mb-4">
                            <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0 mb-4"/>
                            <p className="font-semibold">Turin CoHousing</p>
                            <p className="text-muted-foreground">Principessa Clotilde, 81</p>
                            <p className="text-muted-foreground">10144 Torino, Italy</p>
                        </div>
                        <div className="mt-8 rounded-lg overflow-hidden border">
                            <iframe
                                title="Location of Turin CoHousing on Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.747975868123!2d7.657905876801827!3d45.08272185900134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886c10f7be8807%3A0x677b1e0a13805961!2sVia%20Principessa%20Clotilde%2C%2081%2C%2010144%20Torino%20TO%2C%20Italy!5e0!3m2!1sen!2sus!4v1722883656133!5m2!1sen!2sus"
                                width="100%"
                                height="400"
                                style={{border: 0}}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
