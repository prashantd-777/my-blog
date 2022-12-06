const Button = ({
                    type = "button",
                    label = "",
                    isDisabled = false,
                    classes = "btn btn-primary"
                }) => {
    return (
        <button
            type={type}
            className={classes}
            disabled={isDisabled}
        >
            {label}
        </button>
    )
}

export default Button;