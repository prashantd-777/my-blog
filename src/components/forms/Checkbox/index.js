const Checkbox = ({
                      id,
                      label = "",
                      type = "checkbox",
                      isChecked = false,
                      handleChange,
                      classes = "",
                      labelClasses = ""
                  }) => {
    return (
        <div className={`custom-control custom-checkbox d-flex align-items-center`}>
            <input
                type={type}
                className="custom-control-input"
                id={id}
                onChange={handleChange}
                width={16}
                height={24}
            />
            <label className={`custom-control-label ps-2 ${labelClasses}`} htmlFor={id}>{label}</label>
        </div>
    )
}

export default Checkbox;