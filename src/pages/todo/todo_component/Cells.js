import "./Cells.css";
import { getStartDate, getTotalDays } from "../../../utils";
import { useState, useEffect } from "react";

const Cells = ({ date }) => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const newDate = date;
        const totalDays = getTotalDays(newDate);
        const startDate = getStartDate(newDate);

        const newRows = [];
        let week = [];
        let count = 0;
        let flag = false;

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
                    week.push(
                        <div className={`${isWeekend}_Date`} key={count}>
                            <span>{count}</span>
                        </div>
                    );
                } else {
                    week.push(
                        <div className={isWeekend} key={`empty-${i}-${count}`}></div>
                    );
                }
            }
            newRows.push(
                <div className="row" key={count}>{week}</div>
            );
            week = [];
        }

        setRows(newRows);
    }, [date]);

    return (
        <div className="Cells">
            {rows}
        </div>
    );
};

export default Cells;