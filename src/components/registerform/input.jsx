import React, {useEffect} from 'react';
import {useState} from "react";

const Input = ({classname, id, value, text, onChange, onBlur, getError, condition, is_disable, is_editing}) => {

    const [status, setStatus] = useState("default")

    useEffect(() => {

        if (value === "")
            setStatus("default")
        else if (is_editing){
            setStatus("inactive")
        }else {
            setStatus("default")
        }

    }, [is_editing])

    return (
        <div className={classname}>
            <label className="w-100" htmlFor={id}>{text}</label>

            <input
                id={id}
                disabled={is_disable}
                className={
                    status === "default" ? "w-100 default" :
                        status === "active" ? "w-100 completing" :
                            (status === "inactive" && condition) ? "w-100 invalid" :
                                (status === "inactive" && !condition) ? "w-100 valid" : ""
                }
                name={id} value={value}
                onChange={onChange}

                onBlur={e => {
                    onBlur(e)
                    changeStatus("inactive")
                }}
                onFocus={() => {
                    changeStatus("active")
                }}/>

            <div className={condition ? "visible mb-3" : "invisible mb-3"}>{condition ? getError : "test"}</div>
        </div>
    );

    function changeStatus(status) {
        setStatus(status)
    }
};

export default Input;
