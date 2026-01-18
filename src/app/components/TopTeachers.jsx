"use client"
import { useState, useEffect } from "react";


export default function TopTeachers( { data }) {
    const [loading, setLoading] = useState(true);
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        
        try{
            const topTeachers = [...data].sort((prev, curr) => prev.rating > curr.rating ? -1 : 1).slice(0, 5);
            setTeachers(topTeachers);


            
        }
        catch (error) {
            
            console.error('Error fetching teachers:', error)
            
        }
        finally {
            
            setLoading(false);
            
        }
    }, [])

    return (
        <section>
            <div className='container-xl lg:container m-auto'>
                <div className='grid grid-cols-1 gap-4 p-4 rounded-lg'>
                    <h2 className='text-3xl font-bold text-center text-indigo-500'>
                        Top Profesores
                    </h2>
                    { loading ? (
                        <div className="sm:flex sm:flex-column gap-6">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className="w-full max-w-sm bg-gray-900 text-white p-6 border border-default rounded-base shadow-xs rounded-xl">
                                    <div>
                                        <div className="flex flex-between space-x-3 mb-6">
                                            <div className="h-3 bg-gray-500 rounded-full mb-2.5"></div>
                                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <div className="h-3 bg-gray-500 rounded-full mb-2.5"></div>
                                            </div>
                                            <span className="bg-[#162556] border border-brand-subtle text-[#51a2ff] text-xs font-medium px-1.5 py-0.5 rounded-sm"></span>
                                        </div>
                                        <div className="h-3 bg-gray-500 rounded-full mb-2.5"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        ) : (
                        <div className="sm:flex-column gap-6 mx-auto">
                            {teachers.map((teacher, i) => {

                                const rating = teacher.rating;
                                const filledStars = Math.round(rating / 2);
                                const emptyStars = 5 - Math.round(rating / 2);

                                return(
                                    <div key={teacher.id} className={`w-full max-w-sm bg-gray-900 text-white p-6 border border-default rounded-base shadow-xs rounded-xl ${i+1 == teachers.length ? "" : "mb-4"}`}>
                                        <div>
                                            <div className="flex justify-between space-x-3 mb-6">
                                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                                    {
                                                        Array.from({ length: filledStars }).map((_, i) => (
                                                            <svg key={i} className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                            </svg>                            
                                                        ))
                                                    }
                                                    {
                                                        Array.from({ length: emptyStars } ).map((_, i) => (
                                                            <svg key={i} className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
                                                            </svg>                              
                                                        ))
                                                    }
                                                </div>
                                                <span className="bg-[#162556] border border-brand-subtle text-white text-xs font-medium px-1.5 py-0.5 rounded-sm">{teacher?.rating.toFixed(2)}</span>
                                            </div>
                                            <a href={`/teachers/${teacher.id}`}>
                                                <h5 className="text-xl text-heading font-semibold tracking-tight">{teacher.name}</h5>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })} 
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}