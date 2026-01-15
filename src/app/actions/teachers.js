import { getTeachers } from "@/app/lib/api/teachers";

export async function getTeachersAction() {
    const response = await getTeachers();

    return response
}