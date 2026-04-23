import { LucideIcon } from "lucide-react";

type Props = {
    icon: LucideIcon;
    text: string;
};

export function BenefitCard({ icon: Icon, text }: Props) {
    return (
        <div className="flex items-center gap-3 border border-secondary-text rounded-lg p-4 bg-secondary-text/6">
            <Icon className="text-primary"/>
            <span className="text-secondary-text">{text}</span>
        </div>
    );
}
