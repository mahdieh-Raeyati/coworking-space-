import React, {useState} from 'react';
import "./dropdown.css"
import DownIcon from "../../img/dropdown.svg"
import {useEffect} from "react";


const Dropdown = ({options,id,d_title,changeType,type}) => {

    const [isActive, setIsActive] = useState(false);
    const items = [];
    options.forEach((f, i) => {
        items.push(
            <textarea  key={i} id={id}  onClick={() => {
                choose(f)
            }}  value={f} className="dropdownItem" onChange={dropdownTitleClicked}>

            </textarea>
        )
    })

    return (

            <div className="book-dropdown d-block col-12 col-sm-6  offset-sm-3 col-md-4 offset-md-1">
                <label htmlFor={id}>{d_title}</label>
                <div
                    className={!isActive ? 'dropdownTitle position-relative default' : 'dropdownTitle position-relative completing'
                    }
                    onClick={dropdownTitleClicked}>

                    {type}
                    <img src={DownIcon} className={isActive ? 'position-absolute rotation' : 'position-absolute'}/>
                    <div
                        className={isActive ? 'dropdownMenu position-absolute d-block' : 'dropdownMenu position-absolute d-none'}>
                        <div className="x">
                            {items}
                        </div>
                    </div>
                </div>
            </div>


    );

    function dropdownTitleClicked() {
        setIsActive(!isActive)
    }

    function choose(val) {
        changeType(val)
        dropdownTitleClicked();
    }
};

export default Dropdown;
