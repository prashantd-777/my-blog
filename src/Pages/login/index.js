import s from "./login.module.scss";
import {Formik, Form} from 'formik';
import {LOGIN_FORM} from "../../validation-schema";
import FloatingInput from "../../components/forms/floating-input";
import {LOGIN_IMG} from "../../constant/cdnAssetPath";
import FormGroup from "../../components/forms/form-group";
import {Link} from "react-router-dom";
import Checkbox from "../../components/forms/checkbox";
import FloatingPassword from "../../components/forms/floating-password";
import ThrottleButton from "../../components/ThrottleButton";
import throttle from "../../utils/common/throttle";
import {a__loginUser} from "../../redux/actions";
import {connect} from "react-redux";

const INITIAL_VALUES = {
    email: '',
    password: ''
};

const Login = ({
                   d__loginUser
               }) => {
    const handleSubmit = (values, {setSubmitting}) => {
        setSubmitting(true);
        setTimeout(() => {
            const { rememberMe, ...payload } = values;
            console.log("payload is:", payload);
            d__loginUser({...payload})
            setSubmitting(false);
        }, 2000);
    }

    return (
        <section className={`${s.sectionContainer}`}>
            <header>
                <nav className={`navbar mb-md-5 mb-2`}>
                    <div className={"container"}>
                        <Link to={"/"} className={`navbar-brand`}>
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
                                        onSubmit={throttle(handleSubmit, 2000)}
                                        validationSchema={LOGIN_FORM}
                                    >
                                        {({
                                              values,
                                              touched,
                                              errors,
                                              isValid,
                                              handleChange,
                                              handleBlur,
                                              isSubmitting
                                          }) =>  (
                                            <Form>
                                                <FloatingInput
                                                    id={"email"}
                                                    label={"Email Address"}
                                                    type={"email"}
                                                    value={values?.email || ""}
                                                    handleChange={handleChange}
                                                    handleBlur={handleBlur}
                                                    touched={touched}
                                                    errors={errors}
                                                    isRequired={true}
                                                    autofocus
                                                />

                                                <FloatingPassword
                                                    id={"password"}
                                                    label={"Password"}
                                                    type={"password"}
                                                    value={values?.password || ""}
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
                                                            id={"rememberMe"}
                                                            label={"Remember me"}
                                                            handleChange={handleChange}
                                                            labelClasses={`${s.checkLabel}`}
                                                            value={values.rememberMe || false}
                                                        />
                                                    </div>
                                                    <div>
                                                        <Link to={"/"}>Forgot Password?</Link>
                                                    </div>
                                                </FormGroup>

                                                <FormGroup>
                                                    <ThrottleButton
                                                        type={"submit"}
                                                        label={isSubmitting ? "Please wait..." : "Submit"}
                                                        isDisabled={isSubmitting || !isValid}
                                                        classes={`w-100 btn btn-primary`}
                                                        isLoading={isSubmitting}
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

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        d__loginUser: data => {
            dispatch(a__loginUser.request(data));
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);