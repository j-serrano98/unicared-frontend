import SelectCareerForm from "@/app/components/registration-step-by-step/SelectCareerForm";
import StepByStep from "@/app/components/registration-step-by-step/StepByStep"
import fetcher from "@/app/lib/api/fetcher";


export default async function CareerPage() {

    const careersData = await fetcher('careers/');
    return(
            <div className="mx-auto max-w-screen-xl p-10 h-full">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Proceso de Registro</h2>
                <div className="">
                    <StepByStep step={3}/>
                    <SelectCareerForm careers={careersData}/>
                </div>
            </div>
            
    )
}