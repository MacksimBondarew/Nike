const Button = ({ label, iconUrl }) => {
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full border-coral-red text-white">
            {label}
            <img
                src={iconUrl}
                alt="arrow right icon"
                className="w-5 h-5 ml-2 rounded-full"
            />
        </button>
    );
};

export default Button;
