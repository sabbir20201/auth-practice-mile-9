import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;