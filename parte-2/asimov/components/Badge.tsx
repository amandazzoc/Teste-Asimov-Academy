import { LucideIcon } from "lucide-react";

type Props = {
    icon: LucideIcon;
    text: string;
};

export function Badge({ icon: Icon, text }: Props) {
    return (
        <div className="flex items-center gap-2 text-primary font-bold border border-primary rounded-lg px-3 py-1 bg-primary/10 w-fit">
            <Icon size={16}/> {text}
        </div>
    );
}
