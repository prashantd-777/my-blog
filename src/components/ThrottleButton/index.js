
const ThrottleButton = ({
                            type = "button",
                            label = "",
                            isDisabled = false,
                            classes = "btn btn-primary",
                            isLoading = false
                        }) => {
    return (
        <button
            type={type}
            className={classes}
            disabled={isDisabled}
        >
            {isLoading ? (
                <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </>
            ) : label}
        </button>
    )
}

export default ThrottleButton;