import "./Todo.css";
import Calendar from "./todo_component/Calendar";
import React, { useState, useRef, useReducer, useEffect } from "react";
import { Outlet } from "react-router-dom";

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();
export const DateContext = React.createContext();

function reducer(state, action) {
    switch (action.type) {
        case "INIT": {
            return action.newItem;
        }

        case "CREATE": {
            const newState = [...state, action.newItem];
            localStorage.setItem("Todo", JSON.stringify(newState));
            return newState;
        }

        case "UPDATE": {
            const newState = state.map((it) => it.index === action.targetId
            ? {
                ...it,
                isDone: !it.isDone,
            } : it);
            localStorage.setItem("Todo", JSON.stringify(newState));
            return newState;
        }

        case "DELETE": {
            const newState = state.filter((it) => it.index !== action.targetId);
            localStorage.setItem("Todo", JSON.stringify(newState));
            return newState;  
        }

        default:
            return state;
    } 
}


const Todo = () => {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [date, setDate] = useState(new Date());

    const onIncreaseMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()));
    };

    const onDecreaseMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()));
    };

    const idRef = useRef(0);
    const [todo, dispatch] = useReducer(reducer, []);
    
    useEffect(() => {
        const rawData = localStorage.getItem("Todo");
        if (!rawData) {
            setIsDataLoaded(true);
            return;
          }
      
        const localData = JSON.parse(rawData);
        if (localData.length === 0) {
            setIsDataLoaded(true);
            return;
        }

        dispatch({
            type: "INIT",
            newItem: localData,
        });
        setIsDataLoaded(true);
    }, []);

    // 할 일 추가 함수
    const onCreate = (content, id) => {
        dispatch({
            type: "CREATE",
            newItem: {
                index: idRef.current,
                content,
                isDone: false,
                date: id,
            },
        });
        idRef.current++;
    };

    // 할 일 체크박스 업데이트 함수
    const onUpdate = (targetId) => {
        dispatch({
            type: "UPDATE",
            targetId,
        });
    }

    // 할 일 삭제 함수
    const onDelete = (targetId) => {
        dispatch({
            type: "DELETE",
            targetId,
        })
    }

    if (!isDataLoaded) {
        return <div>데이터를 불러오는 중입니다</div>;
    } else {
        return (
            <TodoStateContext.Provider value={todo}>
                <div className="Todo">
                    <DateContext.Provider 
                        value={{
                            date,
                            onIncreaseMonth,
                            onDecreaseMonth,
                        }}>
                        <div className="Calendar">
                            <Calendar date={date} onIncrease={onIncreaseMonth} onDecrease={onDecreaseMonth} />
                        </div>
                    </DateContext.Provider>
                    <TodoDispatchContext.Provider
                        value={{
                            onCreate,
                            onUpdate,
                            onDelete,
                        }}>
                        <div className="Note">
                            <Outlet />
                        </div>
                    </TodoDispatchContext.Provider>
                </div>
            </TodoStateContext.Provider>
        );
    };
}

export default Todo;