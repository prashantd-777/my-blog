import s from "./Login.module.scss";
import { Formik, Field, Form } from 'formik';
import {LOGIN_FORM} from "../../validation-schema";

const INITIAL_VALUES = { email: '', password: "" };

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
                            {(formik, isSubmitting) => (
                                <Form>
                                    <div className={`form-group ${s.formGroup}`}>
                                        <label htmlFor="email">Enter Your Email Address</label>
                                        <Field name="email" className={(formik.touched.email && formik.errors.email) ? 'form-control is-invalid' : 'form-control'} type="email" />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="invalid-feedback">{formik.errors.email}</div>
                                        ) : null}
                                    </div>

                                    <div className={`form-group ${s.formGroup}`}>
                                        <label htmlFor="password">Enter Your Password</label>
                                        <Field name="password" className={(formik.touched.password && formik.errors.password) ? 'form-control is-invalid' : 'form-control'} type="password" />
                                        {formik.touched.password && formik.errors.password ? (
                                            <div className="invalid-feedback">{formik.errors.password}</div>
                                        ) : null}
                                    </div>

                                    <div className={`form-group ${s.formGroup}`}>
                                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Submit"}</button>
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