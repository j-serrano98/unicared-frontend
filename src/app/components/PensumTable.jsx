"use client"
import React, { useState, useEffect } from "react"
import Image from 'next/image'

const PAGE_SIZE = 8;

const statusOptions = [
        { value: "NT", label: "Not taken" },
        { value: "IP", label: "In progress" },
        { value: "CM", label: "Completed" },
    ];

const tenureCategories = [
    { rate: 0.00, level: "Syntax Error", color: "slate" },
    { rate: 0.003, level: "Hello World Hero", color: "emerald" },
    { rate: 0.014, level: "Git Commit Gambler", color: "green" },
    { rate: 0.035, level: "Function Farmer", color: "teal" },
    { rate: 0.066, level: "The Bug Producer", color: "cyan" },
    { rate: 0.109, level: "Logic Labrator", color: "sky" },
    { rate: 0.164, level: "Refactor Rookie", color: "blue" },
    { rate: 0.232, level: "StackOverflow MVP", color: "indigo" },
    { rate: 0.314, level: "Deployment Daredevil", color: "violet" },
    { rate: 0.411, level: "Microservice Miner", color: "purple" },
    { rate: 0.523, level: "Design Pattern Priest", color: "fuchsia" },
    { rate: 0.651, level: "Legacy Code Exorcist", color: "pink" },
    { rate: 0.795, level: "System Sorcerer", color: "orange" },
    { rate: 0.957, level: "The 10x Myth", color: "amber" },
    { rate: 1.00, level: "The Senior Principal Deity", color: "yellow" }
];

export default function PensumTable( { profileData, enrollmentData, statsData }) {

    const [profile, setProfile] = useState([]);
    const sortedEnrollments = [...enrollmentData].sort((a,b) => a.subject_period - b.subject_period);

    const completionRate = statsData?.completion_rate || 0;
    const currentCategory = [...tenureCategories].reverse().find(tier => completionRate >= tier.rate)

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
                        <div className="grid sm:grid-cols-4 rounded-lg border border-gray-200 bg-gray-50 p-4 border-gray-700 bg-gray-800 md:p-6">
                            <div className="flex justify-between">
                                <div className="flex space-x-4">
                                    <Image
                                    className="rounded-lg"
                                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                                    width={100}
                                    height={90}
                                    alt="Picture of the author"
                                    />
                                    <div>
                                    <span className={`mb-2 inline-block rounded bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-beige-800 text-beige-300`}>{currentCategory.level}</span>
                                    <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 text-white sm:text-2xl">{profile.first_name ? `${profile.first_name} ${profile.last_name} (${profile?.username})` : `${profile?.username}`}</h2>
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
                                <div className="flex flex-colum gap-5 pt-7">
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
                            <div className="ps-2">
                                {/* <div className="flex flex-colum gap-5 pt-3"> */}
                                <div className="flex flex-colum gap-5 pt-7">
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
                                <div className="flex-colum gap-5 pt-7">
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
                    {/* <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                        <div className="flex items-center flex-1 space-x-4">
                            <h5>
                                <span className="text-gray-500">Total Materias:</span>
                                <span className="text-white">{enrollmentData.length}</span>
                            </h5>
                        </div>
                        <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                            <button type="button" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800">
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                Add new product
                            </button>
                            <button type="button" className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700">
                                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" viewbox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                                Update stocks 1/250
                            </button>
                            <button type="button" className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700">
                                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                </svg>
                                Export
                            </button>
                        </div>
                    </div> */}
                    <div className="h-screen overflow-y-auto mb-5 border border-gray-700">
                        <table className="w-full text-sm text-left text-gray-500 text-gray-400 table-fixed">
                            <thead className="sticky top-0 z-10 text-xs text-gray-700 uppercase bg-gray-50 bg-gray-700 text-gray-400 ">
                                    <tr>
                                        <th scope="col" className="w-12 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-primary-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"/>
                                                <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        <th className="w-64 px-4 py-3">Subject</th>
                                        <th className="w-48 px-4 py-3">Teacher</th>
                                        <th className="w-40 px-4 py-3">Status</th>
                                        <th className="w-24 px-4 py-3">Credits</th>
                                        <th className="w-24 px-4 py-3">Score</th>
                                        <th className="w-48 px-4 py-3">Review</th>
                                        <th className="w-40 px-4 py-3">Completion Date</th>
                                    </tr>
                            </thead>
                            <tbody>
                                {!profile.onboarding_completed 
                                    ?
                                    <td colSpan={8} className="px-4 py-[10rem] text-center text-lg font-semibold text-gray-700 text-white">
                                        Selecciona tu <a href="/register/career" className="text-red-700">carrera</a> para visualizar tus materias.
                                    </td>
                                    :
                                    ""
                                }
                                {sortedEnrollments.sort((a,b) => a.subject - b.subject).map((enrollment, index) => {
                                    const prev = sortedEnrollments[index - 1];
                                    const showPeriodHeader = index === 0 || enrollment.subject_period != prev.subject_period;

                                    const reviewAverage = enrollment.review?.average;
                                    const filledStars = Math.round(reviewAverage / 2);
                                    const emptyStars = 5 - Math.round(reviewAverage / 2);
                                    return(
                                        <React.Fragment key={enrollment.id}>
                                            {showPeriodHeader && (
                                                <tr className="bg-[#1F2937]">
                                                    <td className="w-4 px-4 py-3">
                                                        <div className="flex items-center">
                                                            <input id="checkbox-table-search-1" type="checkbox" onClick={(e) => e.stopPropagation()} className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-primary-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"/>
                                                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        colSpan={7}
                                                        className="px-4 py-2 text-sm font-semibold text-gray-700 text-white"
                                                    >
                                                        PERIOD {enrollment.subject_period}
                                                    </td>
                                                </tr>
                                            )}


                                            <tr className="border-b border-gray-600 bg-[#111827] hover:bg-gray-100 hover:bg-gray-700">
                                                <td className="w-4 px-4 py-3">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-table-search-1" type="checkbox" onClick={(e) => e.stopPropagation()} className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-primary-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"/>
                                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap text-white">
                                                    <a href={`/me/enrollments/${enrollment.id}`}>{enrollment.subject_name}</a>
                                                </th>
                                                <td className="px-4 py-2">
                                                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded bg-primary-900 text-primary-300">{enrollment.teacher_name ?? "Unassigned"}</span>
                                                </td>
                                                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap text-white">
                                                    <div className="flex items-center">
                                                        <div
                                                            className={`inline-block w-4 h-4 mr-2 rounded-full ${
                                                            enrollment.status === "NT"
                                                                ? "bg-gray-500"
                                                                : enrollment.status === "IP"
                                                                ? "bg-yellow-500"
                                                                : "bg-green-500"
                                                            }`}
                                                        />
                                                        {statusOptions.find(e => e.value == enrollment.status)?.label}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap text-white">{enrollment.subject_credits}</td>
                                                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap text-white">{enrollment.completion_date != null ? enrollment.grade : "--"}</td>
                                                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap text-white">
                                                    <div className="flex items-center">
                                                        {enrollment.review?.average != null ?
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
                                                            :

                                                            <div className="flex items-center">
                                                                <span className="ml-1 text-gray-500 text-gray-400 text-center">{enrollment.review?.average?.toFixed(2) ?? "Not reviewed"}</span>
                                                            </div>
                                                         }
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap text-white flex justify-center">
                                                    <div className="flex items-center">
                                                        {enrollment.completion_date ?? "--"}
                                                    </div>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                    
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

