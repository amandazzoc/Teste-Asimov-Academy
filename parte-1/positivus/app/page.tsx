import { Navbar } from "../components/Header/Navbar";
import { Header } from "../components/Header/Header";
import { Logotypes } from "../components/Header/Logotypes";
import { BlockTitle } from "@/components/BlockTitle";
import { SERVICES } from "@/constants/CardServices";
import { Card } from "@/components/Services/Card";

export default function Home() {
  return (
    <div className="flex flex-col gap-[140px] px-[100px]">
      <div className="pt-[60px] flex flex-col gap-[70px]">
        <Navbar />
        <Header />
        <Logotypes />
      </div>
      <div className="flex flex-col gap-20">
        <BlockTitle label="Services" description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" />
        <div className="grid grid-cols-2 gap-10">
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
    </div>
  );
}
