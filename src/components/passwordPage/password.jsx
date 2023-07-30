import "./password.css"
import React from 'react';
import * as yup from "yup";
import axios from "axios";
import {Formik} from 'formik';
import Input from "../registerform/input";
import {useRef} from "react";
import setPassword from "../../img/setPassword.svg"

const Password = () => {
    const password = useRef(null);
    return (
        <Formik
            initialValues={{
                password: "",
                passwordRepeat: ""
            }}
            validationSchema={
                yup.object({
                    password: yup.string().required("لطفا کلمه عبور خود را مشخص كنيد").min(8, "کلمه عبور شما حداقل بايد داراي 8 كاراكتر باشد")
                        .matches(/(?=.*[A-Z])/, "کلمه عبور بايد داراي حداقل يك حرف بزرگ باشد"),
                    passwordRepeat: yup.string().required("لطفا کلمه عبور خود را تایید کنید").oneOf([yup.ref("password"), null],
                        "كلمه عبور يكسان نيست")
                })}
            onSubmit={async (values) => {

            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit
              }) => (
                <form onSubmit={handleSubmit} className="setPassword">
                    <div className="container my-lg-5">
                        <div className="row">
                            <div className="col-12 mt-4 text-center title mt-4">پارک علم و فناوری دانشگاه تهران</div>

                            <div className="offset-3 col-6 line my-3">
                            </div>
                            <div className="col-12 text-center">
                                تعيين رمز عبور
                            </div>
                            <Input classname="col-sm-12 col-md-5" id="password" ref={password} onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password} is_disable={false} is_editing={false}
                                   text="كلمه عبور"
                                   condition={touched.password && errors.password} getError={errors.password}
                            />
                            <Input classname="col-sm-12 col-md-5 offset-md-2" id="passwordRepeat"
                                   onChange={handleChange} onBlur={handleBlur}
                                   value={values.passwordRepeat} is_disable={false} is_editing={false}
                                   text="تكرار كلمه عبور"
                                   condition={touched.passwordRepeat && errors.passwordRepeat}
                                   getError={errors.passwordRepeat}
                            />
                            <div className="col-6 offset-3 pb-4">
                                <button className="blueButton">
                                    بازگشت
                                </button>
                                <button type="submit" className="grayButton">
                                    تایید ثبت نام
                                </button>
                            </div>
                            <div className="col-12 text-center">
                                <img src={setPassword}/>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Formik>)
};

export default Password;