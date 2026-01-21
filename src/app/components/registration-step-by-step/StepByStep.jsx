export default function StepByStep({ step }) {

    return(
        <div className="space-y-6 sm:space-y-8">
            <ol className="flex flex-col g  ap-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 sm:justify-center md:flex-row md:items-center lg:gap-6">
                
                <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                    <svg className={`h-5 w-5 ${step == 1 ? "text-blue-400" : (step > 1 ? "text-blue-400" : "text-gray-500")}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className={`text-sm font-medium leading-tight ${step == 1 ? "text-blue-400" : (step > 1 ? "text-blue-400" : "text-gray-500")}`}>Crear tu cuenta</p>
                </li>

                <div className="hidden h-px w-8 shrink-0 bg-gray-200 dark:bg-gray-700 md:block xl:w-16"></div>
                
                <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                    <svg className={`h-5 w-5 ${step == 2 ? "text-blue-400" : (step > 2 ? "text-blue-400" : "text-gray-500")}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className={`text-sm font-medium leading-tight ${step == 2 ? "text-blue-400" : (step > 2 ? "text-blue-400" : "text-gray-500")}`}>Datos Personales</p>
                </li>

                <div className="hidden h-px w-8 shrink-0 bg-gray-200 dark:bg-gray-700 md:block xl:w-16"></div>

                <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                    <svg className={`h-5 w-5 ${step == 3 ? "text-blue-400" : (step > 3 ? "text-blue-400" : "text-gray-500")}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className={`text-sm font-medium leading-tight ${step == 3 ? "text-blue-400" : (step > 3 ? "text-blue-400" : "text-gray-500")}`}>Selecciona tu carrera</p>
                </li>

                <div className="hidden h-px w-8 shrink-0 bg-gray-200 dark:bg-gray-700 md:block xl:w-16"></div>

                {/* <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                    <svg className={`h-5 w-5 ${step == 4 ? "text-blue-400" : (step > 4 ? "text-blue-400" : "text-gray-500")}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className={`text-sm font-medium leading-tight ${step == 4 ? "text-blue-400" : (step > 4 ? "text-blue-400" : "text-gray-500")}`}>Selecciona tus materias</p>
                </li>

                <div className="hidden h-px w-8 shrink-0 bg-gray-200 dark:bg-gray-700 md:block xl:w-16"></div> */}

                <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                    <svg className={`h-5 w-5 ${step == 5 ? "text-blue-400" : "text-gray-500"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className={`text-sm font-medium leading-tight ${step == 5 ? "text-blue-400" : "text-gray-500"}`}>Confirmacion</p>
                </li>

            </ol>
        </div>
    )
}