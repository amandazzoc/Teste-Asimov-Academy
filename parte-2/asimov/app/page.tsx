import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col lg:gap-[100px] gap-[50px] lg:px-[100px] px-[20px]">
      <div className="flex flex-col gap-[70px]">
        <Navbar />
        <Header />
      </div>
    </div>
  );
}
