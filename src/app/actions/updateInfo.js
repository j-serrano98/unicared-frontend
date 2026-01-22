"use server"

import { redirect } from 'next/navigation'
import { updateInfo } from '../lib/api/profile';

export async function updateInfoAction(prevState, formData) {

    const data = Object.fromEntries(formData);

    const payload = {
        first_name: data.first_name || null,
        last_name: data.last_name || null,
        birthdate: data.birthdate || null,
        phone: data.phone ? Number(data.phone) : null,
        address: data.address || null,
        state: data.state || null,
        website: data.website || null,
        bio: data.bio || null,
        linkedin_url: data.linkedin_url || null,
        fb_url: data.fb_url || null,
        github_user: data.github_user || null,
        instagram_user: data.instagram_user || null,
    }

    await updateInfo(payload);
    
    redirect("/register/career")
}