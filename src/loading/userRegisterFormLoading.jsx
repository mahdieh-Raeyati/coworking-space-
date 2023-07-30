import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"
import React from 'react';

const UserRegisterFormLoading = () => {

    let i=0;
    return (

        <form className="registerForm">
            <div className="container my-lg-5">
                <div className="row">
                    <div className="col-6 offset-3 mb-5 mt-3">
                        <Skeleton className="mt-5" height={40}/>
                    </div>


                    {Array(6).fill({}).map(() => {
                        return (
                            <div className="row" key={i++}>
                                <div  className="col-sm-12 col-md-5">
                                    <Skeleton className="mt-5" height={40}/>
                                </div>
                                <div  className="col-sm-12 col-md-5 offset-md-2">
                                    <Skeleton className="mt-5" height={40}/>
                                </div>
                            </div>

                        )
                    })}

                    <div className="col-12">
                        <Skeleton className="mt-5" height={100}/>
                    </div>
                    <div className="col-12">
                        <Skeleton className="my-5" height={200} count={2}/>
                    </div>
                </div>
            </div>
        </form>


    );
};

export default UserRegisterFormLoading;