import React from 'react';
import "./book_history_page.css"
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";
import Table from "./table";

const BookHistoryPage = () => {
    return (
        <div className="book_history_page">

            <NavBar/>

            <div className="container book_history_container my-0 my-sm-5 py-5">
                <div className="row">

                    <div className="col-12 text-center title mb-4">
                        تاریخچه رزرو
                    </div>
                    <div className="col-12 text-center description">
                        برای مشاهده اطلاعات مربوط به رزرو روی ردیف مورد نظر کلیک کنید.
                    </div>
                    <div className="col-12 table-container">
                        <Table/>
                    </div>


                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default BookHistoryPage;