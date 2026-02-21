import publicFetcher from "./lib/api/publicFetcher";

export default async function sitemap() {
    const baseUrl = "https://unicared.tech";

    const teachers = await publicFetcher(`teachers/`)

    const teacherUrls = teachers.map((teacher) => ({
        url: `${baseUrl}/profesores/${teacher.slug}`,
        lastModified: new Date(),
        priority: 0.7,
    }));

    return [
        {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
        },
        {
        url: `${baseUrl}/login`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        },
        {
        url: `${baseUrl}/register`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        },
        ...teacherUrls
    ]
}