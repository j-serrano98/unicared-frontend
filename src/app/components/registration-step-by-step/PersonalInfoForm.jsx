"use client"

import { useState } from "react"
import { useFormState } from "react-dom";
import { updateProfileAction } from "@/app/actions/updateProfile";
import { useRouter } from "next/navigation";

const initialState = {
    success: null,
    error: null,
};

const provincias = [
    { id: "DN", nombre: "Distrito Nacional" },
    { id: "AZ", nombre: "Azua" },
    { id: "BA", nombre: "Baoruco" },
    { id: "BH", nombre: "Barahona" },
    { id: " DA", nombre: "Dajabón" },
    { id: "DU", nombre: "Duarte" },
    { id: "EL", nombre: "Elias Piña" },
    { id: "EY", nombre: "El Seibo" },
    { id: "ES", nombre: "Espaillat" },
    { id: "HM", nombre: "Hato Mayor" },
    { id: "HN", nombre: "Hermanas Mirabal" },
    { id: "IN", nombre: "Independencia" },
    { id: "HI", nombre: "La Altagracia" },
    { id: "RO", nombre: "La Romana" },
    { id: "VE", nombre: "La Vega" },
    { id: "MT", nombre: "María Trinidad Sánchez" },
    { id: "MN", nombre: "Monseñor Nouel" },
    { id: "MC", nombre: "Monte Cristi" },
    { id: "MP", nombre: "Monte Plata" },
    { id: "PE", nombre: "Pedernales" },
    { id: "PR", nombre: "Peravia" },
    { id: " PU", nombre: "Puerto Plata" },
    { id: "SA", nombre: "Samaná" },
    { id: "SC", nombre: "San Cristóbal" },
    { id: "JO", nombre: "San José de Ocoa" },
    { id: "JU", nombre: "San Juan" },
    { id: "PM", nombre: "San Pedro de Macorís" },
    { id: "ST", nombre: "Sánchez Ramírez" },
    { id: "SG", nombre: "Santiago" },
    { id: "SR", nombre: "Santiago Rodríguez" },
    { id: "SD", nombre: "Santo Domingo" },
    { id: "VA", nombre: "Valverde" }
];

export default function PersonalInfoForm() {

    const [state, formAction] = useFormState(updateProfileAction, initialState);

    const router = useRouter();

    function goBack() {
        router.back();
    }
    
    function skipForm() {
        router.push("/me");
    }

    return (

        <section className="py-4">
            <h2 className="mb-4 text-xl font-bold text-gray-900">2. Datos Personales</h2>
            <form action={formAction}>
                <div className="grid gap-4 grid-cols-10 gap-6 bg-gray-900 p-8 rounded-xl">
                    <div className="col-span-5 gap-6">
                        <div className="col-span-5">
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre*</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Jose Perez" required/>
                        </div>
                        <div className="flex justify-between w-full gap-6 my-6">
                            <div className="w-100">
                                <label for="birth-date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Nacimiento <span className="text-xs">(opcional)</span></label>
                                <input type="date" name="birth_date" id="birth-date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                            </div> 
                            <div className="w-100">
                                <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero de Contacto <span className="text-xs">(opcional)</span></label>
                                <input type="tel" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="8X9XXXXXXX"/>
                            </div>
                        </div>
                        <div className="my-6">
                            <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Direccion <span className="text-xs">(opcional)</span></label>
                            <input type="text" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Calle Max Henriquez Ureña #1"/>
                        </div>
                        <div className="flex justify-between w-full gap-6 my-6">
                            <div className="w-full">
                                <label for="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provincia <span className="text-xs">(opcional)</span></label>
                                <select id="state" name="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue="">
                                    <option value="" disabled>Selecciona tu provincia</option>
                                    {provincias.map((p) => (
                                        <option key={p.id} value={p.id}>
                                            {p.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full">
                                <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website personal <span className="text-xs">(opcional)</span></label>
                                <input type="url" name="website" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="https://www.miwebsite.com"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5">
                        <div className="sm:col-span-2">
                            <label for="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biografia <span className="text-xs">(opcional)</span></label>
                            <textarea id="bio" name="bio" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Me gustan los gatos!"></textarea>
                        </div>
                        <div className="flex justify-between w-full gap-6 my-6">
                            <div className="w-full">
                                <label for="linkedin-url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Linkedin URL <span className="text-xs">(opcional)</span></label>
                                <input type="url" name="linkedin_url" id="linkedin-url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="https://www.linkedin.com/in/jose-perez"/>
                            </div>
                            <div className="w-full">
                                <label for="fb-url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook URL<span className="text-xs">(opcional)</span></label>
                                <input type="url" name="fb_url" id="fb-url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="https://www.facebook.com/JosePerez"/>
                            </div>
                        </div>
                        <div className="flex justify-between w-full gap-6 my-6">
                            <div className="w-full">
                                <label for="github-user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github <span className="text-xs">(opcional)</span></label>
                                <input type="text" name="github_user" id="github-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="j-perez26"/>
                            </div>
                            <div className="w-full">
                                <label for="instagram-user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instagram <span className="text-xs">(opcional)</span></label>
                                <input type="text" name="instagram_user" id="instagram-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="j-perez26"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <div className="gap-4 sm:flex sm:items-center justify-end">
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