"use client"
import Image from "next/image"
import ImageProfile1 from "../../../public/profile-picture-1.jpg"
import ImageProfile2 from "../../../public/profile-picture-2.jpg"
import ImageProfile3 from "../../../public/profile-picture-3.jpg"
import ImageProfile4 from "../../../public/profile-picture-4.jpg"
import ImageProfile5 from "../../../public/profile-picture-5.jpg"
import Image4 from "../../../public/image-4.jpg"
import CardSkeleton from "./CardSkeleton"
import Card from "./Card"
import Dropdown from "./Dropdown"
import FilterActive from "./icons/FilterActive"
import FilterInactive from "./icons/FilterInactive"
import CollaborationCard from "./info-cards/Collaboration"

import getTeachers from "../../lib/api/teachers"
import React, { useState, useEffect } from "react"

export default function TeachersPage() {
    const [teachers, setTeachers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [filteredTeachers, setFilteredTeachers] = useState([])
    const [isFiltered, setIsFiltered] = useState(false)
    const [activeFilter, setActiveFilter] = useState('')
    const [selectedSubject, setSelectedSubject] = useState('')


    useEffect(() => {

        const fetchTeachers = async () => {
            try{
                getTeachers()
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json()
                setTeachers(data)
                setFilteredTeachers(data)
            }
            catch (error) {
                console.error('Error fetching teachers:', error)
            }
            finally{
                setIsLoading(false)
            }
        } 
        fetchTeachers()
    }, [])

    function filterTeacher({department='', subject=''}) {
        let filteredTeachers = []
        if (department) {
            filteredTeachers = teachers.filter(teacher => teacher.department_name === department)
        }
        else if (subject) {
            filteredTeachers = teachers.filter(teacher => teacher.subjects.includes(subject));
        }
        
        setFilteredTeachers(filteredTeachers)
        setIsFiltered(true)
    }

    function clearFilter() {
        setFilteredTeachers(teachers)
        setIsFiltered(false)
    }

  return(
      <section className="grid grid-cols-12 gap-6">

        {/* Left Side Panel */}
        <div className="bg-gray col-span-4 flex flex-col">

            <div className="min-h-screen">
                <div className="relative inline-block w-full max-w-sm text-left">
                    
                    <details className="group w-full rounded-lg ring-1 ring-black ring-opacity-5" open>
                    
                    <summary className="flex w-full cursor-pointer list-none items-center justify-between p-4 font-semibold text-gray-900 text-xl text-heading">
                        Advanced Filters
                    </summary>

                    <div className="border-t border-gray-200 p-4">
                        
                        {/* <div className="mb-4">
                        <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">Keywords</label>
                        <input
                            type="text"
                            name="keywords"
                            id="keywords"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="e.g. 'wireless headphones'"
                        />
                        </div> */}
                        <div className="mb-4">
                            <label htmlFor="keywords" className="block mb-2.5 text-sm font-medium text-heading">Palabra clave</label>
                            <input type="text" id="keywords" name="keywords" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body " placeholder="e.g. ramon mateo, matematica, tecnologia" onChange={() => keywordFilter()} />
                        </div>

                        <div className="space-y-3">
                        
                        <details className="group rounded-lg border border-gray-200" open>
                            <summary className="flex w-full cursor-pointer list-none items-center justify-between bg-gray-50 p-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
                            Rating
                            <svg className="h-5 w-5 text-gray-400 transition-transform duration-200 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd"/>
                            </svg>
                            </summary>
                            <div className="space-y-2 p-3 text-sm flex items-center">
                                <div className="flex items-center space-x-1">
                                    <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                                    <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                                    <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                                    <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                                    <svg className="w-5 h-5 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                                </div>
                            </div>
                        </details>

                        <details className="group rounded-lg border border-gray-200" open>
                            <summary className="flex w-full cursor-pointer list-none items-center justify-between bg-gray-50 p-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
                            Materia
                            <svg className="h-5 w-5 text-gray-400 transition-transform duration-200 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd"/>
                            </svg>
                            </summary>
                            <div className="space-y-2 p-3 text-sm text-gray-600">
                            
                                {/* Get count by subject */}
                                {(() => {
                                    const subjectCounts = teachers.reduce((acc, teacher) => {
                                        let subjects = teacher.subjects;

                                        // if (!subjects) {
                                        //     subjects = [''];
                                        // }

                                        if (!Array.isArray(subjects)) {
                                            subjects = String(subjects).split(',').map(s => s.trim());
                                        }

                                        subjects.forEach(subj => {
                                            acc[subj] = (acc[subj] || 0) + 1;
                                        });

                                        return acc;
                                    }, {});

                                    return Object.entries(subjectCounts).map(([subjectName, count]) => (
                                        <div 
                                            key={subjectName}
                                            className="flex justify-between"
                                            onClick={() => {
                                                setSelectedSubject(subjectName);   // updates UI
                                                filterTeacher({ subject: subjectName }); // your function
                                            }}
                                        >
                                            <div className="flex justify-content-center items-center">
                                                <input
                                                    id={subjectName}
                                                    type="radio"
                                                    className="accent-pink-500 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 hover:cursor-pointer"
                                                    checked={selectedSubject === subjectName}  // controlled component
                                                    onChange={() => null} // required in React but not used because click is on wrapper
                                                />
                                                <label
                                                    htmlFor={subjectName}
                                                    className="ml-3 text-gray-700 flex items-center hover:cursor-pointer"
                                                >
                                                    {subjectName}
                                                </label>
                                            </div>

                                            <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800 hover:cursor-pointer">
                                                {count}
                                            </span>
                                        </div>
                                    ));
                                })()}
                            </div>
                        </details>


                        <details className="group rounded-lg border border-gray-200" open={false}>
                            <summary className="flex w-full cursor-pointer list-none items-center justify-between bg-gray-50 p-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
                            Departamento
                            <svg className="h-5 w-5 text-gray-400 transition-transform duration-200 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd"/>
                            </svg>
                            </summary>
                            <div className="space-y-2 p-3 text-sm text-gray-600">
                            
                                {/* Get count by department */}
                                {(() => {
                                    const departmentCounts = teachers.reduce((acc, teacher) => {

                                    const dept = teacher.department_name || 'Sin Departamento';
                                
                                    acc[dept] = (acc[dept] || 0) + 1;
                                    return acc;
                            }, {});

                                    return Object.entries(departmentCounts).map(([departmentName, count]) => (
                                        <div 
                                            key={departmentName}
                                            className="flex justify-between"
                                            onClick={() => {
                                                // setSelectedSubject(departmentName); 
                                                filterTeacher({ department: departmentName }); 
                                            }}
                                        >
                                            <div className="flex justify-content-center items-center">
                                                <input
                                                    id={departmentName}
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 hover:cursor-pointer"
                                                    // checked={selectedSubject === subjectName}  // controlled component
                                                    onChange={() => null} 
                                                />
                                                <label
                                                    htmlFor={departmentName}
                                                    className="ml-3 text-gray-700 flex items-center hover:cursor-pointer"
                                                >
                                                    {departmentName}
                                                </label>
                                            </div>

                                            <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800 hover:cursor-pointer">
                                                {count}
                                            </span>
                                        </div>
                                    ));
                                })()}
                            </div>
                        </details>

                        </div>
                        
                        <div className="mt-6 flex justify-between">
                        <button type="button" className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:cursor-pointer" onClick={() => clearFilter()}>
                            Clear
                        </button>
                        <button type="submit" className="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Apply
                        </button>
                        </div>

                    </div>
                    </details>
                </div>
            </div>

        </div>

        {/* Main Panel */}
        <div className="col-span-8 flex flex-col gap-6">
            <div className="flex justify-between items-center mb-4">
                <h1>Resultados:</h1>
                <div className="flex gap-4  justify-content-center">
                    <div className="flex items-center">
                        <h1>Ordenar</h1>
                    </div>
                    <Dropdown />
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 overflow-y-auto max-h-[77vh]">
                {isLoading ? (
                    <>
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </>
                    ) : (
                    filteredTeachers.map(teacher => (
                        <Card key={teacher.uuid} teacher={teacher} />
                    ))) }
            </div>
          
        </div> 
      </section>
  )
}