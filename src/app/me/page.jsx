import PensumTable from "../components/PensumTable";
import fetcher from "../lib/api/fetcher";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function MePage() {
  const cookieStore = await cookies();
  const token =  cookieStore.get("authToken")?.value;

  let profileData = null;
  let enrollmentData = null;
  let enrollmentStats = null;

  if (token){
    const profileRes = await fetcher('profile/', {
      cache: 'no-store'
    }
    )

    const enrollmentRes = await fetcher('profile/enrollments/', {
      cache: 'no-store'
    })

    const statsRes = await fetcher("profile/stats", {
      cache: 'no-store'
    })

    if (profileRes?.unauthorized || enrollmentRes?.unauthorized){
      cookieStore.delete("authToken");
      redirect('/login')
    }

    profileData = profileRes;
    enrollmentData = enrollmentRes
    enrollmentStats = statsRes
    
  }
  else {
    redirect('/login')
  }



  
  return (
      <PensumTable profileData={profileData} enrollmentData={enrollmentData} statsData={enrollmentStats}/>
    );
}