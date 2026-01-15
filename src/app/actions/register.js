"use server"

import { register } from "@/app/lib/api/auth";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

export async function registerAction(formData) {
    const cookieStore = await cookies();

    const data = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    }

    try {
        const response = await register(data);

        console.log(response);
    }
    catch (err) {
        return {
            success: false,
            error: "Error del servidor. Intenta nuevamente.",
        };
    }
};