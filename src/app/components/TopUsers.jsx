"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import ImageProfile1 from "../../../public/profile-picture-1.jpg"
import ImageProfile2 from "../../../public/profile-picture-2.jpg"
import ImageProfile3 from "../../../public/profile-picture-3.jpg"
import ImageProfile4 from "../../../public/profile-picture-4.jpg"
import ImageProfile5 from "../../../public/profile-picture-5.jpg"
import getUsers from "../lib/api/users"


export default function TopUsers() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        try {
            async function fetchUsers() {
                const response = await getUsers()
                const data = await response.json()
                console.log("Fetched users:", data)
                setUsers(data)
            }
            fetchUsers()
        } catch (error) {
            console.error("Error fetching users:", error)
        }
    }, [])

    return (
        <div className="w-full max-w-sm p-6 bg-neutral-primary-soft border border-default rounded-base shadow-xs rounded-xl">
                    <h5 className="text-xl font-semibold text-heading mb-6">Latest users</h5>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-default">
                            {users.map((user) => (
                                <li key={user.id} className="pb-4 sm:pb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="shrink-0">
                                            <Image className="w-8 h-8 rounded-full" src={ImageProfile1} alt="Neil image" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-heading truncate">
                                                {user.username}
                                            </p>
                                            <p className="text-sm text-body truncate">
                                                {user.email}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center space-x-1.5">
                                            <button type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none shrink-0">Follow</button>
                                            <button data-tooltip-target="tooltip-remove-1" type="button" className="inline-flex items-center justify-center text-fg-danger bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base h-9 w-9 focus:outline-none">
                                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/></svg>
                                            </button>
                                            <div id="tooltip-remove-1" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs force:opacity-0 tooltip">
                                                Remove
                                                <div className="tooltip-arrow" data-popper-arrow></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            {/* <li className="py-4 sm:py-4">
                                <div className="flex items-center gap-2">
                                    <div className="shrink-0">
                                        <Image className="w-8 h-8 rounded-full" src={ImageProfile3} alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-heading truncate">
                                            Bonnie Green
                                        </p>
                                        <p className="text-sm text-body truncate">
                                            bonnie@flowbite.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center space-x-1.5">
                                        <button type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none shrink-0">Follow</button>
                                        <button data-tooltip-target="tooltip-remove-2" type="button" className="inline-flex items-center justify-center text-fg-danger bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base h-9 w-9 focus:outline-none">
                                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/></svg>
                                        </button>
                                        <div id="tooltip-remove-2" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs force:opacity-0 tooltip">
                                            Remove
                                            <div className="tooltip-arrow" data-popper-arrow></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="py-4 sm:py-4">
                                <div className="flex items-center gap-2">
                                    <div className="shrink-0">
                                        <Image className="w-8 h-8 rounded-full" src={ImageProfile2} alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-heading truncate">
                                            Michael Gough
                                        </p>
                                        <p className="text-sm text-body truncate">
                                            michael@themesberg.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center space-x-1.5">
                                        <button type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none shrink-0">Follow</button>
                                        <button data-tooltip-target="tooltip-remove-3" type="button" className="inline-flex items-center justify-center text-fg-danger bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base h-9 w-9 focus:outline-none">
                                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/></svg>
                                        </button>
                                        <div id="tooltip-remove-3" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs force:opacity-0 tooltip">
                                            Remove
                                            <div className="tooltip-arrow" data-popper-arrow></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="py-4 sm:py-4">
                                <div className="flex items-center gap-2">
                                    <div className="shrink-0">
                                        <Image className="w-8 h-8 rounded-full" src={ImageProfile4} alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-heading truncate">
                                            Lana Byrd
                                        </p>
                                        <p className="text-sm text-body truncate">
                                            lana@apple.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center space-x-1.5">
                                        <button type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none shrink-0">Follow</button>
                                        <button data-tooltip-target="tooltip-remove-4" type="button" className="inline-flex items-center justify-center text-fg-danger bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base h-9 w-9 focus:outline-none">
                                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/></svg>
                                        </button>
                                        <div id="tooltip-remove-4" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs force:opacity-0 tooltip">
                                            Remove
                                            <div className="tooltip-arrow" data-popper-arrow></div>
                                        </div>
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                    </div>
        </div>
    )
}