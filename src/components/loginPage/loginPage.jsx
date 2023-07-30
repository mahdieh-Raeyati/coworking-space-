import React, {useEffect, useState} from 'react';
import "./loginPage.css"
import Logo from "../../img/user-square.svg"
import User from "../../img/user.svg"
import Key from "../../img/key.svg"
import Input from "./input"
import {Link} from "react-router-dom"
import LoginLoading from "../../loading/loginLoadjng";
import axios from "axios";


const LoginPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isValid, setIsValid] = useState(true);
    const [data, setData] = useState({username: "", password: ""})

    useEffect(() => {
        setIsLoading(false);
    }, [])

    return (
        <form onSubmit={handleSubmit} className="loginContainer">

            <div className="login row">

                {isLoading ? (<LoginLoading/>) :

                    <>
                        <div className={isValid ? "show-error col-12 invisible" : "show-error col-12 visible"}>
                            شناسه کاربری یا کلمه عبور صحیح نمی باشد.
                        </div>


                        <div className="col-10 title my-4">
                            پارک علم و فناوری دانشگاه تهران
                        </div>


                        <div className="col-8 line">

                        </div>


                        <div className="col-10text-center logo my-3">
                            <img src={Logo}/>
                        </div>


                        <Input icon={<img src={User}/>} id="username" placeholder="شناسه کاربری" type="text" set={set}/>
                        <Input icon={<img src={Key}/>} id="password" placeholder="کلمه عبور" type="password" set={set}/>


                        <div className="col-8 line mb-4">

                        </div>

                        <button
                            className={(data.username !== "" && data.password !== "") ? "col-10  mybtn mybtnActive" : "col-10  mybtn mybtnInactive"}
                            type="submit">ورود
                        </button>

                        <Link to="#" className="forgot-password my-4">فراموشی کلمه عبور</Link>

                        <div className="sign-in">
                            حساب کاربری ندارید ؟ از
                            <Link to="/signIn"> اینجا </Link>
                            ثبت نام کنید.
                        </div>
                    </>
                }

            </div>
        </form>
    );

    function handleSubmit(e) {
        e.preventDefault()
        // if (){   //valid username and password
        //    setIsValid(true)
        // }
        // else {
        //     setIsValid(false)
        // }

    }

    function set(type, Data) {

        let copy = {...data}

        if (type === "username")
            copy.username = Data;
        else
            copy.password = Data;

        setData(copy);
    }

};

export default LoginPage;