type Props = {
    label: string;
    variant: 'primary' | 'outlined';
}
export function Button({ label, variant }: Props) {
    const baseClasses = "px-[35px] py-5 rounded-[14px] border border-black text-xl w-full lg:w-fit transition-colors duration-300";
    
    const variantClasses = variant === 'primary' 
        ? 'bg-black text-white hover:bg-white hover:text-black' 
        : 'bg-transparent text-black hover:bg-black hover:text-white';
    
    return (
        <button className={`${baseClasses} ${variantClasses}`}>
            {label}
        </button>
    )
}