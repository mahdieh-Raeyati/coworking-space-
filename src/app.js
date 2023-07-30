import React from 'react';
import "./app.css"
import Footer from "./components/footer/footer"
import LoginPage from "./components/loginPage/loginPage";
import NavBar from "./components/navBar/navBar";
import UserRegisterForm from "./components/registerform/userRegisterForm";
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom";
import LoginLoading from "./loading/loginLoadjng"
import NoGroup from "./components/manage-groups/noGroup/noGroup";
import EditInformation from "./components/edit_information/editUserInformation";
import TeammateRegisterForm from "./components/registerform/teammateRegisterForm"
import TeammateRegisterPage from "./components/registerform/teammateRegisterPage";
import NewGroupPage from "./components/manage-groups/newGroup/newGroupPage";
import Password from "./components/passwordPage/password";
import Calendar from "./components/book/calendar";
import CalendarPage from "./components/book/calendarPage";
import Table from "./components/book_history/table";
import BookHistoryPage from "./components/book_history/book_history_page";


const App = () => {
    return (
        <>
            {/*<NavBar/>*/}
            {/*<Routes>*/}
            {/*    <Route path="/">*/}
            {/*    </Route>*/}
            {/*</Routes>*/}
            {/*<Footer/>*/}
            {/*<LoginPage/>*/}
            {/*<CalendarPage/>*/}
            {/*<BookHistoryPage/>*/}
            {/*<TeammateRegisterPage isEditPage={true} />*/}
            {/*<TeammateRegisterForm isEditPage={false} />*/}
            {/*<EditInformation/>*/}
            {/*<NewGroupPage/>*/}
            {/*<Password/>*/}
            {/*<UserRegisterForm isEditPage={true}/>*/}
            {/*<UserRegisterForm isEditPage={false}/>*/}

        </>
    );
};

export default App;