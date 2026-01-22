import PersonalInfoForm from "@/app/components/registration-step-by-step/PersonalInfoForm";
import StepByStep from "@/app/components/registration-step-by-step/StepByStep"

export default async function PersonalInfoPage() {
    return(
            <div className="mx-auto max-w-screen-xl p-10 h-full">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Proceso de Registro</h2>
                <div className="">
                    <StepByStep step={2}/>
                    <PersonalInfoForm />
                </div>
            </div>
            
    )
}