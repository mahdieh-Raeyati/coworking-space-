import React from 'react';
import "./footer.css"
import Call from "../../img/call.svg"
import Sms from "../../img/sms.svg"
import Location from "../../img/location.svg"
import {AiOutlineCopyrightCircle} from "react-icons/ai"
import {Link} from "react-router-dom";
import {icons} from "./footerIcons";
import {data} from "./data";


const Footer = () => {
    return (
        <footer>
            <div className="row footer py-4">
                <div className="col-12 text-center col-sm-6  text-sm-start col-lg-5 offset-lg-0  ps-lg-5">

                    <div className="info row">

                        <div className="text col-12 text-center text-sm-start">
                            ما را در شبکه های اجتماعی دنبال کنید :
                        </div>


                        <div className="col-12 text-center text-sm-start my-4 ">
                            {icons.map((item,index)=>{
                                return(
                                    <a key={index} href={item.path}>
                                        {item.icon}
                                    </a>
                                )
                            })}
                        </div>

                        <div className="col-12 text-center text-sm-start">
                            <img src={Call}/>
                            <span>
                               02188220700-4
                           </span>
                        </div>

                        <div className="col-12 text-center text-sm-start">
                            <img src={Sms}/>
                            <span>
                               info@utstpark.ir
                           </span>
                        </div>

                        <div className="col-10 offset-1 mt-2 col-sm-12 offset-sm-0">
                            <img src={Location}/>
                            <span className="d-block d-sm-inline">
                               خیابان کارگر شمالی، خیابان شانزدهم ،
                               پردیس شمالی دانشگاه تهران، پارک علم و فناوری دانشگاه تهران
                           </span>
                        </div>
                    </div>


                </div>
                <div className="col-12 col-sm-5 offset-sm-1 col-lg-4 offset-lg-3 my-4 my-sm-0">
                    <div className="quickAccess row">

                        <div className="mb-4 col-12 text-center text-sm-start">
                            دسترسی سریع
                        </div>

                        {data.map((item,index)=>{
                            return(
                                <div key={index} className="col-12 text-center text-sm-start">
                                    <Link to={item.path}>
                                        <span>
                                            {item.title}
                                        </span>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className="col-12 text-center mt-sm-5 mt-md-0 p-0 copyRight">
                   <AiOutlineCopyrightCircle/>
                    <span>
                         تمامی حقوق این وبسایت متعلق به پارک علم و فناوری دانشگاه تهران می‌باشد.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;