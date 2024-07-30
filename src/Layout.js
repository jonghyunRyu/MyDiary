import Header from "./component/Header";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <div className="main">
                <Navbar />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;