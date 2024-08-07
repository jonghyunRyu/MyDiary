import "./CalendarHeader.css";
import Button from "../../../component/Button";
import { useContext } from "react";
import { DateContext } from "../Todo";

const TodoHeader = () => {
    const { date, onIncreaseMonth, onDecreaseMonth } = useContext(DateContext);
    const headerTitle = `${date.getFullYear()}년 ${date.getMonth() + 1}월`;

    return (
        <div className="TodoHeader">
            <div>
                <Button text={"<"} type={"negative"} onClick={onDecreaseMonth}/>
            </div>
            <h4>{headerTitle}</h4>
            <div>                
                <Button text={">"} type={"positive"} onClick={onIncreaseMonth}/>
            </div>    
        </div>
    );
};

export default TodoHeader;