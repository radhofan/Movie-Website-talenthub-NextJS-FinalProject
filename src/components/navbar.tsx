"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons for menu and close buttons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar toggle button */}
      <button
        className="fixed top-4 left-4 z-50 text-gray-300 focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? <HiX className="h-8 w-8" /> : <HiMenu className="h-8 w-8" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 h-full fixed top-0 left-0 flex flex-col justify-between transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="py-5 px-4 mt-12">
          <h1 className="text-3xl font-bold cursor-pointer">Logo</h1>
          <nav className="mt-8">
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="block px-4 py-2 rounded-md hover:bg-gray-700 cursor-pointer">
                    Film Terbaru
                  </span>
                </Link>
              </li>
              {/* Add more navigation items here */}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
