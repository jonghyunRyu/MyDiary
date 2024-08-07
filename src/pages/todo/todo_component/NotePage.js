import "./NotePage.css";
import { useParams } from "react-router-dom";
import NoteEditor from "./note_component/NoteEditor";
import NoteHeader from "./note_component/NoteHeader";
import React from "react";
import NoteList from "./note_component/NoteList";

const NotePage = () => {
    const { id } = useParams();

    return (
        <div className="NotePage">
            <NoteHeader date={id} />
            <NoteEditor id={id} />
            <NoteList/>
        </div>
    );
};

export default NotePage;