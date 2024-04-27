import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
    return (
        <div className="bg-base-100 h-screen">
            <div className="h-[64px] md:h-[86px]">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;