import React from 'react';
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";
import TeammateRegisterForm from  "./teammateRegisterForm"

const TeammateRegisterPage = ({isEditPage}) => {
    return (
        <>
            <NavBar/>
            <TeammateRegisterForm isEditPage={isEditPage}/>
            <Footer/>
        </>
    );
};

export default TeammateRegisterPage;