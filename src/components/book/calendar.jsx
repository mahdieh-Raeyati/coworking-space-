import JCalendar from 'reactjs-persian-calendar'
import CalendarHeader from "../../img/calander.svg"
import React from 'react';
import "./calendar.css"

const Calendar = () => {
    return (
        <div className="col-12 calendar-container">
            <div className="calendar">
                <div className="calendar-box">
                    <div className="line"></div>
                    <JCalendar
                        locale={'fa'}
                        color={'#8EE0FF'}
                        size={40}
                        itemRender={(key, item, children) => children}
                    />
                </div>
                <img src={CalendarHeader}/>
            </div>
        </div>

    );
};

export default Calendar;