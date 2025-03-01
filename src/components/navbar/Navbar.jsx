"use client"

import Link from "next/link";
import { useState } from "react";
import ButtonHamburger from "../ui/buttonMenu";
import ListMenu from "../ui/listMenu";
import "@/app/globals.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="fixed top-0 left-0 w-full bg-[--background-header] backdrop-blur-lg z-5">
            <div className="flex items-center justify-between py-2 px-2 sm:px-6 lg:px-16">
                <div className="flex-shrink-0 text-white">
                    <Link href="#" className="text-lg sm:text-4xl font-extralight ms:font-extrabold"><code>{"<"}</code>Roberto <span className="text-shadow-header">Rocha<code>{"/>"}</code></span></Link>
                </div>
                <nav className="flex items-center text-xl font-medium hidden lg:block">
                    <Link href="#" className="mx-4 hover:text-[#00ffee] hover:underline hover:underline-offset-4 hover:decoration-2 
                    focus:text-[#00ffee] focus:underline focus:underline-offset-4 focus:decoration-2 active:underline active:text-[#00ffee;]">Home</Link>
                    <Link href="#" className="mx-4 hover:text-[#00ffee] hover:underline hover:underline-offset-4 hover:decoration-2 
                    focus:text-[#00ffee] focus:underline focus:underline-offset-4 focus:decoration-2 active:underline active:text-[#00ffee;]">Education</Link>
                    <Link href="#" className="mx-4 hover:text-[#00ffee] hover:underline hover:underline-offset-4 hover:decoration-2 
                    focus:text-[#00ffee] focus:underline focus:underline-offset-4 focus:decoration-2 active:underline active:text-[#00ffee;]">Services</Link>
                    <Link href="#" className="mx-4 hover:text-[#00ffee] hover:underline hover:underline-offset-4 hover:decoration-2 
                    focus:text-[#00ffee] focus:underline focus:underline-offset-4 focus:decoration-2 active:underline active:text-[#00ffee;]">Proyects</Link>
                    <Link href="#" className="mx-4 hover:text-[#00ffee] hover:underline hover:underline-offset-4 hover:decoration-2 
                    focus:text-[#00ffee] focus:underline focus:underline-offset-4 focus:decoration-2 active:underline active:text-[#00ffee;]">Contact</Link>
                </nav>
                {/* MENU BUTTON HAMBURGER */}
                <ButtonHamburger onClick={toggleMenu} state={isOpen}/>
            </div>
            {/* MENU LIST RESPONSIVE */}
            {isOpen && (
                <ListMenu/>
            )}
        </header>
    )
}