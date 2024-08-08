import "./Calendar.css";
import CalendarDays from "./CalendarDays";
import Cells from "./Cells";
import CalendarHeader from "./CalendarHeader";

const Calendar = () => {

    return (
        <div className="calendar">
            <CalendarHeader />
            <CalendarDays />
            <Cells />
        </div>
    );
};

export default Calendar;