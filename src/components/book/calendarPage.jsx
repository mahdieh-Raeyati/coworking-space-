import React, {useEffect, useState} from 'react';
import "./calendarPage.css"
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";
import Calendar from "./calendar";
import DropDown from "./dropdown";
import LeftIcon from "../../img/left.svg"
import {Link} from "react-router-dom";
import Calendar_mini from "./calendar_mini"

const CalendarPage = () => {
    const options = ["انفرادی", "گروه1", "گروه2", "گروه2", "گروه2"]
    const [type,setType]=useState("انتخاب کنید");
    const changeType=(item)=>{
        setType(item)
    }
    useEffect(() => {
        console.log(type)

        }, [type]);

        return (
        <div className="calendarPage">
            <NavBar/>

            <div className="container calendarPage-container my-sm-5 pb-5">
                <div className="row mt-5 mt-sm-0">
                    <div className="col-12 text-center calendarPage-title mt-0 mt-sm-4">
                        رزرو
                    </div>
                    <DropDown options={options} id="type" d_title="نوع رزرو" changeType={changeType} type={type}/>

                    <Calendar/>
                    {/*<Calendar_mini/>*/}

                    <div className="col-12 nextButton text-end">
                        <Link to={"#"}>
                            تایید و ادامه رزرو
                            <img src={LeftIcon}/>
                        </Link>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );

};

export default CalendarPage;