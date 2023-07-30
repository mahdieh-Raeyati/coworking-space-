import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"
import React from 'react';

const UserRegisterFormLoading = () => {

    let i=0;
    return (

        <form className="registerForm">
            <div className="container my-5">
                <div className="row">
                    <div className="col-6 offset-3 mb-5 mt-3 col-sm-4 offset-sm-4 col-md-2 offset-md-5">
                        <Skeleton className="mt-5" height={40}/>
                    </div>
                    {Array(3).fill({}).map(() => {
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

                    <div className="col-sm-8 offset-sm-2 col-md-5  mb-5 mt-3" style={{margin:"0 auto"}}>
                        <Skeleton className="mt-5" height={40}/>
                    </div>

                </div>
            </div>
        </form>


    );
};

export default UserRegisterFormLoading;