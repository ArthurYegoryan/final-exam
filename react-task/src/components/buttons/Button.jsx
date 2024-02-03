import "./Button.css";

const Button = ({
    label,
    type,
    className,
    onClick
}) => {
    return (
        <button type={type} 
                className={`button button-${className}`}
                onClick={onClick} 
        >
            {label}
        </button>
    )
}

export default Button;