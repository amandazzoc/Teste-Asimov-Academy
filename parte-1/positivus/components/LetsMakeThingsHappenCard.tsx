import Image from "next/image";
import { Button } from "./Button";

export function LetsMakeThingsHappenCard() {
  return (
    <div className="py-6">
        <div className="flex justify-between bg-(--color-gray) rounded-[45px] lg:px-[60px] px-[40px] lg:py-0 py-[40px] items-center lg:h-[347px]">
            <div className="flex flex-col gap-[26px]">
                <h2 className="font-medium text-3xl">Let&apos;s make things happen</h2>
                <p className="text-lg lg:w-[50%]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                <Button label="Get your free proposal" variant="primary" />
            </div>
            <Image src="/letsmakethingshappenimage.png" alt="Illustration" width={494} height={394} className="hidden lg:flex"/>
        </div>
    </div>
  );
}