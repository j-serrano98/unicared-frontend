"use server"
import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function fetcher(endpoint, options = {}) {
    // 1. Safety check for the URL
    if (!API_URL) {
        console.error("❌ API_URL is not defined!");
        return { error: "Configuration Error" };
    }

    console.log("Fetching from:", `${API_URL}${endpoint}`);

    // 2. Wrap cookies in a try/catch or check if we are in a build environment
    let token = null;
    try {
        const cookieStore = await cookies();
        token = cookieStore.get("authToken")?.value;
    } catch (e) {
        // This usually happens during 'next build' 
        console.log("⚠️ Cookies not available (likely build time)");
    }

    try {
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
            // Log the status so you can see it in Vercel
            console.error(`API Error: ${response.status} at ${endpoint}`);
            return null; 
        }
        
        return await response.json();
    } catch (error) {
        console.error("Fetch failed:", error);
        // Throwing here crashes the Vercel Build. 
        // Returning null allows the build to finish (the page will just be empty/loading).
        return null; 
    }
}