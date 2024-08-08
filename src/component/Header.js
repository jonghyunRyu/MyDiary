import "./Header.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <Link to="/" className="header_logo">
                MyDiary
            </Link>
        </div>
    );
};

export default Header;