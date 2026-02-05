"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { updateEnrollment } from "@/app/lib/api/enrollments";

export async function updateEnrollmentAction(prevState, formData) {
  let response;
    
  try {
    const data = Object.fromEntries(formData);

    const payload = {
        teacher: data.teacher ? Number(data.teacher) : null,
        status: data.status || null,
        grade: data.grade ? Number(data.grade) : null,
        completion_date: data.completion_date || null,

        review: {
          comment: data.comment_review || null,
          punctuality: data.punctuality ? Number(data.punctuality) : null,
          clarity: data.clarity ? Number(data.clarity) : null,
          justice: data.justice ? Number(data.justice) : null,
          support: data.support ? Number(data.support) : null,
          flexibility: data.flexibility ? Number(data.flexibility) : null,
          knowledge: data.knowledge  ? Number(data.knowledge) : null,
          methodology: data.methodology  ? Number(data.methodology) : null,
        }
    };
    
    await updateEnrollment(data.id, payload);

  }
  catch (e) {
    return {success: false, error: "We ran into an error when attempting to update your enrollment."};
  }

  redirect("/me");
}