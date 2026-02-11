"use client";

import React from "react";
import { updateEnrollmentAction } from "../actions/updateEnrollment";
import GoBackButton from "./GoBackButton"

const initialState = {
    success: null,
    error: null,
};


const statusOptions = [
    { value: "NT", label: "No Inscrito" },
    { value: "IP", label: "En Progreso" },
    { value: "CM", label: "Completada" },
];

const reviewSkills = [
    "punctuality",
    "clarity",
    "justice",
    "support",
    "flexibility",
    "knowledge",
    "methodology",
]

export default function EnrollmentFormUpdate({ enrollmentData, teachersData }) {
    const [state, formAction] = React.useActionState(
        updateEnrollmentAction,
        initialState
    );    

    const enrollment = enrollmentData;

    return(
        <section className="h-full py-16">
            <div className="p-8 md:p-10 mx-6 md:mx-15 bg-gray-900 rounded-xl">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Actualizar Inscripción</h2>
                <form action={formAction}>
                    <input type="hidden" name="id" value={enrollment.id} />
                    <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        {/* Subject */}
                        <div className="grid gap-4 mb-4 sm:grid-cols-3 sm:gap-6 sm:mb-5">
                            <div className="sm:col-span-3">
                                <label htmlFor="subject-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Asignatura</label>
                                <input type="text" name="subject_name" id="subject-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={enrollment.subject_name} readOnly={true}/>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="teacher-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profesor</label>
                                <select id="teacher-name" name="teacher" defaultValue={enrollment.teacher_uuid ?? ""} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="">Sin Asignar</option>
                                    {teachersData.map((t) => <option key={t.uuid} value={t.uuid}>{t.name}</option>)}
                                </select>
                            </div>
                            <div className="w-full">
                                <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado</label>
                                <select id="status" name="status" defaultValue={enrollment.status} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    {statusOptions.map((s, i) => <option key={s.value} value={s.value}>{s.label}</option>)}
                                </select>
                            </div>
                            <div className="w-full">
                                <label htmlFor="grade" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Calificación</label>
                                <input type="number" name="grade" id="grade" max={100} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  defaultValue={enrollment.grade ?? ""}/>
                            </div>
                            <div>
                                <label htmlFor="completion-date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha Completada</label>
                                <input type="date" name="completion_date" id="completion-date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={enrollment.completion_date ?? ""} required=""/>
                            </div> 
                            <div className="sm:col-span-3">
                                <label htmlFor="comment-review" className="block mb-2.5 text-sm font-medium text-heading dark:text-white">Reseña</label>
                                <textarea id="comment-review" name="comment_review" rows="4" cols="4" className="bg-neutral-secondary-medium border rounded-md text-heading text-sm rounded-base focus:ring-brand dark:bg-gray-700 focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body text-white" placeholder="Escribe tu reseña aqui...">{enrollment.review?.comment ?? null}</textarea>
                            </div> 
                        </div>

                        {/* Review */}


                        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                            <label htmlFor="comment-review" className="block mb-2.5 text-sm font-medium text-heading dark:text-white">Evaluación</label>
                            <table className="w-full text-sm text-center text-body">
                                <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default dark:bg-gray-700">
                                    <tr>
                                        {Array.from({ length: 11 }).map((_, i) => <th key={i} scope="col" className="px-1 py-3 font-medium"><label className="text-white">{i == 0 ? "Habilidad" : i }</label></th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {reviewSkills.map(rs => (
                                        <tr key={rs} className="bg-neutral-primary border-b border-default">
                                            <th scope="row" className="py-4 font-medium text-heading whitespace-nowrap text-white">
                                                {rs.charAt(0).toUpperCase()}{rs.slice(1,rs.length)}
                                            </th>
                                            {Array.from({ length: 10 }).map((_, i) => (
                                                    <td key={i} className="px-1 py-4">
                                                        <input defaultChecked={enrollmentData.review?.skills?.filter(s => s.skill.toLowerCase() == rs)[0]['score']==i+1} key={`${rs}-${i+1}`} id={`${rs}-${i+1}`} type="radio" value={i+1} name={rs} className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default"/>
                                                    </td>
                                                ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="flex items-center justify-end space-x-4">
                            <button type="submit" className="text-white bg-green-700 hover:bg-green-900 hover:cursor-pointer hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Actualizar
                            </button>
                            <GoBackButton/>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}