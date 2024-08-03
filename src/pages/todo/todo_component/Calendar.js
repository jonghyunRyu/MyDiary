import "./Calendar.css";
import CalendarDays from "./CalendarDays";
import Cells from "./Cells";
import TodoHeader from "./TodoHeader";

const Calendar = ({date, onIncrease, onDecrease}) => {

    return (
        <div className="calendar">
            <TodoHeader date={date} onIncrease={onIncrease} onDecrease={onDecrease}/>
            <CalendarDays />
            <Cells date={date} />
        </div>
    );
};

export default Calendar;