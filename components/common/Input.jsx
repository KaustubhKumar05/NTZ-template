const Input = ({ className = '', ...props }) => {
    return (
        <input
            {...props}
            className={`rounded bg-transparent border border-bord-light focus:border-transparent focus:outline-primary-light p-1.5 focus:outline text-white ${className}`}
        />
    );
};

export default Input;
