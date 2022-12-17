const Button = ({
                    type = "button",
                    label = "",
                    isDisabled = false,
                    classes = "btn btn-primary",
                    onClick
                }) => {
    return (
        <button
            type={type}
            className={classes}
            disabled={isDisabled}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button;