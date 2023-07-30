import "./editUserInformation.css"
import React from 'react';
import NavBar from "../navBar/navBar";
import UserRegisterForm from "../registerform/userRegisterForm";
import Footer from "../footer/footer";

const EditInformation = () => {
    return (
        <>
            <NavBar/>
            <UserRegisterForm isEditPage={true}/>
            <Footer/>
        </>
    );
};

export default EditInformation;