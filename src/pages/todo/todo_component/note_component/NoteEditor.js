import "./NoteEditor.css";
import Button from "../../../../component/Button";
import { useContext, useRef, useState } from "react";
import { TodoDispatchContext } from "../../Todo";

const NoteEditor = ({ id }) => {
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const { onCreate } = useContext(TodoDispatchContext);

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = () => {
        // 입력값이 없으면 입력란에 포커스
        if (!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content, id);
        setContent(""); // 입력값 추가 후 폼 초기화
    };

    // 엔터 키로 입력값 제출
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }

    return (
        <div className="NoteEditor">
            <h4>할 일 작성하기</h4>
            <div className="editor_wrapper">
                <input placeholder="무엇을 해야하나요?" value={content} onChange={onChangeContent} ref={inputRef} onKeyDown={onKeyDown}/>
                <Button text={"추가"} type={"positive"} onClick={onSubmit}/>
            </div>
        </div>
    );
};

export default NoteEditor;