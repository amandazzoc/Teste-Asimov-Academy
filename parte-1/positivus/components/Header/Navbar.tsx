"use client";

import Image from "next/image";
import { Button } from "../Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between px-4">
            <Image src="/Logo.png" alt="Positivus Logo" width={219.54} height={36} className="py-2.5"/>

            <ul className="hidden lg:flex gap-10 text-xl items-center">
                <li className="hover:text-(--color-lime) cursor-pointer transition-colors">About us</li>
                <li className="hover:text-(--color-lime) cursor-pointer transition-colors">Services</li>
                <li className="hover:text-(--color-lime) cursor-pointer transition-colors">Use Cases</li>
                <li className="hover:text-(--color-lime) cursor-pointer transition-colors">Pricing</li>
                <li className="hover:text-(--color-lime) cursor-pointer transition-colors">Blog</li>
                <li><Button label="Request a quote" variant="outlined" /></li>
            </ul>

            <button 
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? (
                    <X className="w-8 h-8" />
                ) : (
                    <Menu className="w-8 h-8" />
                )}
            </button>

            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-[20px] border border-dark p-6 shadow-[0_5px_0_#191A23] lg:hidden z-50">
                    <ul className="flex flex-col gap-4 text-xl items-center">
                        <li className="hover:text-(--color-lime) cursor-pointer transition-colors py-2">About us</li>
                        <li className="hover:text-(--color-lime) cursor-pointer transition-colors py-2">Services</li>
                        <li className="hover:text-(--color-lime) cursor-pointer transition-colors py-2">Use Cases</li>
                        <li className="hover:text-(--color-lime) cursor-pointer transition-colors py-2">Pricing</li>
                        <li className="hover:text-(--color-lime) cursor-pointer transition-colors py-2">Blog</li>
                        <li className="pt-2"><Button label="Request a quote" variant="outlined" /></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}