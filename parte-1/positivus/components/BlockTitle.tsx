type Props = {
    label: string;
    description: string;
}

export function BlockTitle({ label, description }: Props) {
    return (
        <div className="gap-10 flex">
            <p className="text-[40px] font-medium bg-(--color-lime) px-[7px] rounded-[7px] line-height[51px]">{label}</p>
            <p className="text-lg w-[580px]">{description}</p>
        </div>
    )
}