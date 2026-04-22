type Props = {
    label: string;
    variant: 'primary' | 'outlined';
}
export function Button({ label, variant }: Props) {
    return (
        <button className={`px-[35px] py-5 rounded-[14px] border border-black text-xl w-fit ${variant === 'primary' ? 'bg-black text-white' : 'bg-transparent text-black'}`}>
            {label}
        </button>
    )
}