import "./TodoHeader.css";
import Button from "../../../component/Button";
import { useState } from "react";

const TodoHeader = ({ date, onIncrease, onDecrease }) => {
    const headerTitle = `${date.getFullYear()}년 ${date.getMonth() + 1}월`;

    const onClickIncrease = () => {
        onIncrease();
    };

    const onClickDecrease = () => {
        onDecrease();
    }

    return (
        <div className="TodoHeader">
            <div>
                <Button text={"<"} type={"negative"} onClick={onClickDecrease}/>
            </div>
            <h4>{headerTitle}</h4>
            <div>                
                <Button text={">"} type={"positive"} onClick={onClickIncrease}/>
            </div>    
        </div>
    );
};

export default TodoHeader;