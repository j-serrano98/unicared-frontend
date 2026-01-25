"use server";

import { login } from "@/app/lib/api/auth";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

export async function loginAction(prevState, formData) {
    let response;
    const cookieStore = await cookies();

    const data = {
        username: formData.get("username"),
        password: formData.get("password"),
    };

    try {

        response = await login(data);
    
        if (response.unauthorized) {
            return {
                success: false,
                error: "Usuario o contraseña incorrectos",
            }
        }

        cookieStore.set("authToken", response.token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60, // 1 hour
        });

        if (response.refresh) {
            (await cookieStore).set("refreshAuthToken", response.refresh, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                path: "/",
                maxAge: 7 * 24 * 60 * 60, // 7 days
            });

        return {
            success: true,
            user: response.user ?? null,
        }
        }
    }

    catch (err) {
        return {
            success: false,
            error: "Error del servidor. Intenta nuevamente.",
        };
    }

    finally {
        if (!response.unauthorized) {
            redirect("/")
        }
    }
}