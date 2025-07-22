import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Wifi, University } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="w-full bg-gray-100 dark:bg-gray-800 py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Your Accommodation in Torino Awaits
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Affordable, comfortable, and convenient rooms designed for students
              and young professionals. Reach out to know the availability
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/rooms">Explore Rooms</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Wifi className="w-8 h-8 text-primary" />
                  <CardTitle>All-Inclusive</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    High-speed Wi-Fi, utilities, and weekly cleaning are all
                    included in one simple monthly payment. No hidden fees.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <University className="w-8 h-8 text-primary" />
                  <CardTitle>Prime Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Located in a vibrant neighborhood with excellent transport
                    links to the University of Turin, Politecnico, and the city
                    center.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Utensils className="w-8 h-8 text-primary" />
                  <CardTitle>Fully Furnished</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our rooms come fully equipped with a comfortable bed, desk,
                    wardrobe, and access to a modern shared kitchen and living
                    area.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Ready to Find Your Perfect Room?</h2>
            <p className="mt-2 text-lg">
              Spaces are limited. Get in touch today to schedule a viewing.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-6">
              <Link href="/contact">Book a Viewing</Link>
            </Button>
          </div>
        </section>
      </div>
  );
}
