import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"
import React from 'react';

const RegisterFormLoading = () => {

    return (
        <>
            <div className="col-10 offset-1 title">
                <Skeleton  height={50} width={50} borderRadius={15} className="mb-2 mt-5"/>
            </div>

            <div className="col-10 offset-1 title">
                <Skeleton  width={275} height={49} count={2} borderRadius={8} className="mb-2"/>
            </div>

            <div className="col-10 offset-1 title">
                <Skeleton  width={274} height={41}  borderRadius={8} className="my-5"/>
            </div>
        </>
    );
};

export default RegisterFormLoading;