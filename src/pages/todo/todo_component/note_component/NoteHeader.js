import "./NoteHeader.css";

const NoteHeader = ({ date }) => {

    return (
        <div className="NoteHeader">
            <div className="date">
                {date.substring(0, 4)}
            </div>
            <div className="title">
                📅 {`${date.substring(5, 7)}월 ${date.substring(8, 10)}일`} 일정
            </div>
        </div>
    );
};

export default NoteHeader;