import fetcher from "./fetcher";

export function updateInfo(payload) {
    console.log("profile.js: ", payload)
    return fetcher(`profile/me/`, {
        method: "PATCH",
        body: JSON.stringify(payload)
    });

}

export function updateCareer(career_id) {
    return fetcher(`profile/career/`, {
        method: "POST",
        body: JSON.stringify(career_id)
    });
}