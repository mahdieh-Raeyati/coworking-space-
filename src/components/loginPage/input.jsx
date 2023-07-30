import React from 'react';
import {useState} from "react";

const Input = ({id, icon, placeholder, type ,set}) => {
    const [active, setActive] = useState(false)
    return (
        <div className="inputContainer mb-3">
            <label htmlFor={id} className={active?"active":"inactive"}>
                        <span className="svgContainer">
                             {icon}
                        </span>
                <input id={id} placeholder={placeholder} type={type} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange}/>


            </label>

        </div>
    );

    function handleFocus() {
        setActive(true)
    }

    function handleBlur(e) {

        if (e.target.value === "")
            setActive(false);
        else
            setActive(true);
    }
    function handleChange(e){
        set(e.target.id ,e.target.value)
    }

};

export default Input;