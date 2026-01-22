"use server"

import { cookies, headers } from "next/headers"
import { redirect } from 'next/navigation'

export async function updateProfileAction(prevState, formData) {
    const cookieStore = await cookies();

    const data = Object.fromEntries(formData);

    const payload = {
        name: data.name || null,
        birthdate: data.birthdate ? Date(data.birthdate) : null,
        phone: data.phone ? Number(data.phone) : null,
        address: data.address || null,
        career_id: data.career_id ? Number(data.career_id) : null,
        state: data.state || null,
        website: data.website || null,
        bio: data.bio || null,
        linkedin_url: data.linkedin_url || null,
        fb_url: data.fb_url || null,
        github_user: data.github_user || null,
        instagram_user: data.instagram_user || null,
    }

    console.log(payload)

    // await updateProfile(data.id, payload);

    // const h = await headers();
    // const referer = h.get("referer") || "/";

    // redirect(referer);
}