"use client"
import React, { useState, useEffect } from "react"
import Image from 'next/image'

const statusOptions = [
        { value: "NT", label: "Sin Iniciar" },
        { value: "IP", label: "En Progreso" },
        { value: "CM", label: "Completado" },
    ];

export default function PensumTable( { profileData, enrollmentData, statsData }) {

    const [profile, setProfile] = useState([]);
    const sortedEnrollments = [...enrollmentData].sort((a,b) => a.subject_period - b.subject_period);

    useEffect(() => {

        try{
            setProfile(profileData);

        }
        catch (error) {

            console.error('Error fetching profile:', error)

        }
    }, [])

    return (

        <section className="py-8 antialiased bg-gray-900 md:py-8">
            <div className="mx-auto max-w-screen-2xl px-4 2xl:px-12">
                <div className="">
                    <div className="mb-4 grid gap-4 sm:gap-8 lg:gap-16">
                        <div className="grid md:grid-cols-6 rounded-lg border border-gray-200 bg-gray-50 p-4 border-gray-700 bg-gray-800 md:p-6">
                            <div className="flex justify-between col-span-2">
                                <div className="flex space-x-4">
                                    <Image
                                    className="rounded-lg"
                                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                                    width={100}
                                    height={90}
                                    alt="Picture of the author"
                                    />
                                    <div>
                                    <span className={`mb-2 inline-block rounded bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-beige-800 text-beige-300`}>{statsData?.current_rank.level_name}</span>
                                    <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 text-white sm:text-2xl">{profile.first_name ? `${profile.first_name} ${profile.last_name}` : `${profile?.username}`}</h2>
                                    <div className="flex items-center gap-1 text-gray-500 text-gray-400">{profile.career_name}</div>
                                    {/* <div className="text-gray-500 text-gray-400">{profile.email}</div> */}
                                    </div>
                                </div>
                                {/* <button type="button" data-modal-target="accountInformationModal2" data-modal-toggle="accountInformationModal2" className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 sm:w-auto">
                                    <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"></path>
                                    </svg>
                                    Edit
                                </button> */}
                            </div>
                            <div className="ps-2">
                                <div className="flex flex-colum gap-5 pt-4 md:pt-0">
                                    <div>
                                        <div className="font-semibold text-gray-900 text-white">Carrera Iniciada</div>
                                        <div className="text-gray-500 text-gray-400">{statsData?.start_date}</div>
                                    </div>
                                        
                                    <div>
                                        <div className="font-semibold text-gray-900 text-white">Finaliza (Est.)</div>
                                        <div className="text-gray-500 text-gray-400">{statsData?.end_date}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-2 col-span-2">
                                {/* <div className="flex flex-colum gap-5 pt-3"> */}
                                <div className="flex flex-colum gap-5 pt-4 md:pt-0">
                                    <div>
                                        <div className="font-semibold text-gray-900 text-white">Asignaturas</div>
                                        <div className="text-xl text-gray-500 text-gray-400">{statsData?.total_enrollments ?? 0}</div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-white">Completadas</div>
                                        <div className="text-xl text-gray-500 text-gray-400">{statsData?.completed_enrollments ?? 0}</div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-white">Restantes</div>
                                        <div className="text-xl text-gray-500 text-gray-400">{statsData?.total_enrollments ? statsData?.total_enrollments - statsData?.completed_enrollments : 0}</div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-white">PGA</div>
                                        <div className="text-xl text-gray-500 text-gray-400">{statsData?.gpa ? statsData?.gpa?.toFixed(2) : "NA"}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-2">
                                <div className="flex-colum gap-5 pt-4 md:pt-0">
                                    <div className="font-semibold text-gray-900 text-white">Reseñas Completadas</div>
                                    <div className="text-xl text-gray-500 text-gray-400">{statsData?.total_reviews ?? 0}</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>  
            </div>

            <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
                <div className="relative overflow-hidden shadow-md bg-gray-800 sm:rounded-lg">
                    <div className="h-screen overflow-y-auto mb-5 border border-gray-700">
                        <table className="w-full text-sm text-left text-gray-500 text-gray-400 table-fixed">
                            <thead className="sticky top-0 z-10 text-xs text-white uppercase bg-gray-700">
                                <tr>
                                    <th scope="col" className="w-10 p-4"></th>
                                    <th className="w-40 md:w-80 px-4 py-3">Asignatura</th>
                                    <th className="w-80 px-12 py-3 hidden md:table-cell">Profesor</th>
                                    <th className="w-15 md:w-40 px-4 py-3 text-center">Estado</th>
                                    <th className="w-24 px-4 py-3 hidden md:table-cell text-center">Creditos</th>
                                    <th className="w-25 md:w-24 py-3 text-center">Calificación</th>
                                    <th className="w-48 px-4 py-3 hidden md:table-cell text-center">Reseña</th>
                                    <th className="w-40 px-4 py-3 hidden md:table-cell text-center">Fecha Completada</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!profile.onboarding_completed ? (
                                    <tr>
                                        <td colSpan={8} className="px-4 py-[10rem] text-center text-lg font-semibold text-white">
                                            Selecciona tu <a href="/register/career" className="text-red-700">carrera</a> para visualizar tus materias.
                                        </td>
                                    </tr>
                                ) : null}

                                {sortedEnrollments.sort((a, b) => a.subject - b.subject).map((enrollment, index) => {
                                    const prev = sortedEnrollments[index - 1];
                                    const showPeriodHeader = index === 0 || enrollment.subject_period !== prev.subject_period;

                                    const reviewAverage = enrollment.review?.average;
                                    const filledStars = Math.round(reviewAverage / 2);
                                    const emptyStars = 5 - Math.round(reviewAverage / 2);

                                    return (
                                        <React.Fragment key={enrollment.id}>
                                            {showPeriodHeader && (
                                                <tr className="bg-[#1F2937]">
                                                    <td
                                                        colSpan={8} // Always set to max
                                                        className="w-100 md:w-auto px-4 md:px-16 py-2 text-sm font-semibold text-white block md:table-cell flex"
                                                    >
                                                        <span className="text-center md:text-start">
                                                            {enrollment.subject_period}º CUATRIMESTRE
                                                        </span>
                                                    </td>
                                                </tr>
                                            )}
                                            <tr className="border-b border-gray-600 bg-[#111827] hover:bg-gray-700">
                                                <td className="w-4 px-4 py-3">
                                                    <div className="flex items-center text-white hover:text-blue-500 hover:cursor-pointer">
                                                        <a href={`/me/enrollments/${enrollment.id}`}>
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                                
                                                {/* SUBJECT CELL: Added 'whitespace-normal' and 'break-words' to allow wrapping on mobile */}
                                                <th scope="row" className="px-4 py-2 font-medium text-white whitespace-normal break-words">
                                                    {enrollment.subject_name}
                                                </th>

                                                {/* PROFESSOR: hidden on mobile, table-cell on desktop */}
                                                <td className="px-10 py-2 hidden md:table-cell">
                                                    <span className="bg-primary-900 text-primary-300 text-xs font-medium px-2 py-0.5 rounded">
                                                        {enrollment.teacher_name ?? "Sin Asignar"}
                                                    </span>
                                                </td>

                                                <td className="px-4 py-2 font-medium text-white">
                                                    <div className="flex items-center justify-center md:justify-start">
                                                        <div className={`w-3 h-3 rounded-full ${
                                                            enrollment.status === "NT" ? "bg-gray-500" : 
                                                            enrollment.status === "IP" ? "bg-yellow-500" : "bg-green-500"
                                                        }`}></div>
                                                        {/* Label hidden on mobile, shown on desktop */}
                                                        <span className="hidden md:inline ml-2">
                                                            {statusOptions.find(e => e.value === enrollment.status)?.label}
                                                        </span>
                                                    </div>
                                                </td>

                                                {/* CREDITS: hidden on mobile */}
                                                <td className="px-4 py-2 hidden md:table-cell text-center text-white">
                                                    {enrollment.subject_credits}
                                                </td>

                                                <td className="px-4 py-2 text-center text-white">
                                                    {enrollment.grade != null ? enrollment.grade : "--"}
                                                </td>

                                                {/* REVIEWS: hidden on mobile */}
                                                <td className="px-4 py-2 hidden md:table-cell text-center text-white">
                                                    <div className="flex items-center justify-center">
                                                        {enrollment.review?.average != null ? (
                                                            <>
                                                                {
                                                                    Array.from({ length: filledStars }).map((_, i) => (
                                                                    <svg key={i} className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                                    </svg>                            
                                                                    ))
                                                                }
                                                                {
                                                                    Array.from({ length: emptyStars} ).map((_, i) => (
                                                                    <svg key={i} className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                        <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
                                                                    </svg>                              
                                                                    ))
                                                                }
                                                            </>
                                                        ) : "Sin Reseña"}
                                                    </div>
                                                </td>

                                                {/* DATE: hidden on mobile */}
                                                <td className="px-4 py-2 hidden md:table-cell text-center text-white">
                                                    {enrollment.completion_date ?? "--"}
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    {/* <nav className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
                        <span className="text-sm font-normal text-gray-500 text-gray-400">
                            Showing
                            <span className="font-semibold text-gray-900 text-white"> {startIndex+1}-{startIndex+PAGE_SIZE} </span>
                            of
                            <span className="font-semibold text-gray-900 text-white"> {enrollmentData.length}</span>
                        </span>
                        <ul className="inline-flex items-stretch -space-x-px">
                            <li>
                                <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                                    <span className="sr-only">Previous</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 border-gray-700 bg-gray-700 text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">...</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">100</a>
                            </li>
                            <li>
                                <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                                    <span className="sr-only">Next</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </nav> */}
                </div>
            </div>
            </section>
    )
}

