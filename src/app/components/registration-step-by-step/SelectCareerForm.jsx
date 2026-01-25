"use client"

import { useState } from "react"
import { useFormState } from "react-dom";
import { updateCareerAction } from "@/app/actions/updateCareer";
import { useRouter } from "next/navigation";

const initialState = {
    success: null,
    error: null,
};

export default function SelectCareerForm({ profile, careers }) {

    const [state, formAction] = useFormState(updateCareerAction, initialState);
    const [selectedCareer, setSelectedCareer] = useState(profile.career);

    const router = useRouter();

    function goBack() {
        router.back();
    }
    
    function skipForm() {
        router.push("/me");
    }

    return (

        <section className="py-4 h-full">
            <h2 className="mb-4 text-xl font-bold text-gray-900">3. Selecciona tu Carrera</h2>
            <form action={formAction} className="h-full">
                <div className="grid grid-cols-4 gap-4 bg-gray-900 p-8 rounded-xl overflow-auto h-[50vh]">
                    {careers.sort((a, b) => a.id - b.id).slice(0,5).map((career) => {
                        
                        return (
                            <div onClick={() => setSelectedCareer(career.id)} key={career.id} className={`flex-column h-30 text-center items-center rounded-lg  px-4 py-2  active:bg-gray-800 ${selectedCareer==career.id ? "bg-gray-800 border-3 border-blue-600" : "bg-gray-800 border border-gray-700"} hover:cursor-pointer hover:bg-gray-700 `}>
                                <div className="flex justify-center">
                                    <svg className="me-2 h-10 w-10 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                                    </svg>
                                    <input type="radio" id={career.id} name="career_id" value={career.id} checked={selectedCareer==career.id} hidden/>
                                </div>
                                
                                <div>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">{career.name}</span>
                                </div>
                            </div>
                        )}
                    )}
                </div>
                <div className="pt-4">
                    <div className="gap-4 sm:flex sm:items-center sm:justify-between">
                        <a onClick={() => goBack()} className="mt-4 flex w-full items-center justify-center rounded-lg border border-gray-900 bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:border-gray-800 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-primary-700 dark:bg-primary-600 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800  sm:mt-0 sm:w-auto">Atras</a>
                        <div className="flex gap-3">
                            <a  onClick={() => skipForm()} className="mr-3 mb-4 hover:cursor-pointer hover:underline  px-5 py-2.5 text-sm font-medium text-gray-900  hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:mb-0">Omitir</a>
                            <button  className="hover:cursor-pointer mt-4 flex w-full items-center justify-center rounded-lg border border-gray-900 bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:border-gray-800 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-primary-700 dark:bg-primary-600 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800  sm:mt-0 sm:w-auto">Siguiente</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}