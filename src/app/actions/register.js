"use server"

import { register } from "@/app/lib/api/auth";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

export async function registerAction(prevState, formData) {
    const cookieStore = await cookies();

    const data = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    }

    try {
        const response = await register(data);

        if (response.token) {
            cookieStore.set("authToken", response.token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                path: "/",
            });
        }
    }
    catch (err) {
        return {
            success: false,
            error: "Server failed. Try again.",
        };
    }

    redirect('/register/personal-info')
};