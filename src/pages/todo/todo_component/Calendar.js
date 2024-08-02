import "./Calendar.css";
import { useState } from "react";
import CalendarDays from "./CalendarDays";
import Cells from "./Cells";

const Calendar = ({date}) => {
    
    return (
        <div className="calendar">
            <CalendarDays />
            <Cells date={date} />
        </div>
    );
};

export default Calendar;