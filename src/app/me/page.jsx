import PensumTable from "../components/PensumTable";
import fetcher from "../lib/api/fetcher";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function MePage() {
  const cookieStore = await cookies();
  const token =  cookieStore.get("authToken")?.value;

  if (!token) redirect('login');

  const [profileRes, enrollmentRes, statsRes] = await Promise.allSettled([
    fetcher('profile/me/', {
      cache: 'no-store'
    }),
    fetcher('profile/enrollments/', {
      cache: 'no-store'
    }),
    fetcher("profile/stats", {
      cache: 'no-store'
    })
  ]);

  const results = [profileRes, enrollmentRes, statsRes];
  if (results.some(r => r.status === 'fulfilled' && r.value?.unauthorized)) {
    cookieStore.delete("authToken");
    redirect('/login')
  }

  const profileData = profileRes.status === 'fulfilled' ? profileRes.value : null;
  const enrollmentData = enrollmentRes.status === 'fulfilled' ? enrollmentRes.value : null;
  const enrollmentStats = statsRes.status === 'fulfilled' ? statsRes.value : null;
  
  return (
    <div className="h-full">
      <PensumTable profileData={profileData} enrollmentData={enrollmentData} statsData={enrollmentStats}/>
    </div>
    );
}