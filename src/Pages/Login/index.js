import s from "./Login.module.scss";
import { Formik, Field, Form } from 'formik';
import {LOGIN_FORM} from "../../validation-schema";

const INITIAL_VALUES = {
    email: '',
    password: ""
};

const Login = () => {
    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    }

    return (
        <div className={`${s.loginContainer}`}>
            <div className={`row ${s.loginBlock}`}>
                <div className={`col-xl-4 col-lg-5 col-md-6 order-sm-2`}>
                    <div className={`${s.formContainer} mb-5`}>
                        <h6 className={"mb-4"}>Log In to Your Account</h6>
                        <Formik
                            initialValues={{...INITIAL_VALUES}}
                            onSubmit={handleSubmit}
                            validationSchema={LOGIN_FORM}
                        >
                            {({
                                  values,
                                  touched,
                                  errors,
                                  isValid,
                              }, isSubmitting) => (
                                <Form>
                                    <div className={`form-group ${s.formGroup}`}>
                                        <label htmlFor="email">Enter Your Email Address</label>
                                        <Field name="email" className={(touched.email && errors.email) ? 'form-control is-invalid' : 'form-control'} type="email" />
                                        {touched.email && errors.email ? (
                                            <div className="invalid-feedback">{errors.email}</div>
                                        ) : null}
                                    </div>

                                    <div className={`form-group ${s.formGroup}`}>
                                        <label htmlFor="password">Enter Your Password</label>
                                        <Field name="password" className={(touched.password && errors.password) ? 'form-control is-invalid' : 'form-control'} type="password" />
                                        {touched.password && errors.password ? (
                                            <div className="invalid-feedback">{errors.password}</div>
                                        ) : null}
                                    </div>

                                    <div className={`form-group ${s.formGroup}`}>
                                        <button type="submit" className="w-100 btn btn-primary" disabled={isSubmitting || !isValid}>{isSubmitting ? "Please wait..." : "Submit"}</button>
                                    </div>
                                </Form>
                            )}
                        </Formik >
                        <div className={"text-center"}>
                            <span>Don’t have an account?</span>{" "}
                            <a href="#" >Register Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;