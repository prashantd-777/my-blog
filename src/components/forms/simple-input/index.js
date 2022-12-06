import s from "./simple-input.module.scss";
import {Field} from "formik";

const SimpleInput = ({
                         id = "",
                         label = "",
                         touched,
                         errors,
                         type = "text"
                     }) => {
    return (
        <div className={`form-group ${s.formGroup}`}>
            {label ? (
                <label htmlFor={id}>Enter Your Email Address</label>
            ) : null}

            <Field name={id}
                   className={(touched?.[id] && errors?.[id]) ? 'form-control is-invalid' : 'form-control'}
                   type={type}/>
            {(touched?.[id] && errors?.[id]) ? (
                <div className="invalid-feedback position-absolute">{errors[id]}</div>
            ) : null}
        </div>
    )
}

export default SimpleInput;