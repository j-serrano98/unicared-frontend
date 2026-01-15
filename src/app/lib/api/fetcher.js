"use server"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export default async function fetcher(endpoint, options = {}) {
    console.log("my url", API_URL)
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken")?.value;

    const response = await fetch(`${API_URL}${endpoint}`, {
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