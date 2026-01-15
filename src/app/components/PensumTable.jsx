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
    const currentCategory = [...tenureCategories].reverse().find(tier => statsData.completion_rate >= tier.rate)
    // const [currentPage, setCurrentPage] = useState(1);

    // const totalPages = Math.ceil(enrollmentData/PAGE_SIZE);

    // const startIndex = (currentPage - 1) * PAGE_SIZE;
    // const currentEnrollmentData =  enrollmentData.slice(startIndex, startIndex + PAGE_SIZE)

    useEffect(() => {

        try{
            setProfile(profileData);

        }
        catch (error) {

            console.error('Error fetching profile:', error)

        }
    }, [])

    return (

        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-8">
            <div className="mx-auto max-w-screen-2xl px-4 2xl:px-12">
                {/* <div className="grid grid-cols-2 gap-6 border-b border-t border-gray-200 py-4 dark:border-gray-700 md:py-8 lg:grid-cols-4 xl:gap-16">
                <div>
                    <svg className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                    </svg>
                    <h3 className="mb-2 text-gray-500 dark:text-gray-400">Orders made</h3>
                    <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white"
                    >24
                    <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                        <svg className="-ms-1 me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4"></path>
                        </svg>
                        10.3%
                    </span>
                    </span>
                    <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                    <svg className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    vs 20 last 3 months
                    </p>
                </div>
                <div>
                    <svg className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                    </svg>
                    <h3 className="mb-2 text-gray-500 dark:text-gray-400">Reviews added</h3>
                    <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white"
                    >16
                    <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                        <svg className="-ms-1 me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4"></path>
                        </svg>
                        8.6%
                    </span>
                    </span>
                    <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                    <svg className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    vs 14 last 3 months
                    </p>
                </div>
                <div>
                    <svg className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                    </svg>
                    <h3 className="mb-2 text-gray-500 dark:text-gray-400">Favorite products added</h3>
                    <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white"
                    >8
                    <span className="ms-2 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                        <svg className="-ms-1 me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4"></path>
                        </svg>
                        12%
                    </span>
                    </span>
                    <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                    <svg className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    vs 10 last 3 months
                    </p>
                </div>
                <div>
                    <svg className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4" />
                    </svg>
                    <h3 className="mb-2 text-gray-500 dark:text-gray-400">Product returns</h3>
                    <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white"
                    >2
                    <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                        <svg className="-ms-1 me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4"></path>
                        </svg>
                        50%
                    </span>
                    </span>
                    <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                    <svg className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    vs 1 last 3 months
                    </p>
                </div>
                </div> */}
                <div className="">
                    <div className="mb-4 grid gap-4 sm:gap-8 lg:gap-16">
                        <div className="grid sm:grid-cols-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:p-6">
                            <div className="flex justify-between">
                                <div className="flex space-x-4">
                                    <Image
                                    className="rounded-lg"
                                    src="https://static.wikia.nocookie.net/kaijuu-8-gou/images/9/90/DP_-_Kafka_Hibino.PNG/revision/latest/smart/width/250/height/250?cb=20220614131317"
                                    width={100}
                                    height={90}
                                    alt="Picture of the author"
                                    />
                                    <div>
                                    <span className={`mb-2 inline-block rounded bg-${currentCategory.color}-500 px-2.5 py-0.5 text-xs font-medium text-beige-800 dark:text-beige-300`}>{currentCategory.level}</span>
                                    <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">{profile.first_name} {profile.last_name}</h2>
                                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">{profile.career_name}</div>
                                    {/* <div className="text-gray-500 dark:text-gray-400">{profile.email}</div> */}
                                    </div>
                                </div>
                                {/* <button type="button" data-modal-target="accountInformationModal2" data-modal-toggle="accountInformationModal2" className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto">
                                    <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"></path>
                                    </svg>
                                    Edit
                                </button> */}
                            </div>
                            <div className="ps-12">
                                <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">Career</h2>
                                <div className="flex flex-colum gap-5 pt-7">
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">Started Date</div>
                                        <div className="text-gray-500 dark:text-gray-400">August 2024</div>
                                    </div>
                                        
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">End Date (Est.)</div>
                                        <div className="text-gray-500 dark:text-gray-400">August 2028</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-12">
                                <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">Enrollments</h2>
                                {/* <div className="flex flex-colum gap-5 pt-3"> */}
                                <div className="flex flex-colum gap-5 pt-7">
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">Subjects</div>
                                        <div className="text-xl text-gray-500 dark:text-gray-400">{statsData.total_enrollments}</div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">Completed</div>
                                        <div className="text-xl text-gray-500 dark:text-gray-400">{statsData.completed_enrollments}</div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">Left</div>
                                        <div className="text-xl text-gray-500 dark:text-gray-400">{statsData.total_enrollments - statsData.completed_enrollments}</div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">GPA</div>
                                        <div className="text-xl text-gray-500 dark:text-gray-400">{statsData.gpa.toFixed(2) ?? ""}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-12">
                                <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">Reviews</h2>
                                <div className="flex flex-colum gap-5 pt-7">
                                    <div className="font-semibold text-gray-900 dark:text-white">Reviews Completed</div>
                                    <div className="text-xl text-gray-500 dark:text-gray-400">{statsData.total_reviews}</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>  
            </div>
            {/* <!-- Account Information Modal --> */}
            <div id="accountInformationModal2" tabindex="-1" aria-hidden="true" className="max-h-auto fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0">
                <div className="max-h-auto relative max-h-full w-full max-w-lg p-4">
                {/* <!-- Modal content --> */}
                <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Account Information</h3>
                    <button type="button" className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="accountInformationModal2">
                        <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <form className="p-4 md:p-5">
                        <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="col-span-2">
                            <label htmlFor="pick-up-point-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Pick-up point* </label>
                            <input type="text" id="pick-up-point-input" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter the pick-up point name" required />
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="full_name_info_modal" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your Full Name* </label>
                            <input type="text" id="full_name_info_modal" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter your first name" required />
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="email_info_modal" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your Email* </label>
                            <input type="text" id="email_info_modal" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter your email here" required />
                            </div>

                            <div className="col-span-2">
                            <label htmlFor="phone-input_billing_modal" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Phone Number* </label>
                            <div className="flex items-center">
                                <button id="dropdown_phone_input__button_billing_modal" data-dropdown-toggle="dropdown_phone_input_billing_modal" className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
                                <svg fill="none" aria-hidden="true" className="me-2 h-4 w-4" viewBox="0 0 20 15">
                                    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                    {/* <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                                    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                    </mask> */}
                                    <g mask="url(#a)">
                                    <path fill="#D02F44" fillRule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clipRule="evenodd" />
                                    <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                                    <g filter="url(#filter0_d_343_121520)">
                                        <path
                                        fill="url(#paint0_linear_343_121520)"
                                        fillRule="evenodd"
                                        d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                        clipRule="evenodd"
                                        />
                                    </g>
                                    </g>
                                    <defs>
                                    <linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#fff" />
                                        <stop offset="1" stopColor="#F0F0F0" />
                                    </linearGradient>
                                    <filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                        <feOffset dy="1" />
                                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520" />
                                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape" />
                                    </filter>
                                    </defs>
                                </svg>
                                +1
                                <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                                </svg>
                                </button>
                                <div id="dropdown_phone_input_billing_modal" className="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                                <ul className="p-2 text-sm font-medium text-gray-700 dark:text-gray-200" aria-labelledby="dropdown_phone_input__button_billing_modal">
                                    <li>
                                    <button type="button" className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <span className="inline-flex items-center">
                                        <svg fill="none" aria-hidden="true" className="me-2 h-4 w-4" viewBox="0 0 20 15">
                                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                            {/* <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                            </mask> */}
                                            <g mask="url(#a)">
                                            <path fill="#D02F44" fillRule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clipRule="evenodd" />
                                            <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                                            <g filter="url(#filter0_d_343_121520)">
                                                <path
                                                fill="url(#paint0_linear_343_121520)"
                                                fillRule="evenodd"
                                                d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                                clipRule="evenodd"
                                                />
                                            </g>
                                            </g>
                                            <defs>
                                            <linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#fff" />
                                                <stop offset="1" stopColor="#F0F0F0" />
                                            </linearGradient>
                                            <filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                <feOffset dy="1" />
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520" />
                                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape" />
                                            </filter>
                                            </defs>
                                        </svg>
                                        United States (+1)
                                        </span>
                                    </button>
                                    </li>
                                    <li>
                                    <button type="button" className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <span className="inline-flex items-center">
                                        <svg className="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                            {/* <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                            </mask> */}
                                            <g mask="url(#a)">
                                            <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                                            <path fill="#fff" fillRule="evenodd" d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z" clipRule="evenodd" />
                                            <path stroke="#DB1F35" strokeLinecap="round" strokeWidth=".667" d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093" />
                                            <path fill="#E6273E" fillRule="evenodd" d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z" clipRule="evenodd" />
                                            </g>
                                        </svg>
                                        United Kingdom (+44)
                                        </span>
                                    </button>
                                    </li>
                                    <li>
                                    <button type="button" className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <span className="inline-flex items-center">
                                        <svg className="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                            {/* <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                            </mask> */}
                                            <g mask="url(#a)">
                                            <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                                            <path fill="#fff" stroke="#fff" strokeWidth=".667" d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z" />
                                            <path fill="url(#paint0_linear_374_135177)" fillRule="evenodd" d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z" clipRule="evenodd" />
                                            <path fill="url(#paint1_linear_374_135177)" fillRule="evenodd" d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z" clipRule="evenodd" />
                                            <path
                                                fill="#fff"
                                                fillRule="evenodd"
                                                d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
                                                clipRule="evenodd"
                                            />
                                            </g>
                                            <defs>
                                            <linearGradient id="paint0_linear_374_135177" x1="0" x2="0" y1=".5" y2="7.5" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#fff" />
                                                <stop offset="1" stopColor="#F0F0F0" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_374_135177" x1="0" x2="0" y1=".5" y2="7.033" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#FF2E3B" />
                                                <stop offset="1" stopColor="#FC0D1B" />
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        Australia (+61)
                                        </span>
                                    </button>
                                    </li>
                                    <li>
                                    <button type="button" className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <span className="inline-flex items-center">
                                        <svg className="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                            {/* <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                            </mask> */}
                                            <g mask="url(#a)">
                                            <path fill="#262626" fillRule="evenodd" d="M0 5.167h19.6V.5H0v4.667z" clipRule="evenodd" />
                                            <g filter="url(#filter0_d_374_135180)">
                                                <path fill="#F01515" fillRule="evenodd" d="M0 9.833h19.6V5.167H0v4.666z" clipRule="evenodd" />
                                            </g>
                                            <g filter="url(#filter1_d_374_135180)">
                                                <path fill="#FFD521" fillRule="evenodd" d="M0 14.5h19.6V9.833H0V14.5z" clipRule="evenodd" />
                                            </g>
                                            </g>
                                            <defs>
                                            <filter id="filter0_d_374_135180" width="19.6" height="4.667" x="0" y="5.167" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                <feOffset />
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                                            </filter>
                                            <filter id="filter1_d_374_135180" width="19.6" height="4.667" x="0" y="9.833" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                <feOffset />
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                                            </filter>
                                            </defs>
                                        </svg>
                                        Germany (+49)
                                        </span>
                                    </button>
                                    </li>
                                    <li>
                                    <button type="button" className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <span className="inline-flex items-center">
                                        <svg className="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                                            <rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#F5F5F5" strokeWidth=".5" rx="1.75" />
                                            {/* <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                                            <rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#fff" strokeWidth=".5" rx="1.75" />
                                            </mask> */}
                                            <g mask="url(#a)">
                                            <path fill="#F44653" d="M13.067.5H19.6v14h-6.533z" />
                                            <path fill="#1035BB" fillRule="evenodd" d="M0 14.5h6.533V.5H0v14z" clipRule="evenodd" />
                                            </g>
                                        </svg>
                                        France (+33)
                                        </span>
                                    </button>
                                    </li>
                                    <li>
                                    <button type="button" className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <span className="inline-flex items-center">
                                        <svg className="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                            {/* <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                            </mask> */}
                                            <g mask="url(#a)">
                                            <path fill="#262626" fillRule="evenodd" d="M0 5.167h19.6V.5H0v4.667z" clipRule="evenodd" />
                                            <g filter="url(#filter0_d_374_135180)">
                                                <path fill="#F01515" fillRule="evenodd" d="M0 9.833h19.6V5.167H0v4.666z" clipRule="evenodd" />
                                            </g>
                                            <g filter="url(#filter1_d_374_135180)">
                                                <path fill="#FFD521" fillRule="evenodd" d="M0 14.5h19.6V9.833H0V14.5z" clipRule="evenodd" />
                                            </g>
                                            </g>
                                            <defs>
                                            <filter id="filter0_d_374_135180" width="19.6" height="4.667" x="0" y="5.167" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                <feOffset />
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                                            </filter>
                                            <filter id="filter1_d_374_135180" width="19.6" height="4.667" x="0" y="9.833" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                <feOffset />
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                                            </filter>
                                            </defs>
                                        </svg>
                                        Germany (+49)
                                        </span>
                                    </button>
                                    </li>
                                </ul>
                                </div>
                                <div className="relative w-full">
                                <input type="text" id="phone-input" className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                                </div>
                            </div>
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                            <div className="mb-2 flex items-center gap-2">
                                <label htmlFor="select_country_input_billing_modal" className="block text-sm font-medium text-gray-900 dark:text-white"> Country* </label>
                            </div>
                            <select id="select_country_input_billing_modal" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                <option selected>United States</option>
                                <option value="AS">Australia</option>
                                <option value="FR">France</option>
                                <option value="ES">Spain</option>
                                <option value="UK">United Kingdom</option>
                            </select>
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                            <div className="mb-2 flex items-center gap-2">
                                <label htmlFor="select_city_input_billing_modal" className="block text-sm font-medium text-gray-900 dark:text-white"> City* </label>
                            </div>
                            <select id="select_city_input_billing_modal" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                <option selected>San Francisco</option>
                                <option value="NY">New York</option>
                                <option value="LA">Los Angeles</option>
                                <option value="CH">Chicago</option>
                                <option value="HU">Houston</option>
                            </select>
                            </div>

                            <div className="col-span-2">
                            <label htmlFor="address_billing_modal" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Delivery Address* </label>
                            <textarea id="address_billing_modal" rows="4" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter here your address"></textarea>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="company_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Company name </label>
                            <input type="text" id="company_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Flowbite LLC" />
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="vat_number" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> VAT number </label>
                            <input type="text" id="vat_number" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="DE42313253" />
                            </div>
                        </div>
                        <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
                            <button type="submit" className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save information</button>
                            <button type="button" data-modal-toggle="accountInformationModal2" className="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>

            <div id="deleteOrderModal" tabindex="-1" aria-hidden="true" className="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full">
                <div className="relative h-full w-full max-w-md p-4 md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
                    <button type="button" className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteOrderModal">
                        <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
                        <svg className="h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                        </svg>
                        <span className="sr-only">Danger icon</span>
                    </div>
                    <p className="mb-3.5 text-gray-900 dark:text-white"><a href="#" className="font-medium text-primary-700 hover:underline dark:text-primary-500">@heleneeng</a>, are you sure you want to delete this order from your account?</p>
                    <p className="mb-4 text-gray-500 dark:text-gray-300">This action cannot be undone.</p>
                    <div className="flex items-center justify-center space-x-4">
                        <button data-modal-toggle="deleteOrderModal" type="button" className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600">No, cancel</button>
                        <button type="submit" className="rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Yes, delete</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
                <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                    {/* <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                        <div className="flex items-center flex-1 space-x-4">
                            <h5>
                                <span className="text-gray-500">Total Materias:</span>
                                <span className="dark:text-white">{enrollmentData.length}</span>
                            </h5>
                        </div>
                        <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                            <button type="button" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                Add new product
                            </button>
                            <button type="button" className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" viewbox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                                Update stocks 1/250
                            </button>
                            <button type="button" className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                </svg>
                                Export
                            </button>
                        </div>
                    </div> */}
                    <div className="h-screen overflow-y-auto mb-5">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
                            <thead className="sticky top-0 z-10 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                                    <tr>
                                        <th scope="col" className="w-12 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
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
                                {sortedEnrollments.map((enrollment, index) => {
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
                                                            <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        colSpan={7}
                                                        className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-white"
                                                    >
                                                        PERIOD {enrollment.subject_period}
                                                    </td>
                                                </tr>
                                            )}


                                            <tr className="border-b dark:border-gray-600 dark:bg-[#111827] hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <td className="w-4 px-4 py-3">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <a href={`/me/enrollments/${enrollment.id}`}>{enrollment.subject_name}</a>
                                                </th>
                                                <td className="px-4 py-2">
                                                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">{enrollment.teacher_name ?? "Unassigned"}</span>
                                                </td>
                                                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{enrollment.subject_credits}</td>
                                                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{enrollment.completion_date != null ? enrollment.grade : "--"}</td>
                                                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className="flex items-center">
                                                        {
                                                            Array.from({ length: filledStars }).map(() => (
                                                            <svg class="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                            </svg>                            
                                                            ))
                                                        }
                                                        {
                                                            Array.from({ length: emptyStars} ).map(() => (
                                                            <svg class="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
                                                            </svg>                              
                                                            ))
                                                        }
                                                        <div className="flex items-center">
                                                            <span className="ml-1 text-gray-500 dark:text-gray-400 text-center">{enrollment.review?.average.toFixed(2) ?? "Not reviewed"}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-center">
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
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Showing
                            <span className="font-semibold text-gray-900 dark:text-white"> {startIndex+1}-{startIndex+PAGE_SIZE} </span>
                            of
                            <span className="font-semibold text-gray-900 dark:text-white"> {enrollmentData.length}</span>
                        </span>
                        <ul className="inline-flex items-stretch -space-x-px">
                            <li>
                                <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Previous</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                            </li>
                            <li>
                                <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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

