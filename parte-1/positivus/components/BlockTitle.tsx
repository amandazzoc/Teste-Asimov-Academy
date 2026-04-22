type Props = {
    label: string;
    description: string;
}

export function BlockTitle({ label, description }: Props) {
    return (
        <div className="lg:gap-10 gap-5 flex flex-col lg:flex-row px-4 items-center">
            <p className="text-[40px] font-medium bg-(--color-lime) px-[7px] rounded-[7px] line-height[51px] w-fit">{label}</p>
            <p className="text-lg lg:w-[580px] text-center lg:text-left">{description}</p>
        </div>
    )
}