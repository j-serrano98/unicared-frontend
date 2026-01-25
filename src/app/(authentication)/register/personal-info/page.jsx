import PersonalInfoForm from "@/app/components/registration-step-by-step/PersonalInfoForm";
import StepByStep from "@/app/components/registration-step-by-step/StepByStep"
import fetcher from "@/app/lib/api/fetcher";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function PersonalInfoPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken")?.value;

    let profileData = null;
    if (token) {
        const profileRes = await fetcher('profile/me/', {
            cache: 'no-store'
        })

        if (profileRes.onboarding_completed) redirect ('/')
            
        profileData = profileRes

    }
    return(
            <div className="mx-auto max-w-screen-xl p-10 h-full">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Proceso de Registro</h2>
                <div className="">
                    <StepByStep step={2}/>
                    <PersonalInfoForm profile={profileData} />
                </div>
            </div>
            
    )
}