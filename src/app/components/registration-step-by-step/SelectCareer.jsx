"use client"

export default function SelectCareer( { careers }) {

    return (
        <section>
            <h2 className="my-4 text-xl font-bold text-gray-900 dark:text-white">2. Datos Personales</h2>
            <div className="grid grid-cols-4 gap-4 py-4">
                {careers.slice(0,5).map((career) => {
                    
                    return (
                        <div key={career.id} className="flex-column text-center items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="flex justify-center">
                                <svg className="me-2 h-10 w-10 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                                </svg>
                            </div>
                            <div>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">{career.name}</span>
                            </div>
                        </div>
                    )}
                )}
            </div>
        </section>
    )
}