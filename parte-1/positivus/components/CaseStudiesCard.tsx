"use client";

import { ArrowUpRight } from "lucide-react";

const CASE_STUDIES = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export function CaseStudiesCard() {

  return (
    <div>
        <div className="bg-(--color-dark) hidden lg:flex rounded-[45px] lg:px-[60px] lg:py-[70px] px-[30px] py-[50px]">
            <div className="text-white text-lg flex flex-col gap-5 pr-16 border-r border-white">
                <p>{CASE_STUDIES[0].text}</p>
                <button className="text-xl flex items-center gap-[15px] text-(--color-lime)">
                    Learn more
                    <ArrowUpRight className="w-[35px] h-[35px] color-(--color-lime) rotate-10 deg" />
                </button>
            </div>
                
            <div className="text-white text-lg flex flex-col gap-5 px-16 border-r border-white">
                <p>{CASE_STUDIES[1].text}</p>
                <button className="text-xl flex items-center gap-[15px] text-(--color-lime)">
                    Learn more
                    <ArrowUpRight className="w-[35px] h-[35px] color-(--color-lime) rotate-10 deg" />
                </button>
            </div>

            <div className="text-white text-lg flex flex-col gap-5 pl-16">
                <p>{CASE_STUDIES[2].text}</p>
                <button className="text-xl flex items-center gap-[15px] text-(--color-lime)">
                    Learn more
                    <ArrowUpRight className="w-[35px] h-[35px] color-(--color-lime) rotate-10 deg" />
                </button>
            </div>
        </div>
        <div className="lg:hidden overflow-x-auto flex gap-6 scrollbar-hide">
            <div className="flex gap-6 animate-carousel hover:[animation-play-state:paused]">
                {[...CASE_STUDIES, ...CASE_STUDIES, ...CASE_STUDIES].map((study, index) => (
                <div key={index} className="shrink-0 w-[85vw] bg-[#292B32] rounded-[30px] p-8">
                    <p className="text-white text-lg mb-6">{study.text}</p>
                    <button className="text-xl flex items-center gap-[15px] text-(--color-lime)">
                    Learn more
                    <ArrowUpRight className="w-[35px] h-[35px] color-(--color-lime) rotate-10 deg" />
                    </button>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}