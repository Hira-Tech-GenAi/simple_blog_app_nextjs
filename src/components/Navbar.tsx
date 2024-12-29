import Link from "next/link";
import React from "react";
import { ModeToggle } from "./modeToggle";

const Navbar = () => {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5 shadow-lg border-b border-gray-200 rounded">
      <Link href="/" className="text-4xl font-bold">
        Information Technology
        <span className="text-primary rounded-lg p-[3px] text-pink-400 shadow-lg border-b border-gray-200 ">
          Blogs
        </span>
      </Link>

     
       
        <ModeToggle />
      
    </nav>
  );
};

export default Navbar;
