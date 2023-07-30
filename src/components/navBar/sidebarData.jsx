import React from 'react';
import Profile from  "../../img/profile.svg"
import Group from  "../../img/profile-2user.svg"
import Book from  "../../img/book.svg"
import Calender from  "../../img/newreserve.svg"
import Password from  "../../img/lock.svg"
import Home from  "../../img/home-2.svg"
import Exit from  "../../img/logout.svg"
import Message from  "../../img/message.svg"
import More from  "../../img/question.svg"

export const data=[
    {
        title:"پروفایل من",
        path:"/",
        icon:<img src={Profile} className="nave-icon"/>
    },
    {
        title:"ایجاد و مدیریت گروه",
        path:"/manage_groups",
        icon:<img src={Group} className="nave-icon"/>
    },
    {
        title:"رزرو جدید",
        path:"/reserve",
        icon:<img src={Book} className="nave-icon"/>
    },
    {
        title:"رزرو های من",
        path:"/reserve_history",
        icon:<img src={Calender} className="nave-icon"/>
    },
    {
        title:"تغییر رمزعبور",
        path:"/change_password",
        icon:<img src={Password} className="nave-icon"/>
    },
    {
        title:"خانه",
        path:"/home",
        icon:<img src={Home} className="nave-icon"/>
    },
    {
        title:"سوالات متداول",
        path:"/questions",
        icon:<img src={More} className="nave-icon"/>
    },
    {
        title:"تماس با ما",
        path:"/contact us",
        icon:<img src={Message} className="nave-icon"/>
    },
    {
        title:"خروج از حساب",
        path:"/",
        icon:<img src={Exit} className="nave-icon"/>
    }
]
