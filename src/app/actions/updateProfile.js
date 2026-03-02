"use server"

import { refresh } from 'next/cache'
import { updateInfo } from '../lib/api/profile';

export async function updateProfileAction(prevState, formData) {

    const data = Object.fromEntries(formData);

    const payload = {
        first_name: data.first_name,
        last_name: data.last_name,
        profile_pic: data.profile_pic || null,
        website: data.website || null,
        bio: data.bio || null,
        linkedin_url: data.linkedin_url || null,
        fb_url: data.fb_url || null,
        github_user: data.github_user || null,
        instagram_user: data.instagram_user || null,
    }

    await updateInfo(payload);
    
    refresh()
}