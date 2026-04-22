import { Navbar } from "../components/Header/Navbar";
import { Header } from "../components/Header/Header";
import { Logotypes } from "../components/Header/Logotypes";
import { BlockTitle } from "@/components/BlockTitle";
import { SERVICES } from "@/constants/CardServices";
import { Card } from "@/components/Services/Card";
import { LetsMakeThingsHappenCard } from "@/components/LetsMakeThingsHappenCard";
import { CaseStudiesCard } from "@/components/CaseStudiesCard";

export default function Home() {
  return (
    <div className="flex flex-col lg:gap-[100px] gap-[50px] lg:px-[100px] px-[20px] py-[60px]">
      <div className="flex flex-col gap-[70px]">
        <Navbar />
        <Header />
        <Logotypes />
      </div>
      <div className="flex flex-col lg:gap-20 gap-10 lg:pt-10 pt-5">
        <BlockTitle label="Services" description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((service, index) => (
            <Card 
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              variant={service.variant}
              illustration={service.illustration}
            />
          ))}
        </div>
      </div>
      <LetsMakeThingsHappenCard />
      <div className="flex flex-col lg:gap-20 gap-10 lg:pt-10 pt-5">
        <BlockTitle label="Case Studies" description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" />
        <CaseStudiesCard />
      </div>
    </div>
  );
}
