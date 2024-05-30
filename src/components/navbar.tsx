"use client";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold cursor-pointer">Web Bioskop</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <span className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 cursor-pointer">
                  Film Terbaru
                </span>
              </Link>
              {/* Add more navigation items here */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
