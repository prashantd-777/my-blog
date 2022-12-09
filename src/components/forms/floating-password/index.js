import React, {useState} from "react";
import s from "./floating-password.module.scss";
import FormGroup from "../form-group";

const FloatingPassword = ({
                              id = "",
                              type = "text",
                              label = "",
                              touched,
                              errors,
                              handleChange,
                              handleBlur,
                              isRequired = false,
                              value
                          }) => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const hasError = (touched?.[id] && errors?.[id]);

    return (
        <FormGroup classes={`${s.formLabelGroupContainer}`}>
            <input
                type={passwordShown ? "text" : type}
                id={id}
                name={id}
                className={`form-control ${hasError ? `is-invalid ${s.isInvalid}` : ""}`}
                placeholder={label}
                onChange={handleChange}
                onBlur={handleBlur}
                required={isRequired}
                value={value}
            />
            <i className={`${passwordShown ? 'fa fa-eye-slash' : 'fa fa-eye'} ${hasError ? 'text-danger' : ''}`} onClick={togglePassword}></i>
            <label htmlFor={id}>{label}</label>
            {(touched?.[id] && errors?.[id]) ? (
                <div className={`invalid-feedback position-absolute ${s.errorText}`}>{errors[id]}</div>
            ) : null}
        </FormGroup>
    )
}

export default FloatingPassword;