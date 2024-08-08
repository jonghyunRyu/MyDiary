import "./Cells.css";
import { getStartDate, getTotalDays } from "../../../utils";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DateContext, TodoStateContext } from "../Todo";

const Cells = () => {
    const todo = useContext(TodoStateContext);
    const [rows, setRows] = useState([]);
    const { date } = useContext(DateContext);
    
    const navigate = useNavigate();
    
    useEffect(() => {
        const newDate = date;
        const totalDays = getTotalDays(newDate);
        const startDate = getStartDate(newDate);
        
        const newRows = [];
        let week = [];
        let count = 0;
        let flag = false;
        let rowNum = 0;

        while (count < totalDays) {
            for (let i = 0; i < 7; i++) {
                const isWeekend = (i === 0 || i === 6) ? "weekend" : "weekday";
                if (startDate === i) {
                    flag = true;
                }

                if (count === totalDays) {
                    flag = false;
                }

                if (flag) {
                    count++;
                    const id = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2, '0')}-${String(count).padStart(2, '0')}`;
                    const hasTodo = todo.filter((it) => it.date === id).length > 0 ? "hasTodo" : "noTodo";

                    week.push(
                        <div className={`${isWeekend}_Date ${hasTodo}`} key={id}
                        onClick={() => navigate(`/todo/${id}`)}>
                            <span>{count}</span>
                            <div className="note"></div>
                        </div>
                    );
                } else {
                    week.push(
                        <div className={isWeekend} key={`empty-${i}`}></div>
                    );
                }
            }
            newRows.push(
                <div className={`row`} key={rowNum}>{week}</div>
            );
            rowNum++;
            week = [];
        }

        setRows(newRows);
    }, [date, navigate]);

    return (
        <div className="Cells">
            {rows}
        </div>
    );
};

export default Cells;