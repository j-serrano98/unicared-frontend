"use client";
import React, { useState, useEffect } from "react";

export default function CareerList() {
    
    const [careers, setCareers] = useState([]);

    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v1/careers/')
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json()
                setCareers(data);

            }
            catch (error) {
                console.error("Error fetching careers:", error);
            }
            finally {
            }
        }
        fetchCareers();
    }, []);

    return (
        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-5 p-6">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Selecciona tu carrera</h2>

                <a href="#" title="" className="flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500">
                    See more categories
                    <svg className="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                </a>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {careers?.map((career, i) => (
                        <div key={i} href="#" className="hover:cursor-pointer h-32 flex flex-col justify-evenly text-center items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <svg className="me-2 h-10 w-10 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">{career.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}