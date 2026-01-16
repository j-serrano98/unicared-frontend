"use client"

import LogoutButton from "./LogoutButton"
import React, { useState } from 'react'
export default function Navbar({ isAuthenticated, profile }) {

    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav className='bg-white border-gray-200 dark:bg-gray-900 text-white px-6 py-3 relative'>
            <div className='container-xl lg:container m-auto max-w-screen-xl flex flex-wrap items-center justify-between mx-auto'>

                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Unica<span className="text-red-500">Red</span></span>
                </a>
                                        
                {/* Right Side Buttons: Login, Logout, Menu Toggle, Profile*/}
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {isAuthenticated 
                        ? 
                        <div className="flex gap-4">
                            <a href="/me">Welcome, {profile?.username}</a>
                            <LogoutButton/>
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
                <div className={`basis-300 overflow-hidden transition-all duration-600 ease-in-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} md:opacity-100 md:max-h-none md:basis-auto md:block`} id="navbar-default">
                    <ul className="font-medium flex flex-col py-4 md:p-0 mt-4 bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                        <li>
                            <a href="/login/" className={`${menuOpen ? "block" : "hidden"} py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0`} aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/register/" className={`${menuOpen ? "block" : "hidden"} py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent`}>About</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}