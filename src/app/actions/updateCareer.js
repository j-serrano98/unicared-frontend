"use server"

import { redirect } from 'next/navigation'
import { updateCareer } from "../lib/api/profile";

export async function updateCareerAction(prevState, formData) {

    const career_id = formData.get("career_id");

    if (!career_id) {
        return {success: false, error: "Please select a career."};
    }

    const payload = {
        career_id: Number(career_id)
    };

    try {
        await updateCareer(payload);
    }
    catch (e) {
        return {success: false, error: "We ran into an error when attempting to save your career."};
    }

    redirect("/me")
}