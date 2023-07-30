import React from 'react';
import "./table.css"

const Table = () => {
    const data = [
        { name: "گروه 1", numberOfBook:2, date: "1401/8/5" ,numberOfDays: 3 ,paid:320000},
        { name: "گروه 2", numberOfBook:2, date: "1401/2/12" ,numberOfDays:1 ,paid:210000 },
        { name: "گروه3", numberOfBook:2, date: "1401/7/25" ,numberOfDays:30 ,paid:120000},
        { name: "گروه 1", numberOfBook:2, date: "1401/8/5" ,numberOfDays: 3 ,paid:320000},
        { name: "گروه 2", numberOfBook:2, date: "1401/2/12" ,numberOfDays:1 ,paid:210000 },
        { name: "گروه3", numberOfBook:2, date: "1401/7/25" ,numberOfDays:30 ,paid:120000},
        { name: "گروه 1", numberOfBook:2, date: "1401/8/5" ,numberOfDays: 3 ,paid:320000},
        { name: "گروه 2", numberOfBook:2, date: "1401/2/12" ,numberOfDays:1 ,paid:210000 },
        { name: "گروه3", numberOfBook:2, date: "1401/7/25" ,numberOfDays:30 ,paid:120000}
    ]
    let counter=0;
    return (
        <table className="my-5">
            <tr>
                <th>ردیف</th>
                <th>نام گروه</th>
                <th>تعداد صندلی</th>
                <th>تاریخ رزرو</th>
                <th>تعداد روز رزرو</th>
                <th>هزینه پرداختی</th>
            </tr>

            {data.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{++counter}</td>
                        <td>{val.name}</td>
                        <td>{val.numberOfBook}</td>
                        <td>{val.date}</td>
                        <td>{val.numberOfDays}</td>
                        <td>{val.paid}</td>
                    </tr>
                )
            })}

        </table>
    );
};

export default Table;