"use client"
import React, { useState } from "react"
import CareerList from "@/app/components/CareerList"
import CreateAccount from "@/app/components/CreateAccount";
import SubjectsList from "@/app/components/SubjectsList";

export default function RegisterPage() {
    const [registrationStep, setRegistrationStep] = useState(1);

    // function handleNextStep() {
    //     setRegistrationStep(registrationStep + 1);

        const renderStepComponent = () => {
            switch (registrationStep) {
                case 1:
                    return <CreateAccount/>;
                case 2:
                    return <CareerList/>;
                case 3:
                    return <SubjectsList/>;
                default:
                    return <CreateAccount/>;
            }   
    }
    return(
        <div className="bg-gray-900 h-full    ">
            <div className="container flex justify-between py-16 mx-auto px-16">
                <div>
                    <div className="mb-8 flex space-x-3 rtl:space-x-reverse">
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd"/>
                        </svg>
                        <div>
                            <span className="text-white font-semibold text-2xl block">Registrate rapidamente</span>
                            <span className="text-gray-400">Crea tu cuenta en simples pasos</span>
                        </div>
                    </div>
                    <div className="mb-8 flex space-x-3 rtl:space-x-reverse">
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd"/>
                        </svg>
                        <div>
                            <span className="text-white font-semibold text-2xl block">Registra tu progreso academico</span>
                            <span className="text-gray-400">Gestiona las materias de tu carrera en curso</span>
                        </div>
                    </div>
                    <div className="mb-8 flex space-x-3 rtl:space-x-reverse">
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd"/>
                        </svg>
                        <div>
                            <span className="text-white font-semibold text-2xl block">Encuentra y comparte recursos</span>
                            <span className="text-gray-400">Conecta con una comunidad que se parezca a ti</span>
                        </div>
                    </div>

                </div>
                <CreateAccount />
            </div>
        </div>
        // <section className="bg-white py-8 antialiased  md:py-16">
        //     <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 dark:bg-gray-900">
        //         <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">Crea tu cuenta</h2>
        //         <div className="gap-8 lg:flex">
        //         <form action="#" className="w-full space-y-6 lg:space-y-8">
        //             <div className="space-y-6 sm:space-y-8">
        //             <ol className="flex flex-col g  ap-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 sm:justify-center md:flex-row md:items-center lg:gap-6">
        //                 <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
        //                 <svg className="h-5 w-5 text-primary-700 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        //                 </svg>
        //                 <p className="text-sm font-medium leading-tight text-primary-700 dark:text-primary-500">Registro</p>
        //                 </li>

        //                 <div className="hidden h-px w-8 shrink-0 bg-gray-200 dark:bg-gray-700 md:block xl:w-16"></div>

        //                 <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
        //                 <svg className="h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        //                 </svg>
        //                 <p className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-400">Selecciona tu carrera</p>
        //                 </li>

        //                 <div className="hidden h-px w-8 shrink-0 bg-gray-200 dark:bg-gray-700 md:block xl:w-16"></div>

        //                 <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
        //                 <svg className="h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        //                 </svg>
        //                 <p className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-400">Selecciona tus materias</p>
        //                 </li>

        //                 <div className="hidden h-px w-8 shrink-0 bg-gray-200 dark:bg-gray-700 md:block xl:w-16"></div>

        //                 <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
        //                 <svg className="h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        //                 </svg>
        //                 <p className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-400">Confirmacion</p>
        //                 </li>
        //             </ol>
        //             </div>

        //             <div className="space-y-6">
        //                 {renderStepComponent()}

        //             <div className="gap-4 sm:flex sm:items-center sm:justify-between">
        //                 <button type="button" className="w-full rounded-lg  border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">Cancel</button>
        //                 <div className="flex gap-3">
        //                     <button type="button" className="mr-3 mb-4 hover:cursor-pointer hover:underline  px-5 py-2.5 text-sm font-medium text-gray-900  hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100  dark:text-gray-400  dark:hover:text-white dark:focus:ring-gray-700 sm:mb-0">Saltar</button>
        //                     <button onClick={() => setRegistrationStep(registrationStep + 1)} type="button" className="mt-4 flex w-full items-center justify-center rounded-lg border border-primary-700 bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:border-primary-800 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-primary-700 dark:bg-primary-600 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800  sm:mt-0 sm:w-auto">Siguiente</button>
        //                 </div>
        //             </div>
        //             </div>
        //         </form>
        //         </div>
        //     </div>
        // </section>
    )
}