export default async function publicFetcher(endpoint) {
    console.log("BASE URL:", process.env.NEXT_PUBLIC_API_BASE_URL);
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`,
        {
        headers: {
            "Content-Type": "application/json",
        },
        next: { revalidate: 3600 },
        }
    );

    if (!response.ok) {
        throw new Error(`Public API request failed (${response.status})`);
    }

    return response.json();
}