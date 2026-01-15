// Add "use client" at the top if you're using the App Router
"use client";

import { useState } from "react";

export default function MyDropdown() {
  // 1. Add state to track if the dropdown is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownDefaultButton"
        // 2. Add an onClick handler to toggle the state
        onClick={() => setIsOpen(!isOpen)}
        data-dropdown-toggle="dropdown"
        className="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent bg-foreground focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        type="button"
      >
        Dropdown button
        <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/></svg>
      </button>

      {/* */}
      <div
        id="dropdown"
        // 3. Use the state to conditionally add/remove the 'hidden' class
        className={`z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44 ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
          </li>
          <li>
            <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
          </li>
          <li>
            <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
          </li>
          <li>
            <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
          </li>
        </ul>
      </div>
    </div>
  );
}