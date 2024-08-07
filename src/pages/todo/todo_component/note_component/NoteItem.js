import "./NoteItem.css";
import { useRef, useEffect } from "react";

const NoteItem = ({ index, content, isDone, onUpdate, onDelete }) => {
    const onChangeCheckbox = () => {
        onUpdate(index);
    };

    const onClickButton = () => {
        onDelete(index);
    };

    return (
        <div className="NoteItem">
            <div className="checkbox">
                <input checked={isDone} type="checkbox" onChange={onChangeCheckbox}/>
            </div>
            <div className="content">
                {content}
            </div>
            <button onClick={onClickButton}>삭제</button>
        </div>
    );
};

export default NoteItem;