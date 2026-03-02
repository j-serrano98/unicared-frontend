"use client"
import React, { useState, useEffect } from "react"
import { CldImage } from "next-cloudinary";

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

        <section className="flex flex-col gap-5 antialiased bg-gray-900 px-4 md:py-8">

            {/* Social Networks */}
            <div className="w-full mx-auto max-w-screen-2xl 2xl:px-12">
                <div className="flex justify-end gap-5 pe-5">
                        <a href={profile.fb_url} target="_blank">
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                            </svg>
                        </a>
                        <a href={profile.linkedin_url} target="_blank">
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                            </svg>
                        </a>
                        <a href={profile.instagram_user} target="_blank">
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                            </svg>
                        </a>
                        <a href={profile.github_user} target="_blank">
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                            </svg>
                        </a>
                </div>
            </div>

            {/* Profile Information */}
            <div className="w-full mx-auto max-w-screen-2xl 2xl:px-12">
                    <div className="grid gap-4 sm:gap-8 lg:gap-16">
                        <div className="grid md:grid-cols-4 gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4 border-gray-700 bg-gray-800 md:p-6">
                            <div className="flex justify-between ">
                                <div className="flex space-x-4">
                                    <CldImage
                                    className="rounded-lg"
                                    src={profile.profile_pic}
                                    width={100}
                                    height={80}
                                    alt={`Foto de perfil de ${profile.first_name} ${profile.last_name}`}
                                    />
                                    <div>
                                    <span className={`mb-2 inline-block rounded bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-beige-800 text-beige-300`}>{statsData?.current_rank?.level_name ?? "Pino Nuevo"}</span>
                                    <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 text-white sm:text-2xl">{profile.first_name ? `${profile.first_name} ${profile.last_name}` : `${profile?.username}`}</h2>
                                    <div className="flex items-center gap-1 text-gray-500 text-gray-400">{profile.career_name}</div>
                                    {/* <div className="text-gray-500 text-gray-400">{profile.email}</div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="font-semibold text-gray-900 text-white">Bio</div>
                                <div className="text-gray-500 text-gray-400">{(profile?.bio)?.length == 0 ? <span className="italic">Aun no has agregado nada</span> : profile?.bio}</div>
                            </div>
                            <div className="">
                                <div className="font-semibold text-gray-900 text-white">Correo Electronico</div>
                                <div className="text-gray-500 text-gray-400">{(profile?.email)?.length == 0 ? <span className="italic">Sin especificar</span> : profile?.email}</div>
                            </div>
                            <div className="">
                                <div className="font-semibold text-gray-900 text-white">Direccion</div>
                                <div className="text-gray-500 text-gray-400">{profile?.address == null ? <span className="italic">Sin especificar</span> : profile?.address}</div>
                            </div>
                        </div>
                    </div> 
            </div>

            {/* Statistics */}
            <div className="w-full mx-auto max-w-screen-2xl 2xl:px-12">
                <div className="flex flex-wrap md:flex-nowrap gap-5">
                    <div className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 border-gray-700 bg-gray-800 md:p-6">
                        <div className="flex gap-5">
                            <svg className="bg-blue-900 w-12 h-12 p-3 text-blue-400 rounded-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.78552 9.5 12.7855 14l9-4.5-9-4.5-8.99998 4.5Zm0 0V17m3-6v6.2222c0 .3483 2 1.7778 5.99998 1.7778 4 0 6-1.3738 6-1.7778V11"/>
                            </svg>
                            <div  className="flex flex-col gap-3">
                                <div>
                                    <div className="font-semibold text-gray-900 text-white text-lg">Carrera Iniciada</div>
                                    <div className="text-gray-500 text-gray-400">{statsData?.start_date}</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 text-white text-lg">Finaliza (Est.)</div>
                                    <div className="text-gray-500 text-gray-400">{statsData?.end_date}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 border-gray-700 bg-gray-800 md:p-6">
                        <div className="flex gap-5">
                            <svg className="bg-blue-900 w-12 h-12 p-3 text-blue-400 rounded-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M12.1429 11v9m0-9c-2.50543-.7107-3.19099-1.39543-6.13657-1.34968-.48057.00746-.86348.38718-.86348.84968v7.2884c0 .4824.41455.8682.91584.8617 2.77491-.0362 3.45995.6561 6.08421 1.3499m0-9c2.5053-.7107 3.1067-1.39542 6.0523-1.34968.4806.00746.9477.38718.9477.84968v7.2884c0 .4824-.4988.8682-1 .8617-2.775-.0362-3.3758.6561-6 1.3499m2-14c0 1.10457-.8955 2-2 2-1.1046 0-2-.89543-2-2s.8954-2 2-2c1.1045 0 2 .89543 2 2Z"/>
                            </svg>
                            <div  className="flex flex-col gap-3">
                                <div>
                                    <div className="font-semibold text-gray-900 text-white text-lg">Asignaturas</div>
                                    <div className="text-gray-500 text-gray-400">{statsData?.total_enrollments ?? 0} Pensum</div>
                                    <div className="text-gray-500 text-gray-400">{statsData?.completed_enrollments ?? 0} Completadas</div>
                                    <div className="text-gray-500 text-gray-400">{statsData?.total_enrollments ? statsData?.total_enrollments - statsData?.completed_enrollments : 0} Restantes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 border-gray-700 bg-gray-800 md:p-6">
                        <div className="flex gap-5">
                            <svg className="bg-blue-900 w-12 h-12 p-3 text-blue-400 rounded-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5713 5h7v9h-7m-6.00001-4-3 4.5m3-4.5v5m0-5h3.00001m0 0h5m-5 0v5m-3.00001 0h3.00001m-3.00001 0v5m3.00001-5v5m6-6 2.5 6m-3-6-2.5 6m-3-14.5c0 .82843-.67158 1.5-1.50001 1.5-.82843 0-1.5-.67157-1.5-1.5s.67157-1.5 1.5-1.5 1.50001.67157 1.50001 1.5Z"/>
                            </svg>
                            <div  className="flex flex-col gap-3">
                                <div className="font-semibold text-gray-900 text-white text-lg">3 Profesores</div>
                                <div className="font-semibold text-gray-900 text-white text-lg">{statsData?.total_reviews ?? 0} Reseñas</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 border-gray-700 bg-gray-800 md:p-6">
                        <div className="flex gap-5">
                            <svg className="bg-blue-900 w-12 h-12 p-3 text-blue-400 rounded-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4.07141 14v6h5.99999v-6H4.07141Zm4.5-4h6.99999l-3.5-6-3.49999 6Zm7.99999 10c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5 1.567 3.5 3.5 3.5Z"/>
                            </svg>
                            <div  className="flex flex-col gap-3">
                                <div>
                                    <div className="font-semibold text-gray-900 text-white text-lg">PGA</div>
                                    <div className="text-gray-500 text-gray-400">{statsData?.gpa ? statsData?.gpa?.toFixed(2) : "NA"}</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 text-white text-lg">Progreso</div>
                                    <div className="text-gray-500 text-gray-400">{statsData?.completion_rate?.toFixed(2) ?? 0.00}%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            

            <div className="w-full mx-auto max-w-screen-2xl lg:px-12">
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
                                                        {enrollment.status != "NT" && enrollment?.review?.comment != null && enrollment.review?.average == null ? "Sin puntuacion" : (
                                                            (enrollment.status != "NT" && enrollment?.review?.comment == null && enrollment.review?.average != null) || (enrollment.status != "NT" && enrollment?.review?.comment != null && enrollment.review?.average != null) ? (
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
                                                        ) : "Sin Reseña"
                                                        )}
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

