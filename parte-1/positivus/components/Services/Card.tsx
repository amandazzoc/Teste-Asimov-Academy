import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

type Variant = "light" | "lime" | "dark" | "limeDark";

export type Props = {
  title: string;
  subtitle: string;
  variant?: Variant;
  illustration?: ReactNode;
};

const variantStyles: Record<Variant, {
  card: string;
  titleBox: string;
  titleText: string;
  arrowCircle: string;
  arrowIcon: string;
  learnMoreText: string;
}> = {
  light: {
    card: "bg-[#f3f3f3] border-[#191a23]",
    titleBox: "bg-[#b9ff66]",
    titleText: "text-[#191a23]",
    arrowCircle: "bg-[#191a23]",
    arrowIcon: "text-[#b9ff66]",
    learnMoreText: "text-[#191a23]",
  },
  lime: {
    card: "bg-[#b9ff66] border-[#191a23]",
    titleBox: "bg-white",
    titleText: "text-[#191a23]",
    arrowCircle: "bg-[#191a23]",
    arrowIcon: "text-[#b9ff66]",
    learnMoreText: "text-[#191a23]",
  },
  dark: {
    card: "bg-[#191a23] border-[#191a23]",
    titleBox: "bg-white",
    titleText: "text-[#191a23]",
    arrowCircle: "bg-white",
    arrowIcon: "text-[#191a23]",
    learnMoreText: "text-white",
  },
  limeDark: {
    card: "bg-[#191a23] border-[#191a23]",
    titleBox: "bg-[#b9ff66]",
    titleText: "text-[#191a23]",
    arrowCircle: "bg-white",
    arrowIcon: "text-[#191a23]",
    learnMoreText: "text-white",
  },
};

export function Card({ title, subtitle, variant = "light", illustration }: Props) {
  const styles = variantStyles[variant];

  return (
    <div className={`w-full rounded-[45px] border px-[50px] py-[50px] flex justify-between items-center overflow-hidden shadow-[0_5px_0_#191A23] ${styles.card} relative`}>
      <div className="flex flex-col justify-between z-10 gap-[93px]">
        <div className="flex flex-col">
          <div className={`inline-block px-[7px] rounded-[7px] w-fit ${styles.titleBox}`}>
            <span className={`lg:text-3xl text-2xl font-medium leading-tight whitespace-pre-line ${styles.titleText}`}>
              {title}
            </span>
          </div>
          <div className={`inline-block px-[7px] rounded-[7px] w-fit ${styles.titleBox}`}>
            <span className={`lg:text-3xl text-2xl font-medium leading-tight whitespace-pre-line ${styles.titleText}`}>
              {subtitle}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-[15px]">
          <div className={`w-[41px] h-[41px] rounded-full flex items-center justify-center ${styles.arrowCircle}`}>
            <ArrowUpRight className={`w-[35px] h-[35px] ${styles.arrowIcon} rotate-10 deg`} />
          </div>
          <span className={`text-xl ${styles.learnMoreText}`}>
            Learn more
          </span>
        </div>
      </div>

      <div className="h-fit">
        {illustration}
      </div>
    </div>
  );
}
