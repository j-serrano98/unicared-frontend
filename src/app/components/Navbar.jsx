"use client"

import LogoutButton from "./LogoutButton"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'


export default function Navbar({ isAuthenticated, profile }) {
    const dropdownRef = useRef(null);
    const lgDropdownRef = useRef(null);

    const [menuOpen, setMenuOpen] = useState(false);
    const [lgMenuOpen, setLgMenuOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
            if (lgDropdownRef.current && !lgDropdownRef.current.contains(event.target)) {
                setLgMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return (
        <nav className='bg-white border-gray-200 dark:bg-gray-900 text-white px-6 py-3 relative'>
            <div className='container-xl lg:container m-auto max-w-screen-xl flex flex-wrap items-center justify-between mx-auto'>

                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src="/UnicaRed Logo.png"
                        width={40}
                        height={1}
                        alt="Picture of the author"
                    />
                    <div className="text-2xl font-bold">
                    <span className="text-white">Unica</span><span className="text-red-500">Red</span>
                    </div>
                </a>
                                        
                {/* Right Side Buttons: Login, Logout, Menu Toggle, Profile*/}
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {isAuthenticated 
                        ? 
                        <div className="flex gap-4">

                            <div ref={lgDropdownRef} className="relative">
                                <button onClick={() => setLgMenuOpen(prev => !prev)} id="accountButton" type="button" className="hidden md:inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
                                    <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    </svg>              
                                    Perfil
                                    <svg className={`w-4 h-4 ms-1 transition-transform duration-200 ${lgMenuOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                                    </svg> 
                                </button>

                                <div id="lg-display-dropdown" className={`absolute right-0 mt-2 z-50 w-65 divide-y divide-gray-100 rounded-lg bg-white shadow-xl dark:divide-gray-600 dark:bg-gray-700 transition-all duration-200 ease-out origin-top-right ${lgMenuOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"}`}>
                                    <div className="px-3 py-5 text-md font-medium text-gray-900 dark:text-white text-center">
                                        <span className="font-bold">Bienvenido, {profile?.first_name} {profile?.last_name}</span>
                                        <br />
                                        <span className="text-sm">{profile?.email}</span>
                                    </div>
                                    
                                    <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                                        <li><a href="/me" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-600"> Mi Perfil </a></li>
                                        <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-600"> Ajustes </a></li>
                                    </ul>
                                    <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                                        <li className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-600 hover:cursor-pointer"><LogoutButton/></li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        : 
                        <div className="hidden lg:flex">
                            <a href="/login/" className="text-white hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  dark:hover:bg-gray-700 dark:focus:ring-gray-800">Inicia Sesion</a>
                            <a href="/register/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ms-2">Registrate</a>
                        </div>
                    }
                    <button onClick={() => setMenuOpen(prev => !prev)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded={menuOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div ref={dropdownRef} className={`basis-300 overflow-hidden transition-all duration-600 ease-in-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} md:opacity-100 md:max-h-none md:basis-auto md:block`} id="navbar-default">
                    {isAuthenticated ? <div className={`${menuOpen ? "md:hidden" : "hidden"} pt-5 ps-3 text-lg`}>Bienvenido, {profile?.first_name} {profile?.last_name}</div> : ""}
                    
                    {isAuthenticated
                        ?
                        <ul className="font-medium flex flex-col py-4 md:p-0 mt-4 bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                            <li><a href="/me" title="" className={`${menuOpen ? "block hover:bg-gray-700 md:hidden" : "hidden"} py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0`} > Mi Perfil </a></li>
                            {/* <li><a href="#" title="" className={`${menuOpen ? "block hover:bg-gray-700" : "hidden"} py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0`} > Ajustes </a></li> */}
                            <li className={`${menuOpen ? "block hover:bg-gray-700 md:hidden" : "hidden"} py-2 px-3`}><LogoutButton/></li>
                        </ul>
                        :
                        <ul className="md:hidden font-medium flex flex-col py-4 md:p-0 mt-4 bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                            <li>
                                <a href="/login/" className={`${menuOpen ? "block hover:bg-gray-700 " : "hidden"} py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0`} aria-current="page">Inicia Sesion</a>
                            </li>
                            <li>
                                <a href="/register/" className={`${menuOpen ? "block hover:bg-gray-700" : "hidden"} py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent`}>Registrate</a>
                            </li>
                        </ul>
                    }
                </div>

            </div>
        </nav>
    )
}