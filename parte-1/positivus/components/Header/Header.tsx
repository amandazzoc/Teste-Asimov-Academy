import { Button } from "../Button";
import Image from "next/image";

export function Header() {
    return (
        <header className="flex items-center justify-between">
            <div className="flex gap-[35px] flex-col w-[520px]">
                <h1 className="text-6xl font-medium">Navigating the digital landscape for success</h1>

                <p className="text-xl w-[500px]">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>

                <Button label="Book a consultation" variant="primary" />
            </div>
            <Image src="/illustration.png" alt="Hero Image" width={600} height={515} />
        </header>
    )
}