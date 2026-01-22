"use client"
import React, { useState } from "react"
import CareerList from "@/app/components/CareerList"
import CreateAccount from "@/app/components/CreateAccount";
import SubjectsList from "@/app/components/SubjectsList";

export default function RegisterPage() {
    
    return(
        <div className="bg-gray-900 h-full flex items-center">
            <div className="container flex justify-between mx-auto">
                <div className="hidden md:block">
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
        
    )
}