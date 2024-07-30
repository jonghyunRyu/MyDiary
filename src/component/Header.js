import "./Header.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <Link to="/" className="header_logo">
                Mydiary
            </Link>
            <div className="header_button">
                <Button className="login" text={"로그인"} type={"positive"}/>
                <Button className="signup" text={"가입하기"} type={"default"}/>
            </div>
        </div>
    );
};

export default Header;