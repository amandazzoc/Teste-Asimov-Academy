import { ArrowUpRight } from "lucide-react";

export function CaseStudiesCard() {
  return (
    <div className="bg-(--color-dark) rounded-[45px] px-[60px] py-[70px] flex">
        <div className="text-white text-lg flex flex-col gap-5 pr-16 border-r border-white">
            <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
            <button className="text-xl flex items-center gap-[15px] text-(--color-lime)">
                Learn more
                <ArrowUpRight className="w-[35px] h-[35px] color-(--color-lime) rotate-10 deg" />
            </button>
        </div>
        
        <div className="text-white text-lg flex flex-col gap-5 px-16 border-r border-white">
            <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
            <button className="text-xl flex items-center gap-[15px] text-(--color-lime)">
                Learn more
                <ArrowUpRight className="w-[35px] h-[35px] color-(--color-lime) rotate-10 deg" />
            </button>
        </div>
        <div className="text-white text-lg flex flex-col gap-5 pl-16">
            <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
            <button className="text-xl flex items-center gap-[15px] text-(--color-lime)">
                Learn more
                <ArrowUpRight className="w-[35px] h-[35px] color-(--color-lime) rotate-10 deg" />
            </button>
        </div>
    </div>
  );
}