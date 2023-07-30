import React from 'react';
import "./noGroup.css"
import Img from "../../../img/noGroup.svg"

const NoGroup = ({makeGroup}) => {
    return (

        <div className="row noGroup">
            <div className="col-12 text-center">
                درحال حاضر هیچ گروهی برای شما ثبت نشده است.
            </div>

            <div className="col-12 text-center">
                برای رزرو گروهی ابتدا باید اطلاعات اعضای گروه خود را در سامانه ثبت کنید.
            </div>

            <button type="button" className="col-6 offset-3 col-md-4 offset-md-4 col-lg-2 offset-lg-5"
                    onClick={makeGroup}>
                ايجاد گروه
            </button>

            <div  className="col-12 text-center mt-3">
                <img src={Img}/>
            </div>


        </div>

    );
};

export default NoGroup;