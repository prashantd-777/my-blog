import s from "./login.module.scss";
import {Formik, Form} from 'formik';
import {LOGIN_FORM} from "../../validation-schema";
import FloatingInput from "../../components/forms/floating-input";
import {LOGIN_IMG} from "../../constant/cdnAssetPath";
import FormGroup from "../../components/forms/form-group";
import Button from "../../components/Button";
import {Link} from "react-router-dom";
import Checkbox from "../../components/forms/Checkbox";

const INITIAL_VALUES = {
    email: '',
    password: ''
};

const Login = () => {
    const handleSubmit = (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    }

    return (
        <section>
            <header>
                <nav className={`navbar mb-md-5 mb-2`}>
                    <div className={"container"}>
                        <Link className={`navbar-brand`}>
                            <h4>Prashant</h4>
                        </Link>
                    </div>
                </nav>
            </header>
            <div className={`w-100 ${s.loginSection}`}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-md-6 mb-md-0 mb-3`}>
                            <img src={LOGIN_IMG} alt={"Image"}/>
                        </div>
                        <div className={`col-md-6`}>
                            <div className={`row justify-content-center ${s.formContainer}`}>
                                <div className={`col-xl-8 col-lg-9 col-md-10`}>
                                    <h4>Welcome back!</h4>
                                    <p className={"mb-4"}>
                                        Enter your email address and password to access panel
                                    </p>
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
                                              handleChange,
                                              handleBlur
                                          }, isSubmitting) => (
                                            <Form>
                                                <FloatingInput
                                                    id={"email"}
                                                    label={"Email Address"}
                                                    type={"email"}
                                                    handleChange={handleChange}
                                                    handleBlur={handleBlur}
                                                    touched={touched}
                                                    errors={errors}
                                                    isRequired={true}
                                                    autofocus
                                                />

                                                <FloatingInput
                                                    id={"password"}
                                                    label={"Password"}
                                                    type={"password"}
                                                    handleChange={handleChange}
                                                    handleBlur={handleBlur}
                                                    touched={touched}
                                                    errors={errors}
                                                    isRequired={true}
                                                />

                                                <FormGroup
                                                    classes={`d-flex justify-content-between ${s.forgotPassword}`}>
                                                    <div>
                                                        <Checkbox
                                                            id={"REMEMBER_ME"}
                                                            label={"Remember me"}
                                                            handleChange={handleChange}
                                                            labelClasses={`${s.checkLabel}`}
                                                        />
                                                    </div>
                                                    <div>
                                                        <Link to={"/"}>Forgot Password?</Link>
                                                    </div>
                                                </FormGroup>

                                                <FormGroup>
                                                    <Button
                                                        type={"submit"}
                                                        label={isSubmitting ? "Please wait..." : "Submit"}
                                                        isDisabled={isSubmitting || !isValid}
                                                        classes={`w-100 btn btn-primary`}
                                                    />
                                                </FormGroup>

                                                <p className="font16 text-center text_gray m-0 pt-2">
                                                    <span>Don’t have an account? </span>
                                                    <Link to={"/register"}>
                                                        Register Now
                                                    </Link>
                                                </p>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;