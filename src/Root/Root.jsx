import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const Root = () => {
    return (
        <div className="bg-base-100 h-screen">
            <div className="h-[64px] md:h-[86px]">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-424px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;