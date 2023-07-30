import React from 'react';
import "./registerForm.css"
import DropDown from "./dropdown";
import {useState} from "react";
import Conditions from "./conditions"
import Input from "./input";
import Textarea from "./textarea";
import UserRegisterFormLoading from "../../loading/userRegisterFormLoading";
import {useEffect} from "react";
import * as yup from "yup"
import {Formik} from 'formik';
import Radiobtn from "./radiobtn";
import axios from "axios";


const UserRegisterForm = ({isEditPage}) => {
        const [checked, setChecked] = useState(false);
        const [isLoading, setIsLoading] = useState(true);
        const [isEditing, setIsEditing] = useState(false);
        const [initialization, setInitialization] = useState({
            name: "نام فرضی",
            last_name: 'نام خانوادگی فرضی',
            father_name: "نام پدر فرضی",
            national_code: "0023598786",
            job: "شغل فرضی",
            education: "تحصیلات فرضی",
            major: "رشته تحصیلی فرضی",
            university: "دانشگاه فرضی",
            mobile_phone: "09199947786",
            phone: "02176831497",
            postal_code: "00521463",
            email: "exmple@gmail.com",
            graduated: 'Yes',
            subject: "فرضی",
            description: "فرضی",
            introduction: "فرضی",
            technology_field: "حوزه فرضی",
            commitment: 'done'
        });

        useEffect(() => {

            setTimeout(function(){
                setIsLoading(false);
            }, 0);

            //back-end
            // if (isEditPage) {
            //     async function getInformation() {
            //
            //         const result = await axios.get("https://reqres.in/api/users")
            //         setInitialization(result.data.data[0]);
            //     }
            //     getInformation();
            // }

        }, [])


        return (

            isLoading ? (<UserRegisterFormLoading/>) : (
                <Formik
                    enableReinitialize={true}
                    initialValues={
                        isEditPage ? {
                                name: initialization["name"],
                                last_name: initialization["last_name"],
                                father_name: initialization["father_name"],
                                national_code: initialization["national_code"],
                                job: initialization["job"],
                                education: initialization["education"],
                                major: initialization["major"],
                                university: initialization["university"],
                                mobile_phone: initialization["mobile_phone"],
                                phone: initialization["phone"],
                                postal_code: initialization["postal_code"],
                                email: initialization["email"],
                                graduated: initialization["graduated"],
                                subject: initialization["subject"],
                                description: initialization["description"],
                                introduction: initialization["introduction"],
                                technology_field: initialization["technology_field"],
                                commitment: initialization["commitment"],
                            }
                            :
                            {
                                name: "",
                                last_name: '',
                                father_name: "",
                                national_code: "",
                                job: "",
                                education: "",
                                major: "",
                                university: "",
                                mobile_phone: "",
                                phone: "",
                                postal_code: "",
                                email: "",
                                graduated: '',
                                subject: "",
                                description: "",
                                introduction: "",
                                technology_field: '',
                                commitment: ''
                            }

                    }
                    validationSchema={
                        yup.object({
                            name: yup.string().required("پر کردن این فیلد اجباری است."),
                            last_name: yup.string().required("پر کردن این فیلد اجباری است."),
                            father_name: yup.string().required("پر کردن این فیلد اجباری است."),
                            national_code: yup.string().length(10, "نامعتبر").required("پر کردن این فیلد اجباری است."),
                            job: yup.string().required("پر کردن این فیلد اجباری است."),
                            education: yup.string().required("پر کردن این فیلد اجباری است."),
                            major: yup.string().required("پر کردن این فیلد اجباری است."),
                            university: yup.string().required("پر کردن این فیلد اجباری است."),
                            mobile_phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'شماره تلفن نامعتبر است').length(11, "نامعتبر").required("پر کردن این فیلد اجباری است."),
                            phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'شماره تلفن نامعتبر است').min(8, "نامعتبر").required("پر کردن این فیلد اجباری است."),
                            postal_code: yup.string().required("پر کردن این فیلد اجباری است."),
                            email: yup.string().email("فرمت ایمیل صحیح نمی باشد").required("پر کردن این فیلد اجباری است."),
                            graduated: yup.string().required("لطفا وضعیت تحصیلی خود را مشخص کنید"),
                            subject: yup.string().required("پر کردن این فیلد اجباری است."),
                            description: yup.string().required("پر کردن این فیلد اجباری است."),
                            introduction: yup.string().required("پر کردن این فیلد اجباری است."),
                            technology_field: yup.string().required("لطفا یک مورد را انتخاب کنید").matches(/^(?!انتخاب کنید$).*$/, "لطفا یک مورد را اتخاب کنید"),
                            commitment: yup.string().required("لطفا پس از مطالعه تعهد نامه ، موافقت خود را اعلام نمایید")
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
                            <div className="container my-lg-5">
                                <div className="row">
                                    <div className="col-12 mt-4 text-center formTitle">پارک علم و فناوری دانشگاه تهران</div>

                                    <div className="offset-3 col-6 line mt-4 mb-3">

                                    </div>

                                    <label className="col-12 text-center mb-5">پر کردن همه موارد الزامی است</label>

                                    <Input classname="col-sm-12 col-md-5" id="name" text="نام" onChange={handleChange}
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


                                    <Input classname="col-sm-12 col-md-5" id="father_name" text="نام پدر"
                                           onChange={handleChange} onBlur={handleBlur}
                                           value={values.father_name} getError={errors.father_name}
                                           condition={touched.father_name && errors.father_name}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>


                                    <Input classname="col-sm-12 col-md-5 offset-md-2" id="national_code" text="کد ملی"
                                           onChange={handleChange} onBlur={handleBlur}
                                           value={values.national_code} getError={errors.national_code}
                                           condition={touched.national_code && errors.national_code}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>


                                    <Input classname="col-sm-12 col-md-5" id="job" text="شغل"
                                           onChange={handleChange} onBlur={handleBlur}
                                           value={values.job} getError={errors.job}
                                           condition={touched.job && errors.job}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>

                                    <Input classname="col-sm-12 col-md-5 offset-md-2" id="education"
                                           text="آخرین مدرک تحصیلی"
                                           onChange={handleChange} onBlur={handleBlur}
                                           value={values.education} getError={errors.education}
                                           condition={touched.education && errors.education}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>

                                    <Input classname="col-sm-12 col-md-5" id="major" text="رشته تحصیلی"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.major} getError={errors.major}
                                           condition={touched.major && errors.major}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>

                                    <Input classname="col-sm-12 col-md-5 offset-md-2" id="university"
                                           text="آخرین دانشگاه محل تحصیل"
                                           onChange={handleChange} onBlur={handleBlur}
                                           value={values.university} getError={errors.university}
                                           condition={touched.university && errors.university}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>

                                    <Input classname="col-sm-12 col-md-5" id="mobile_phone" text="تلفن همراه"
                                           onChange={handleChange} onBlur={handleBlur}
                                           value={values.mobile_phone} getError={errors.mobile_phone}
                                           condition={touched.mobile_phone && errors.mobile_phone}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>

                                    <Input classname="col-sm-12 col-md-5 offset-md-2" id="phone" text="تلفن ثابت"
                                           onChange={handleChange} onBlur={handleBlur}
                                           value={values.phone} getError={errors.phone}
                                           condition={touched.phone && errors.phone}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>

                                    <Input classname="col-sm-12 col-md-5" id="postal_code" text="کد پستی"
                                           onChange={handleChange} onBlur={handleBlur}
                                           value={values.postal_code} getError={errors.postal_code}
                                           condition={touched.postal_code && errors.postal_code}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>

                                    <Input classname="col-sm-12 col-md-5 offset-md-2" id="email" text="پست الکترونیک"
                                           onChange={handleChange} onBlur={handleBlur}
                                           value={values.email} getError={errors.email}
                                           condition={touched.email && errors.email}
                                           is_disable={isEditPage && !isEditing}
                                           is_editing={isEditing}/>

                                    <div className={checked ? "d-none" : "col-12 d-block graduated"}>
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


                                    <Textarea checked={checked} id="subject" text="موضوع فعالیت (حداکثر10 کلمه)"
                                              value={values.subject} onChange={handleChange}
                                              onBlur={handleBlur} getError={errors.subject}
                                              condition={touched.subject && errors.subject}
                                              is_disable={isEditPage && !isEditing}
                                              is_editing={isEditing}/>

                                    <Textarea checked={checked} id="description" text="شرح فعالیت (حداکثر250 کلمه)"
                                              value={values.description} onChange={handleChange}
                                              onBlur={handleBlur} getError={errors.description}
                                              condition={touched.description && errors.description}
                                              is_disable={isEditPage && !isEditing}
                                              is_editing={isEditing}/>

                                    <Textarea checked={checked} id="introduction" text="نحوه آشنایی"
                                              value={values.introduction} onChange={handleChange}
                                              onBlur={handleBlur} getError={errors.introduction}
                                              condition={touched.introduction && errors.introduction}
                                              is_disable={isEditPage && !isEditing}
                                              is_editing={isEditing}/>


                                    <DropDown checked={checked}
                                              condition={touched.technology_field && errors.technology_field}
                                              getError={errors.technology_field} onChange={handleChange}
                                              value={values.technology_field} id="technology_field"
                                              is_disable={isEditPage && !isEditing}
                                              is_editing={isEditing} onBlur={handleBlur}/>


                                    {checked ? <Conditions onExit={conditionsExit}/> : ""}

                                    <div
                                        className={isEditPage ? "d-none col-12 my-5 undertaking" : "col-12 my-5 undertaking"}>
                                        <label htmlFor="commitment" className="commitment">
                                            <input type="radio" className="me-1" id="commitment" name="commitment"
                                                   value="done"
                                                   onChange={handleChange}/>

                                            مفاد
                                            <span onClick={conditionsClicked}> تعهدنامه </span>
                                            پارک علم و فناوری دانشگاه تهران
                                            جهت استفاده از فضای کار اشتراکی را خوانده و با آن موافقم.
                                        </label>
                                        <div
                                            className={(touched.commitment && errors.commitment) ? "visible mb-3 mt-0" : "invisible mb-3 mt-0"}>
                                            {(touched.commitment && errors.commitment) ? errors.commitment : "text"}
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
                (!errors.father_name) && (values.father_name) &&
                (!errors.national_code) && (values.national_code) &&
                (!errors.job) && (values.job) &&
                (!errors.education) && (values.education) &&
                (!errors.university) && (values.university) &&
                (!errors.mobile_phone) && (values.mobile_phone) &&
                (!errors.phone) && (values.phone) &&
                (!errors.postal_code) && (values.postal_code) &&
                (!errors.email) && (values.email) &&
                (!errors.graduated) && (values.graduated) &&
                (!errors.subject) && (values.subject) &&
                (!errors.description) && (values.description) &&
                (!errors.introduction) && (values.introduction) &&
                (!errors.technology_field) && (values.technology_field) &&
                (!errors.commitment) && (values.commitment) &&
                (!errors.major) && (values.major);
        }

        function conditionsClicked() {
            setChecked(true);
        }

        function conditionsExit() {
            setChecked(false);
        }
    }
;

export default UserRegisterForm;