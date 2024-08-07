import "./NoteList.css";
import NoteItem from "./NoteItem";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { TodoDispatchContext } from "../../Todo";
import { TodoStateContext } from "../../Todo";

const NoteList = () => {
    const params = useParams();
    const todo = useContext(TodoStateContext);
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);
    const filteredTodo = todo.filter((it) => it.date === params.id);

    const navigate = useNavigate();
    const onSubmit = () => {
        navigate("/todo", { replace: true });
    }

    return (
        <div className="NoteList">
            <h4>할 일 목록</h4>
            <div className="list_wrapper">
                {filteredTodo.map((it) => (
                    <NoteItem key={it.index} {...it} onUpdate={onUpdate} onDelete={onDelete} />
                ))}
            </div>
            <div className="button_wrapper">
                <button onClick={onSubmit}>확인</button>
            </div>
        </div>
    );
};

export default NoteList;