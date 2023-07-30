import React, {useEffect, useState} from 'react';
import "./navBar.css"
import Logo from "../../img/logo.jpg"
import Bars from "../../img/menu.svg"
import Profile  from "../../img/profile-circle.svg"
import Exit from "../../img/close-square.svg"

import {Link} from "react-router-dom"
import {data} from "./sidebarData"

const NavBar = () => {
    const [sideBar, setSideBar] = useState(false)
    const showSideBar = () => {
        setSideBar(!sideBar)
    }

    return (
        <>
        <div className={sideBar?"dark":""}>

        </div>


        <div className="navBar w-100 position-relative">
            <Link to="#" className='menu-bars'>
                <img src={Bars} onClick={showSideBar}/>
            </Link>

            <div className="navbar_brand">
                <img src={Logo}/>
            </div>

            <nav className={sideBar ? "navBarMenu active" : "navBarMenu"}>

                <img src={Exit} className="exitIcon" onClick={showSideBar}/>

                <div className="sidebarImg my-5 row ">

                    <img src={Profile} className="col-12"/>

                    <div className="col-12 info">
                            مهدیه رعیتی
                    </div>

                </div>
                <ul className={"nav-menu-items"} onClick={showSideBar}>
                    {
                        data.map((item, index) => {
                            return (
                                <li key={index} className={"sidebarItems"}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            {/*<ul className="navBarItems">*/}
            {/*    <li>*/}
            {/*        <a href="#"> خانه</a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <a href="#">رزرو</a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <a href=""> سوالات متداول</a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <a href="">تماس با ما</a>*/}
            {/*    </li>*/}
            {/*</ul>*/}
            {/*<NavbarMenu/>*/}
        </div>
        </>
    );
};

export default NavBar;