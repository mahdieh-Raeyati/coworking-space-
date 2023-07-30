import React, {useEffect, useState} from 'react';

const Textarea = ({checked, id, value, text, onChange, onBlur, getError, condition, is_disable, is_editing}) => {
    const [status, setStatus] = useState("default")

    useEffect(() => {

        if (value === "")
            setStatus("default")
        else if (is_editing) {
            setStatus("inactive")
        } else {
            setStatus("default")
        }

    }, [is_editing])

    return (
        <div className={checked ? "d-none" : "col-12 d-block"}>
            <label htmlFor={id} className="w-100">{text}</label>

            <textarea id={id}
                      disabled={is_disable}
                      className={
                          status === "default" ? "w-100 default txtArea" :
                              status === "active" ? "w-100 completing txtArea" :
                                  (status === "inactive" && condition) ? "w-100 invalid txtArea" :
                                      (status === "inactive" && !condition) ? "w-100 valid txtArea" :
                                          "w-100 invalid txtArea"
                      }
                      name={id} value={value}
                      onChange={onChange}

                      onBlur={e => {
                          onBlur(e)
                          changeStatus("inactive")
                      }}
                      onFocus={() => {
                          changeStatus("active")
                      }}> </textarea>


            <div className={condition ? "visible mb-3" : "invisible mb-3"}>{condition ? getError : "test"}</div>
        </div>
    );

    function changeStatus(status) {
        setStatus(status)
    }

};

export default Textarea;
