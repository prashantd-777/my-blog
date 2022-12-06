
const Checkbox = ({
                      id,
                      label = "",
                      type = "checkbox",
                      classes = "",
                      isChecked = false,
                      handleChange
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
            <label className="custom-control-label ps-2" htmlFor={id}>{label}</label>
        </div>
    )
}

export default Checkbox;