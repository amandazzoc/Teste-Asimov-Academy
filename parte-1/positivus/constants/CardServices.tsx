import Image from "next/image";
import { Props } from "../components/Services/Card";

export const SERVICES: Props[] = [
  {
    title: "Search engine",
    subtitle: "optimization",
    variant: "light",
    illustration: <Image src="/services-images/seo.png" alt="SEO" width={210} height={150} className="h-auto"/>,
  },
  {
    title: "Pay-per-click",
    subtitle: "advertising",
    variant: "lime",
    illustration: <Image src="/services-images/ppa.png" alt="PPA" width={210} height={150} className="h-auto"/>,
  },
  {
    title: "Social media",
    subtitle: "marketing",
    variant: "dark",
    illustration: <Image src="/services-images/social-media.png" alt="Social Media" width={210} height={150} className="h-auto"/>,
  },
  {
    title: "Email",
    subtitle: "Marketing",
    variant: "light",
    illustration: <Image src="/services-images/tokyo-sending-messages-from-one-place-to-another.png" alt="Email Marketing" width={210} height={150} className="h-auto"/>,
  },
  {
    title: "Content",
    subtitle: "Creation",
    variant: "lime",
    illustration: <Image src="/services-images/content-creation.png" alt="Content Creation" width={210} height={150} className="h-auto"/>,
  },
  {
    title: "Analytics and",
    subtitle: "Tracking",
    variant: "limeDark",
    illustration: <Image src="/services-images/analytics.png" alt="Analytics" width={210} height={150} className="h-auto"/>,
  },
];