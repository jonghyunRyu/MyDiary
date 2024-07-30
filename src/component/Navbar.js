import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/todo" className="Navbar_link">
                <button>할 일</button>
            </Link>
            <Link to="/diary" className="Navbar_link">
                <button>일기장</button>
            </Link>
            <Link to="/post" className="Navbar_link">
                <button>게시판</button>
            </Link>
        </div>
    );
};

export default Navbar;  