const Button = ({ children, variant = 'standard', className = '', ...props }) => {
    const css = {
        standard:
            'bg-primary-default hover:bg-primary-light text-white font-medium active:bg-primary-dark px-4 py-2',
        outlined:
            'text-primary-default hover:text-primary-default border-primary-default border hover:bg-background-light active:bg-transparent px-4 py-2',
        danger: 'bg-red-500 hover:bg-red-400 border-none text-white active:bg-red-300 px-4 py-2',
        icon: `flex items-center bg-primary-default hover:bg-primary-light text-white font-medium active:bg-primary-dark py-2 px-3`
    };
    return (
        <button
            {...props}
            className={`${css[variant]} ${className} rounded transition-colors hover:font-semibold`}>
            {children}
        </button>
    );
};

export default Button;
