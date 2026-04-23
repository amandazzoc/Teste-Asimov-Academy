type Props = {
    variant?: 'primary' | 'secondary' | 'text';
    size?: 'md' | 'lg';
    label: string;
};

export function Button({ variant = 'primary', size = 'md', label }: Props) {
    const baseClasses = size === 'md' ? "px-4 py-2 text-base rounded-lg transition-all duration-200" : "px-6 py-3 text-lg rounded-lg transition-all duration-200";
    if (variant === 'primary') {
        return <button className={`${baseClasses} border bg-primary text-black hover:opacity-80`} >
            {label}
        </button>;
    }

    if (variant === 'secondary') {
        return <button className={`${baseClasses} border border-primary text-primary bg-transparent hover:bg-primary hover:text-black`} >
            {label}
        </button>;
    }

    return <button className={`${baseClasses} text-secondary-text hover:text-primary`} >
        {label}
    </button>;
}