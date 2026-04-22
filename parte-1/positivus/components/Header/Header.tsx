import { Button } from "../Button";
import Image from "next/image";

export function Header() {
    return (
        <header className="flex flex-col lg:flex-row-reverse items-center lg:justify-between gap-10 lg:gap-0 px-4">
            <div className="flex flex-col gap-[35px] w-full lg:w-[520px] order-1">
                <h1 className="text-4xl lg:text-6xl font-medium">Navigating the digital landscape for success</h1>
                
                <div className="lg:hidden order-2">
                    <Image src="/illustration.png" alt="Hero Image" width={600} height={515} className="w-auto h-96" />
                </div>

                <p className="text-lg lg:text-xl w-full lg:w-[500px] order-3">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>

                <div className="order-4">
                    <Button label="Book a consultation" variant="primary"/>
                </div>
            </div>

            <div className="hidden lg:block">
                <Image src="/illustration.png" alt="Hero Image" width={600} height={515} />
            </div>
        </header>
    )
}