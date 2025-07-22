import { MetadataRoute } from "next";

// This file generates a sitemap.xml on the fly.
// This is extremely important for SEO as it tells search engines like Google
// about all the pages on your site that are available for crawling.

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://your-domain.com"; // IMPORTANT: Change this to your actual domain

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/rooms`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
    ];
}
