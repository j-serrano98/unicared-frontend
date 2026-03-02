import SettingsNavBar from "@/app/components/SettingsNavBar"
import GoBackButton from "@/app/components/GoBackButton"
import Image from "next/image"
import { cookies } from "next/headers";
import fetcher from "../lib/api/fetcher";
import { redirect } from "next/navigation";
import ProfileImage from "./profile/_components/ProfileImage";

export default async function EnrollmentDetailsLayout({ children }) {

    const cookieStore = await cookies();
      const token =  cookieStore.get("authToken")?.value;
    
      if (!token) redirect('/login');
    
      const [profileRes] = await Promise.allSettled([
        fetcher('profile/me/', {
          cache: 'no-store'
        }),
      ]);
    
      const results = [profileRes];
      if (results.some(r => r.status === 'fulfilled' && r.value?.unauthorized)) {
        cookieStore.delete("authToken");
        redirect('/login')
      }
    
      const profileData = profileRes.status === 'fulfilled' ? profileRes.value : null;
      
    return (
        <div className="container-xl lg:container m-auto text-gray-800 p-5">
            <div className="flex flex-col gap-5">
                <header className="flex justify-between w-full">
                    <div className="flex gap-5 py-2">
                        <ProfileImage data={profileData} width={50}  height={50}/>
                        <div>
                            <h4 className="font-bold text-xl">{profileData.first_name} {profileData.last_name} <span className="text-gray-500">({profileData.username})</span></h4>
                            <span className="text-sm text-gray-500">Tu cuenta personal</span>
                        </div>
                    </div>
                    <div>
                        <GoBackButton/>
                    </div>
                </header>
                <div className="container-xl lg:container m-auto flex flex-col md:flex-row w-full">
                    <div className="flex-1">
                        <SettingsNavBar/>
                    </div>
                    <div className="flex-3">
                        <section>{children}</section>
                    </div>
                </div>
            </div>
        </div>
        
    )
}