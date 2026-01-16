import { cookies } from "next/headers";

export default async function fetcher(endpoint, options = {}) {
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken")?.value;

    console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`)

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`, 
        {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Token ${token}` : "",
            ...options.headers,
        },
        cache: "no-store",
    });

    if (response.status === 401 || response.status === 403) {
    return { unauthorized: true };
    }

    if (!response.ok) {
        throw new Error(`API request failed (${response.status})`);
    }
    
    return response.json();
}   