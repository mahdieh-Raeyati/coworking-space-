import React, {useState} from 'react';
import "./dropdown.css"
import DownIcon from "../../img/dropdown.svg"
import {useEffect} from "react";


const Dropdown = ({checked, id, condition, getError, onChange, value, is_disable, is_editing,onBlur}) => {

    const [isActive, setIsActive] = useState();
    const [context, setContext] = useState("انتخاب کنید");
    const fields = [
        "مكانيك، الكترونيك، كنترل و مخابرات",
        "فناوري اطلاعات و ارتباطات و نرم افزارهاي كامپيوتري",
        "فناوري زيستي(غذايي، كشاورزي دامي و گياهي، صنعتي محيط زيست، زيست فناوري مولكولي",
        "تجهيزات و مواد پيشرفته نفت، گاز، پالايش و پتروشيمي",
        "فناوري هاي ساختمان، راه سازي، ريلي و دريايي",
        "محصولات شيميايي پيشرفته",
        "علوم كشاورزي و منابع طبيعي",
        "صنايع غذايي و دارويي",
        "علوم زمين",
        "فناوري نانو(محصولات و مواد)",
        "وسايل، ملزومات و تجهيزات پزشكي",
        "انرژي هاي نو و تجديد پذير",
        "اپتيك و فتونيك(مواد، قطعات و سامانه ها",
        "تجهيزات پيشرفته ساخت، توليد آزمايشگاهي",
        "محيط زيست",
        "هوا فضا",
        "موادپيشرفته(پليمرها، سراميك ها، فلزات و كامپوزيت ها)",
        "علوم شناختي(علوم انساني و فناوري هاي نرم)",
        "نقشه برداري و اطلاعات مكاني",
        "ساير"
    ];


    useEffect(() => {
        if (is_disable)
            setContext(value);
    }, [context])

    useEffect(() => {

        if (value === "")
            setIsActive(undefined)
        else if (is_editing) {
            setIsActive(false)
        }else {
            setIsActive(undefined)
        }

    }, [is_editing])

    const items = [];

    fields.forEach((f, i) => {
        items.push(
            <textarea key={i} id={id} onClick={e => {
                choose(f)
                onChange(e)
                onBlur(e)

            }} onChange={onChange} value={f} className="dropdownItem" onBlur={onBlur}>

            </textarea>
        )
    })


    return (
        <div className="technology_field_dropdown ">
            <div className={checked ? "d-none" : "d-block dropDown col-sm-12 col-md-5"}>
                <label htmlFor={id}>حوزه فناوری-یافته</label>
                <div
                    className={
                        isActive === undefined ? 'dropdownTitle position-relative default' :
                            isActive ? 'dropdownTitle position-relative completing' :
                                (!isActive && condition) ? 'dropdownTitle position-relative  invalid' :
                                    (!isActive && !condition) ? 'dropdownTitle position-relative  valid' : ""
                    }
                    onClick={dropdownTitleClicked}>

                    <span className={is_disable ? "disableDropdown" : ""}>
                        {context}
                    </span>

                    <img src={DownIcon} className={isActive ? 'position-absolute rotation' : 'position-absolute'}/>
                    <div
                        className={isActive ? 'dropdownMenu position-absolute d-block' : 'dropdownMenu position-absolute d-none'}>
                        <div className="x">
                            {items}
                        </div>
                    </div>
                </div>
            </div>
            <div className={condition ? "visible mb-3" : "invisible mb-3"}>{condition ? getError : "test"}</div>
        </div>

    );

    function dropdownTitleClicked() {
        if (is_disable) {
            setIsActive(undefined)
        } else if (isActive === undefined)
            setIsActive(true)
        else
            setIsActive(!isActive);
    }

    function choose(val) {
        setContext(val)
        if (isActive === undefined)
            setIsActive(true)
        else
            setIsActive(!isActive);
    }
};

export default Dropdown;
