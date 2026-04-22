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
    return (
        <div className="flex px-[100px] items-center justify-between">
            {LOGOS.map((logo) => (
                <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={125}
                    height={48}
                    className="grayscale hover:grayscale-0 transition-all duration-300 w-auto"
                />
            ))}
        </div>
    )
}