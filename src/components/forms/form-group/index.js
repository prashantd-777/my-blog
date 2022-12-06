const FormGroup = ({
                       children,
                       classes = ""
                   }) => {
    return (
        <div className={`form-group position-relative mb-4 ${classes}`}>
            {children}
        </div>
    )
}

export default FormGroup;