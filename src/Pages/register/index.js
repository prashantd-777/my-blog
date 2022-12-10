import s from "./register.module.scss";
import {Link} from "react-router-dom";
import {REGISTER_IMG} from "../../constant/cdnAssetPath";
import {Form, Formik} from "formik";
import {REGISTER_FORM} from "../../validation-schema";
import FloatingInput from "../../components/forms/floating-input";
import FormGroup from "../../components/forms/form-group";
import FloatingPassword from "../../components/forms/floating-password";
import {a__registerUser} from "../../redux/actions";
import {connect} from "react-redux";
import ThrottleButton from "../../components/ThrottleButton";
import throttle from "../../utils/common/throttle";

const INITIAL_VALUES = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const Register = ({
                      d__registerUser
                  }) => {
    const handleSubmit = (values, {setSubmitting}) => {
        setSubmitting(true);
        setTimeout(() => {
            const { confirmPassword, ...payload } = values;
            console.log("payload is:", payload);
            d__registerUser({...payload})
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
            <div className={`w-100 ${s.registerSection}`}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-md-6 mb-md-0 mb-3`}>
                            <img src={REGISTER_IMG} alt={"Image"}/>
                        </div>
                        <div className={`col-md-6`}>
                            <div className={`row justify-content-center ${s.formContainer}`}>
                                <div className={`col-xl-8 col-lg-9 col-md-10`}>
                                    <h4>Create Account</h4>
                                    <p className={"mb-4"}>
                                        Get started with your free account
                                    </p>
                                    <Formik
                                        initialValues={{...INITIAL_VALUES}}
                                        onSubmit={throttle(handleSubmit, 2000)}
                                        validationSchema={REGISTER_FORM}
                                    >
                                        {({
                                              values,
                                              touched,
                                              errors,
                                              isValid,
                                              handleChange,
                                              handleBlur,
                                              isSubmitting
                                          }) => (
                                            <Form>
                                                <FloatingInput
                                                    id={"username"}
                                                    label={"Username"}
                                                    handleChange={handleChange}
                                                    handleBlur={handleBlur}
                                                    touched={touched}
                                                    errors={errors}
                                                    isRequired={true}
                                                />

                                                <FloatingInput
                                                    id={"email"}
                                                    label={"Email Address"}
                                                    type={"email"}
                                                    handleChange={handleChange}
                                                    handleBlur={handleBlur}
                                                    touched={touched}
                                                    errors={errors}
                                                    isRequired={true}
                                                />

                                                <FloatingPassword
                                                    id={"password"}
                                                    label={"Password"}
                                                    type={"password"}
                                                    handleChange={handleChange}
                                                    handleBlur={handleBlur}
                                                    touched={touched}
                                                    errors={errors}
                                                    isRequired={true}
                                                />

                                                <FloatingPassword
                                                    id={"confirmPassword"}
                                                    label={"Confirm Password"}
                                                    type={"password"}
                                                    handleChange={handleChange}
                                                    handleBlur={handleBlur}
                                                    touched={touched}
                                                    errors={errors}
                                                    isRequired={true}
                                                />

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
                                                    <span>Already registered? </span>
                                                    <Link to={"/login"}>
                                                        Login now
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
        d__registerUser: data => {
            dispatch(a__registerUser.request(data));
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);