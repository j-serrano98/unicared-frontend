"use client";

import { logoutAction } from "../actions/logout";
import { useRouter } from "next/navigation";

export default function LogoutButton() {

    const router = useRouter();

    async function handleLogout() {
        await logoutAction();
        router.push("/");
    }

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}
