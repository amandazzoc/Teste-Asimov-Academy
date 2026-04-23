"use client"

import { Button } from "./Button";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-8 flex items-center justify-between bg-color-foreground lg:px-[100px] px-[20px]">
        <h1 className="logo text-2xl">ASIMOV</h1>
        
        <ul className="hidden lg:flex items-center gap-8 text-secondary-text">
            <li className="hover:text-primary cursor-pointer transition-colors">CURRÍCULO</li>
            <li className="hover:text-primary cursor-pointer transition-colors">INSTRUTORES</li>
            <li className="hover:text-primary cursor-pointer transition-colors">CURSOS</li>
            <li className="hover:text-primary cursor-pointer transition-colors">BLOG</li>
        </ul>
        
        <div className="hidden lg:flex gap-4">
            <Button variant="text" label="Entrar" />
            <Button variant="primary" label="Cadastrar" />
        </div>

        <button 
            className="lg:hidden text-secondary-text hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {isMenuOpen && (
            <div className="absolute top-20 left-0 right-0 bg-[#171717] border-t border-gray-800 lg:hidden flex flex-col items-center gap-6 py-8 px-[20px] z-20">
                <ul className="flex flex-col items-center gap-6 text-secondary-text">
                    <li className="hover:text-primary cursor-pointer transition-colors">CURRÍCULO</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">INSTRUTORES</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">CURSOS</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">BLOG</li>
                </ul>
                <div className="flex flex-col gap-4 w-full">
                    <Button variant="text" label="Entrar" />
                    <Button variant="primary" label="Cadastrar" />
                </div>
            </div>
        )}
    </nav>
  );
}