import "./Todo.css";
import Calendar from "./todo_component/Calendar";
import React, { useReducer, useRef, useEffect, useState } from "react";
import TodoHeader from "./todo_component/TodoHeader";

const Todo = () => {
    const [date, setDate] = useState(new Date());
    const onIncreaseMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1));
    };

    const onDecreaseMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1));
    };

    return (
            <div className="Todo">
                <TodoHeader date={date} onIncrease={onIncreaseMonth} onDecrease={onDecreaseMonth} />
                <Calendar date={date} />
            </div>
    );
};

export default Todo;