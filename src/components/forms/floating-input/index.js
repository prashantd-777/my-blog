import s from "./floating-input.module.scss";
import FormGroup from "../form-group";

const FloatingInput = ({
                           id = "",
                           type = "text",
                           label = "",
                           touched,
                           errors,
                           handleChange,
                           handleBlur,
    isRequired = false
                       }) => {
    return (
        <FormGroup classes={`${s.formLabelGroupContainer}`}>
            <input
                type={type}
                id={id}
                name={id}
                className={`form-control ${(touched?.[id] && errors?.[id]) ? `is-invalid ${s.isInvalid}` : ""}`}
                placeholder={label}
                onChange={handleChange}
                onBlur={handleBlur}
                required={isRequired}
            />
            <label htmlFor={id}>{label}</label>
            {(touched?.[id] && errors?.[id]) ? (
                <div className={`invalid-feedback position-absolute ${s.errorText}`}>{errors[id]}</div>
            ) : null}
        </FormGroup>
    )
}

export default FloatingInput;