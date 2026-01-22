import fetcher from "./fetcher";

export function updateEnrollment(id, payload) {
  return fetcher(`profile/enrollments/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
}