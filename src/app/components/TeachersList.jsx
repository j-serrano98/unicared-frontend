"use client"
import CardSkeleton from "./CardSkeleton"
import Card from "./Card"
import Dropdown from "./Dropdown"
import React, { useState, useEffect, useMemo } from "react"

const sortingOptions = [
    {value: "mp", option: "Most popular"},
    {value: "lp", option: "Less popular"},
    {value: "na", option: "Name (Ascending)"},
    {value: "nd", option: "Name (Descending)"},
]

export default function TeachersList({ teachers }) {
    

     /* ============================
     FILTER AND SORT STATE (SOURCE OF TRUTH)
    ============================ */
    const [selectedRating, setSelectedRating] = useState(null)
    const [selectedSubject, setSelectedSubject] = useState('')
    const [selectedDepartment, setSelectedDepartment] = useState('')
    const [keywordFilter, setKeywordFilter] = useState('')
    const [sortingOrder, setSortingOrder] = useState('mp')
    const [showFilter, setShowFilter] = useState(false)

    
    /* ============================
     UI STATE
    ============================ */
    const [openDetail, setOpenDetail] = useState(1)

    const toggleDetails = (id) => {
        setOpenDetail(prev => (prev === id ? null : id));
    };
    

    /* ============================
     DERIVED FLAGS
    ============================ */
    const isLoading = !teachers || teachers.length === 0;

    const isFiltered = 
        !!selectedDepartment ||
        !!selectedSubject ||
        !!keywordFilter.trim() ||
        selectedRating !== null;

    
    /* ============================
     FILTER LOGIC (PURE)
    ============================ */
    const allSubjects = useMemo(() => {
        const map = {};

        teachers.forEach(teacher => {
            let subjects = teacher.subjects;

            if (!Array.isArray(subjects)) {
            subjects = String(subjects).split(",").map(s => s.trim());
            }

            subjects.forEach(subj => {
            map[subj] = (map[subj] || 0) + 1;
            });
        });

        return Object.entries(map);
    }, [teachers]);

    const allDepartments = useMemo(() => {
        const map = {};

        teachers.forEach(teacher => {
            let departments = teacher.department_name;

            if (!Array.isArray(departments)) {
            departments = String(departments).split(",").map(s => s.trim());
            }

            departments.forEach(dept => {
            map[dept] = (map[dept] || 0) + 1;
            });
        });

        return Object.entries(map);
    }, [teachers]);

    const filteredTeachers = useMemo(() => {
        let result = [...teachers];

        if (selectedRating) {
            result =  result.filter(
                t => Math.round(t.rating / 2) == selectedRating
            );
        }

        if (selectedDepartment) {
            result = result.filter(
                t => t.department_name === selectedDepartment
            );
        }

        if (selectedSubject) {
            result = result.filter(
                t => t.subjects.includes(selectedSubject)
            );
        }

        if (keywordFilter.trim()) {
            const keyword = keywordFilter.toLowerCase();

            result = result.filter(t => 
                t.name.toLowerCase().includes(keyword) ||
                t.description?.toLowerCase().includes(keyword)
            );
        }

        switch (sortingOrder) {
            case 'mp':
                result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
                break;
            case 'lp':
                result.sort((a, b) => (a.rating ?? 0) - (b.rating ?? 0));
                break;
            case 'na':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'nd':
                result.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }

        return result;
    }, [
        teachers,
        selectedDepartment,
        selectedSubject,
        selectedRating,
        keywordFilter,
        sortingOrder
    ])


    /* ============================
     HANDLERS
    ============================ */

    function handleKeywordSearch(e) {
        setKeywordFilter(e.target.value)
    };

    function handleSortingChange(e) {
        setSortingOrder(e.target.value)
    }

    const clearFilters = () => {
        setSelectedDepartment("");
        setSelectedSubject("");
        setSelectedRating(null);
        setKeywordFilter("");
    };


  return(
      <section className="grid md:grid-cols-12 md:gap-6 w-full">
        <div className="md:hidden lg:hidden mb-4">
            <input type="text" id="keywords" name="keywords" className="rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body " placeholder="e.g. ramon mateo, matematica, tecnologia" value={keywordFilter} onChange={handleKeywordSearch} />
        </div>
        <div className="md:hidden lg:hidden flex mb-4 justify-between gap-5">
            <button onClick={() => setShowFilter(true)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="w-full rounded-lg inline-flex items-center justify-center text-white bg-gray-900 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
                Filters
                <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/></svg>
            </button>
            <select value={sortingOrder} onChange={handleSortingChange} id="sorting-options" className="w-full rounded-lg px-3 py-2.5 bg-gray-900-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
                {sortingOptions.map((s, i) => (
                    <option key={i}  value={s.value}>{s.option}</option>
                ))}
            </select>
        </div>

        {/* Left Side Panel */}
        {/* Left Side Panel Overlay (Mobile) / Sidebar (Desktop) */}
<div className={`
    ${showFilter ? "translate-x-0 w-[90vw]" : "-translate-x-full"} 
    fixed inset-0 z-50 md:w-full h-full transition-transform duration-300 ease-in-out
    md:relative bg-white md:translate-x-0 md:inset-auto md:z-0 md:block md:h-auto md:col-span-4 lg:col-span-4 
    bg-gray md:rounded-xl border border-gray-900 overflow-y-auto
`}>
    {/* Close Button - Only visible on Mobile */}
    <div 
        onClick={() => setShowFilter(false)} 
        className="md:hidden text-end pe-5 pt-5 text-2xl font-bold hover:cursor-pointer"
    >
        ✕
    </div>

            <div className="">
                <div className="relative inline-block w-full max-w-sm text-left">
                    
                    <details className="group w-full rounded-lg  " open>
                    
                    <summary className="flex w-full cursor-pointer list-none items-center justify-between p-4 font-semibold text-gray-900 text-xl text-heading">
                        Advanced Filters
                    </summary>

                    <div className="border-t border-gray-200 p-4">
                        <div className="mb-4">
                            <label htmlFor="keywords" className="block mb-2.5 text-sm font-medium text-heading">Palabra clave</label>
                            <input type="text" id="keywords" name="keywords" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body " placeholder="e.g. ramon mateo, matematica, tecnologia" value={keywordFilter} onChange={handleKeywordSearch} />
                        </div>

                        <div className="space-y-3">
                        
                        {/* FILTER BY RATING */}
                        <details className="group rounded-lg border border-gray-200"  open={true}>
                            <summary className="flex w-full cursor-pointer list-none items-center justify-between bg-gray-50 p-3 text-sm font-medium text-gray-900 hover:bg-gray-100" >
                            Rating
                            <svg className="h-5 w-5 text-gray-400 transition-transform duration-200 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd"/>
                            </svg>
                            </summary>
                            <div className="space-y-2 p-3 text-sm items-center">
                                {Array.from({ length:5 }).map((_, i) => {

                                    const filledStars = 5-i;
                                    const emptyStars = i;
                                    const rating = 5 - i;

                                    return(
                                        <div key={i}
                                            className="flex items-center space-x-1 hover:cursor-pointer px-6"
                                            onClick={() => setSelectedRating(rating)}>
                                            {
                                                Array.from({ length: filledStars }).map((_, i) => (
                                                    <svg key={i} className={`w-5 h-5 ${selectedRating === rating ? "text-yellow-400" : "text-gray-900"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                    </svg>
                                                    // <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>                        
                                                ))
                                            }
                                            {
                                                Array.from({ length: emptyStars } ).map((_,i) => (
                                                    <svg key={i} className={`w-5 h-5 ${selectedRating === rating ? "text-yellow-400" : "text-gray-900"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
                                                    </svg>                              
                                                ))
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                        </details>

                        {/* FILTER BY SUBJECT */}
                        <details className="group rounded-lg border border-gray-200" open={openDetail == 2}>
                            <summary className="flex w-full cursor-pointer list-none items-center justify-between bg-gray-50 p-3 text-sm font-medium text-gray-900 hover:bg-gray-100" onClick={(e) => {
                            e.preventDefault();
                            toggleDetails(2)
                        }}>
                            Materia
                            <svg className="h-5 w-5 text-gray-400 transition-transform duration-200 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd"/>
                            </svg>
                            </summary>
                            <div className="space-y-2 p-3 text-sm text-gray-600 max-h-[20vh] overflow-auto">
                                {allSubjects.sort().map(([subjectName, count]) => (
                                    <div key={subjectName}
                                            className="flex justify-between"
                                            onClick={() => setSelectedSubject(subjectName)}>

                                        <div className="flex justify-content-center items-center">
                                            <input
                                                readOnly
                                                type="radio"
                                                className="accent-pink-500 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 hover:cursor-pointer"
                                                checked={selectedSubject === subjectName}
                                                onChange={() => null} 
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
                                ))}
                            </div>
                        </details>

                        
                        {/* FILTER BY DEPARTMENT */}
                        <details className="group rounded-lg border border-gray-200" open={openDetail == 3}>
                            <summary className="flex w-full cursor-pointer list-none items-center justify-between bg-gray-50 p-3 text-sm font-medium text-gray-900 hover:bg-gray-100"  onClick={(e) => {
                            e.preventDefault();
                            toggleDetails(3)
                        }}>
                            Departamento
                            <svg className="h-5 w-5 text-gray-400 transition-transform duration-200 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd"/>
                            </svg>
                            </summary>
                            <div className="space-y-2 p-3 text-sm text-gray-600">
                                {allDepartments.sort().map(([departmentName, count]) => (
                                    <div key={departmentName}
                                            className="flex justify-between"
                                            onClick={() => setSelectedDepartment(departmentName)}>

                                        <div className="flex justify-content-center items-center">
                                            <input
                                                readOnly
                                                type="radio"
                                                className="accent-pink-500 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 hover:cursor-pointer"
                                                checked={selectedDepartment === departmentName}
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
                                ))}
                            </div>
                        </details>

                        </div>
                        
                        {/* CLEAR */}
                        <div className="mt-6 flex justify-between">
                            {isFiltered && (
                                <button type="button" className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:cursor-pointer" onClick={clearFilters}>
                                    Clear
                                </button>
                            )}
                        </div>

                    </div>
                    </details>
                </div>
            </div>

        </div>

        {/* Main Panel */}
        <div className="md:col-span-8 flex md:flex-col gap-6 w-full">
            <div className="hidden md:block flex justify-between items-center mb-4">
                <h1>Resultados:</h1>
                <div className="flex gap-4  justify-content-center">
                    <label htmlFor="sorting-options" className="block mb-2.5 text-sm font-medium text-heading">Order by</label>
                    <select value={sortingOrder} onChange={handleSortingChange} id="sorting-options" className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
                        {sortingOptions.map((s, i) => (
                            <option key={i}  value={s.value}>{s.option}</option>
                        ))}
                    </select>
                </div>
            </div>
            
            <div className="grid gap-6  overflow-y-auto max-h-[72vh] w-full">
                {isLoading ? Array.from({ length : 3 }).map((_, i) => <CardSkeleton key={i}/>) : filteredTeachers.map((teacher,i) => <Card key={i} teacher={teacher} />)}
                {!isLoading && filteredTeachers.length == 0 && <div className="text-center col-span-2">Not Found</div>}
            </div>
          
        </div> 
      </section>
  )
}