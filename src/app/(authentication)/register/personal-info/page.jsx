import PersonalInfo from "@/app/components/registration-step-by-step/PersonalInfo";
import StepByStep from "@/app/components/registration-step-by-step/StepByStep"
import fetcher from "@/app/lib/api/fetcher";

export default async function PersonalInfoPage() {
    
    function updateProfileCareer() {

    }
    return(
        <section className="bg-white antialiased p-16">
            <div className="mx-auto max-w-screen-xl p-10 bg-gray-900">
                <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">Proceso de Registro</h2>
                <div className="">
                    <StepByStep step={2}/>
                    <form action="#" className="w-full space-y-6 lg:space-y-8">

                        <div className="flex">
                            <PersonalInfo />
                        </div>

                        <div className="space-y-6">

                        <div className="gap-4 sm:flex sm:items-center sm:justify-between">
                            <button type="button" className="w-full rounded-lg  border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">Cancel</button>
                            <div className="flex gap-3">
                                <a  href="career/" className="mr-3 mb-4 hover:cursor-pointer hover:underline  px-5 py-2.5 text-sm font-medium text-gray-900  hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100  dark:text-gray-400  dark:hover:text-white dark:focus:ring-gray-700 sm:mb-0">Saltar</a>
                                <a  href="career/" className="mt-4 flex w-full items-center justify-center rounded-lg border border-primary-700 bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:border-primary-800 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-primary-700 dark:bg-primary-600 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800  sm:mt-0 sm:w-auto">Siguiente</a>
                            </div>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
            
    )
}