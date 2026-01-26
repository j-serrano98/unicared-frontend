export default function StepByStep({ step }) {

    const steps = [
        {step: 1, label: "Crear tu cuenta"},
        {step: 2, label: "Datos Personales"},
        {step: 3, label: "Selecciona tu carrera"},
        // {step: 4, label: "Confirmacion"},
    ]

    return(
        <div>
            <ol className="flex rounded-xl border py-8 mb-4 border-gray-700 bg-gray-900 justify-center flex-row items-center lg:gap-6">
                
                {
                    steps.map((s,i) => {

                        return (
                            <div key={i}>
                                <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                                    <svg className={`h-5 w-5 ${step == s.step ? "text-blue-400" : (step > s.step ? "text-blue-400" : "text-gray-400")}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p className={`text-sm font-medium leading-tight ${step == s.step ? "text-blue-400" : (step > s.step  ? "text-blue-400" : "text-gray-400")}`}>{s.label}</p>
                                </li>
                                

                                {s.step == steps.length ? "" : <div className="hidden h-px w-8 shrink-0 bg-gray-200 dark:bg-gray-700 md:block xl:w-16"></div>}
                                
                            </div>
                        )
                    })
                }
            </ol>
        </div>
    )
}