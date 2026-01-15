import fetcher from "./fetcher";

export function updateEnrollment(id, payload) {
  return fetcher(`profile/enrollments/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}