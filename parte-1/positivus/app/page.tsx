import { Navbar } from "../components/Header/Navbar";
import { Header } from "../components/Header/Header";
import { Logotypes } from "../components/Header/Logotypes";
import { BlockTitle } from "@/components/BlockTitle";

export default function Home() {
  return (
    <div className="flex flex-col gap-[140px]">
      <div className="pt-[60px] flex flex-col gap-[70px]">
        <Navbar />
        <Header />
        <Logotypes />
      </div>
      <div>
        <BlockTitle label="Services" description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" />
      </div>
    </div>
  );
}
