import ProfileForm from "./_components/ProfileForm";
import { cookies } from "next/headers";
import fetcher from "@/app/lib/api/fetcher";

export default async function ProfilePage() {
    const cookieStore = await cookies();
        const token = cookieStore.get("authToken")?.value;
    
        let profileData = null;
        if (token) {
            const profileRes = await fetcher('profile/me/', {
                cache: 'no-store'
            })
                
            profileData = profileRes
    
        }

    return (
        <div>
            <ProfileForm profile={profileData} />
        </div>
    )
}