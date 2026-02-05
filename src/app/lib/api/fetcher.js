import { cookies } from "next/headers";

export default async function fetcher(endpoint, options = {}) {
    let response;

    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("authToken")?.value;
        
        response = await fetch(
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
    }

    catch (networkError) {
        return { error: true, message: "No se pudo establecer conexión con el servidor." };
    }

    if (response.status === 401 || response.status === 403) {
        return { unauthorized: true };
    }

    if (!response.ok) {
        console.log("fetcher response:", response)
        throw new Error(`API request failed (${response.status})`);
    }
    
    return response.json();
}   