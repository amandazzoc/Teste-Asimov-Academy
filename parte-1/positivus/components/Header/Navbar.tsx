import Image from "next/image";
import { Button } from "../Button";

export function Navbar() {
    return (
        <nav className="px-[100px] flex items-center justify-between">
            <Image src="/Logo.png" alt="Positivus Logo" width={219.54} height={36} className="py-2.5"/>

            <ul className="flex gap-10 text-xl items-center">
                <li>About us</li>
                <li>Services</li>
                <li>Use Cases</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li><Button label="Request a quote" variant="outlined" /></li>
            </ul>
        </nav>
    )
}