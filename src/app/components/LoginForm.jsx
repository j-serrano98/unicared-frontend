"use client";
// import React, { useState } from "react";
import { useFormState } from "react-dom";
import { loginAction } from "../actions/login";

const initialState = {
    success: null,
    error: null,
};


export default function LoginForm() {

    const [state, formAction] = useFormState(loginAction, initialState);
    // function termsClicked() {
    //     setTermsAccepted(!termsAccepted);
    // }
    
    return (
        <section className="bg-gray-900 w-[500px]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <div className="p-6 space-y-2">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                            Inicia Sesion
                        </h1>
                        {/* <div className="flex justify-between mt-4">
                            <button type="button" className="mx-2 flex-1 hover:cursor-pointer text-sm text-center border border-gray-300 px-4 py-2 rounded-md text-gray-300 hover:size-up">
                                Login with Google
                            </button>
                            <button type="button" className="mx-2 flex-1 hover:cursor-pointer text-sm text-center border border-gray-300 px-4 py-2 rounded-md text-gray-300 hover:size-up">
                                Login with Facebook
                            </button>
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                            <hr className="my-6 border-gray-300 w-full"/>
                            <span className="text-white">or</span>
                            <hr className="my-6 border-gray-300 w-full"/>
                        </div> */}
                        <form className="space-y-4 md:space-y-6" action={formAction}>

                            {state?.error && (
                                <div className="text-red-500 text-sm bg-red-100 p-2 rounded">
                                    {state.error}
                                </div>
                            )}
                            
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Nombre de Usuario</label>
                                <input type="text" name="username" id="username" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="MiUsuario123" required/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Contraseña</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required/>
                            </div>
                            {/* <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input onChange={termsClicked} id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">Recuerdame</label>
                                </div>
                            </div> */}
                            <button className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 bg-blue-600 hover:bg-blue-700 hover:cursor-pointer dark:focus:ring-blue-800">Inicia Sesion</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Aun no tienes una cuenta? <a href="/register/" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Regístrate</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            </section>
    )
    }