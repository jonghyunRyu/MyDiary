import "./CalendarDays.css";

const CalendarDays = () => {
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const days = [];
    
    for (let i = 0; i < 7; i++) {
        const checkWeekend = (i === 0 || i === 6) ? "Weekend" : "Weekday";
        days.push(
            <div className={checkWeekend} key={i}>
                {week[i]}
            </div>
        );
    }

    return <div className="CalendarDays">{days}</div>
};

export default CalendarDays;