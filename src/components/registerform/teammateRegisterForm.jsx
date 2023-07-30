import React from 'react';
import "./registerForm.css"
import {useState} from "react";
import Input from "./input";
import TeammateRegisterFormLoading from "../../loading/TeammateRegisterFormLoading";
import {useEffect} from "react";
import * as yup from "yup"
import {Formik} from 'formik';
import Radiobtn from "./radiobtn";
import axios from "axios";


const UserRegisterForm = ({isEditPage}) => {

        const [isLoading, setIsLoading] = useState(true);
        const [isEditing, setIsEditing] = useState(false);
        const [initialization, setInitialization] = useState({
            name: "نام فرضی",
            last_name: 'نام خانوادگی فرضی',
            national_code: "0023598786",
            job: "شغل فرضی",
            education: "تحصیلات فرضی",
            major: "رشته تحصیلی فرضی",
            university: "دانشگاه فرضی",
            graduated: 'Yes',
        });

        useEffect(() => {

            setTimeout(function(){
                setIsLoading(false);
            }, 0);


            //back-end
            // if (isEditPage) {
            //     async function getInformation() {
            //
            //         const result = await axios.get("https://reqres.in/api/users/")
            //         setInitialization(result.data.data[0]);
            //     }
            //     getInformation();
            // }

        }, [])


        return (

            isLoading ? (<TeammateRegisterFormLoading/>) : (
                <Formik
                    enableReinitialize={true}
                    initialValues={
                        isEditPage ? {
                                name: initialization["name"],
                                last_name: initialization["last_name"],
                                national_code: initialization["national_code"],
                                job: initialization["job"],
                                education: initialization["education"],
                                major: initialization["major"],
                                university: initialization["university"],
                                graduated: initialization["graduated"],
                            }
                            :
                            {
                                name: "",
                                last_name: '',
                                national_code: "",
                                job: "",
                                education: "",
                                major: "",
                                university: "",
                                graduated: '',
                            }

                    }
                    validationSchema={
                        yup.object({
                            name: yup.string().required("پر کردن این فیلد اجباری است."),
                            last_name: yup.string().required("پر کردن این فیلد اجباری است."),
                            national_code: yup.string().length(10, "نامعتبر").required("پر کردن این فیلد اجباری است."),
                            job: yup.string().required("پر کردن این فیلد اجباری است."),
                            education: yup.string().required("پر کردن این فیلد اجباری است."),
                            major: yup.string().required("پر کردن این فیلد اجباری است."),
                            university: yup.string().required("پر کردن این فیلد اجباری است."),
                            graduated: yup.string().required("لطفا وضعیت تحصیلی خود را مشخص کنید"),
                        })}
                    onSubmit={async (values) => {

                        if (isEditing) {

                            const response = await axios.post('https://reqres.in/api/users', values)
                            setIsEditing(false)
                            console.log(values)
                        } else if (isEditPage) {

                            setIsEditing(true);
                        } else {

                            const response = await axios.post('https://reqres.in/api/users', values)
                            console.log(values)
                        }

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

                        <form onSubmit={handleSubmit} className="registerForm">
                            <div className="container my-5">
                                <div className="row">

                                    <div className="col-12 mt-4 text-center">
                                        نام گروه فرضي
                                    </div>

                                    <div className="offset-5 col-2 line mb-4 mt-2">

                                    </div>
                                </div>

                                <div className="row">
                                    <Input classname="col-sm-12 col-md-5 " id="name" text="نام" onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.name} getError={errors.name}
                                           condition={touched.name && errors.name}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>

                                    <Input classname="col-sm-12 col-md-5 offset-md-2" id="last_name" text="نام خانوادگی"
                                           onChange={handleChange} onBlur={handleBlur}
                                           value={values.last_name} getError={errors.last_name}
                                           condition={touched.last_name && errors.last_name}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>


                                    <Input classname="col-sm-12 col-md-5" id="national_code" text="کد ملی"
                                           onChange={handleChange} onBlur={handleBlur}
                                           value={values.national_code} getError={errors.national_code}
                                           condition={touched.national_code && errors.national_code}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>


                                    <Input classname="col-sm-12 col-md-5 offset-md-2" id="job" text="شغل"
                                           onChange={handleChange} onBlur={handleBlur}
                                           value={values.job} getError={errors.job}
                                           condition={touched.job && errors.job}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>

                                    <Input classname="col-sm-12 col-md-5" id="education"
                                           text="آخرین مدرک تحصیلی"
                                           onChange={handleChange} onBlur={handleBlur}
                                           value={values.education} getError={errors.education}
                                           condition={touched.education && errors.education}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>

                                    <Input classname="col-sm-12 col-md-5 offset-md-2" id="major" text="رشته تحصیلی"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.major} getError={errors.major}
                                           condition={touched.major && errors.major}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>

                                    <Input classname="col-sm-12 col-md-5" id="university"
                                           text="آخرین دانشگاه محل تحصیل"
                                           onChange={handleChange} onBlur={handleBlur}
                                           value={values.university} getError={errors.university}
                                           condition={touched.university && errors.university}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>


                                    <div className="col-sm-12 col-md-5 offset-md-2 mt-md-4 graduated">
                                        <Radiobtn id="graduated_No" value="No" name="graduated"
                                                  handleChange={handleChange} labelText="دانشجو"
                                                  is_disable={isEditPage && !isEditing}
                                                  defaultValue={values.graduated === "No"}/>

                                        <Radiobtn id="graduated_Yes" value="Yes" name="graduated"
                                                  handleChange={handleChange} labelText="فارغ التحصیل"
                                                  is_disable={isEditPage && !isEditing}
                                                  defaultValue={values.graduated === "Yes"}/>

                                        <div
                                            className={(touched.graduated && errors.graduated) ? "visible mb-3" : "invisible mb-3"}>
                                            {(touched.graduated && errors.graduated) ? errors.graduated : "text"}
                                        </div>
                                    </div>


                                    <button className={
                                        isComplete(errors, values) ? "col-8 offset-2 col-md-5  mb-5 mt-3 registerBtn  validBtn" :
                                            "col-8 offset-2 col-md-5  mb-5 mt-3 registerBtn"}
                                            type="submit">
                                        {isEditing ? "ثبت" : isEditPage ? "ویرایش اطلاعات" : "ثبت نام"}
                                    </button>

                                </div>
                            </div>
                        </form>
                    )}
                </Formik>)
        )

        function isComplete(errors, values) {
            return (
                    !errors.name) && (values.name) &&
                (!errors.last_name) && (values.last_name) &&
                (!errors.national_code) && (values.national_code) &&
                (!errors.job) && (values.job) &&
                (!errors.education) && (values.education) &&
                (!errors.university) && (values.university) &&
                (!errors.graduated) && (values.graduated) &&
                (!errors.major) && (values.major);
        }

    }
;

export default UserRegisterForm;