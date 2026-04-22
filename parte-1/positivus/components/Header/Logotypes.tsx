import Image from "next/image"

const LOGOS = [
    { src: "/company-logos/amazon.png", alt: "Logo da Amazon" },
    { src: "/company-logos/dribbble.png", alt: "Logo do Dribbble" },
    { src: "/company-logos/hubspot.png", alt: "Logo do Hubspot" },
    { src: "/company-logos/notion.png", alt: "Logo do Notion" },
    { src: "/company-logos/netflix.png", alt: "Logo da Netflix" },
    { src: "/company-logos/zoom.png", alt: "Logo do Zoom" },
]

export function Logotypes() {
    const topRow = LOGOS.slice(0, 3)
    const bottomRow = LOGOS.slice(3)

    return (
        <div className="flex flex-col gap-6 ">
            <div className="hidden lg:flex overflow-hidden">
                <div className="flex justify-between w-full">
                    {[...LOGOS].map((logo, i) => (
                        <Image
                            key={`${logo.alt}-${i}`}
                            src={logo.src}
                            alt={logo.alt}
                            width={125}
                            height={48}
                            className="grayscale hover:grayscale-0 transition-all duration-300 w-auto shrink-0"
                        />
                    ))}
                </div>
            </div>

            <div className="lg:hidden flex flex-col gap-6">
                <div className="flex overflow-hidden">
                    <div className="flex gap-8 animate-marquee-right">
                        {[...topRow, ...topRow, ...topRow].map((logo, i) => (
                            <Image
                                key={`${logo.alt}-${i}`}
                                src={logo.src}
                                alt={logo.alt}
                                width={100}
                                height={38}
                                className="grayscale hover:grayscale-0 transition-all duration-300 w-auto shrink-0"
                            />
                        ))}
                    </div>
                </div>

                <div className="flex overflow-hidden">
                    <div className="flex gap-8 animate-marquee-left">
                        {[...bottomRow, ...bottomRow, ...bottomRow].map((logo, i) => (
                            <Image
                                key={`${logo.alt}-${i}`}
                                src={logo.src}
                                alt={logo.alt}
                                width={100}
                                height={38}
                                className="grayscale hover:grayscale-0 transition-all duration-300 w-auto shrink-0"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}