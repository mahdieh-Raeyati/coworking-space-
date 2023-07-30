import React, {useEffect, useState} from 'react';
import "./dropDown.css"
import DownIcon from "../../../img/down.svg"
import TrashIcon from "../../../img/trash.svg"
import EditIcon from "../../../img/edit-2.svg"
import AddIcon from "../../../img/add.svg"
import axios from "axios";
import {Link} from "react-router-dom";
import * as events from "events";

const DropDown = ({data,removeMember ,removeGroup,changeName}) => {
    const [clicked, setClicked] = useState(false);

    const changeClicked = () => {
        setClicked(!clicked);

    }

    return (
        <>
            <div className={clicked ? "groupDropDown col-12 col-sm-10 offset-sm-1 col-xl-8 offset-xl-2 position-relative openMenu" :
                "groupDropDown col-12 col-sm-10 offset-sm-1 col-xl-8 offset-xl-2  position-relative"}>

            <input type="tex" className="dropDownContent" value={data.groupName} placeholder="نام گروه را وارد کنید"
                   onChange={(e)=>{changeName(data.id,e)}}/>



                <span className="trashIcon">
                <img src={TrashIcon} onClick={()=>{removeGroup(data.id)}}/>
            </span>

                <span className={clicked ? "downIcon rotation" : "downIcon"} onClick={changeClicked}>

                <img src={DownIcon}/>
            </span>

            </div>
            <div className={clicked ? "open col-12 col-sm-10 offset-sm-1 col-xl-8 offset-xl-2 submenu" : "close"}>
                <ul className="mb-0">
                    {data.group_members.map((item) => {
                        return (
                            <li key={item.national_code} className="position-relative">
                                <span>
                                     {item.name}{" "}{item.last_name}
                                </span>
                                <img src={TrashIcon} id="liTrashIcon" onClick={()=>{removeMember(data.id,item.national_code)}}/>

                                <Link to="#">
                                    <img src={EditIcon} id="liEditIcon"/>
                                </Link>

                            </li>
                        )
                    })}
                    <li>
                        <Link to="#">
                            <img src={AddIcon}/>
                            افزودن عضو جدید
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
        ;
};

export default DropDown;