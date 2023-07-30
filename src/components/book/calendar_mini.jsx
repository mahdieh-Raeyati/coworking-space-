import React, { useState } from "react"
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "./persian_fa"

export default function Example() {
    const [value, setValue] = useState(new Date())
    return (
        <Calendar
            calendar={persian}
            locale={persian_fa}
            // value={value}
            // onChange={setValue}
        />
    )
}