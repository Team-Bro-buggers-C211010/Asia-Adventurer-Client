import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])
    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme("night");
        }
        else {
            setTheme("light");
        }
    }
    const navLinks = <>
        <NavLink to="/" className={({ isActive }) =>
            isActive ? "border-b-2 md:px-1 border-[#617844] rounded-b-lg text-[#617844]" : "hover:border-b-2 md:hover:px-1 hover:rounded-b-lg hover:text-[#617844] hover:border-[#617844]"
        }>Home</NavLink>
        <NavLink to="/all-tourists-spot" className={({ isActive }) =>
            isActive ? "border-b-2 md:px-1 border-[#617844] rounded-b-lg text-[#617844]" : "hover:border-b-2 md:hover:px-1 hover:rounded-b-lg hover:text-[#617844] hover:border-[#617844]"
        }>All Tourists Spot</NavLink>
        <NavLink to="/add-tourists-spot" className={({ isActive }) =>
            isActive ? "border-b-2 md:px-1 border-[#617844] rounded-b-lg text-[#617844]" : "hover:border-b-2 md:hover:px-1 hover:rounded-b-lg hover:text-[#617844] hover:border-[#617844]"
        }>Add Tourists Spot</NavLink>
        <NavLink to="/my-list" className={({ isActive }) =>
            isActive ? "border-b-2 md:px-1 border-[#617844] rounded-b-lg text-[#617844]" : "hover:border-b-2 md:hover:px-1 hover:rounded-b-lg hover:text-[#617844] hover:border-[#617844]"
        }>My-List</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 fixed z-50 border-b-2 rounded-b-lg  p-1 md:p-4 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost hover:bg-transparent text-sm md:text-3xl hover:border-2 rounded-xl hover:border-[#617844] font-bold md:font-extrabold text-[#8e9281] flex gap-x-1 md:gap-x-2 items-center"><img className="w-4 h-4 md:w-9 md:h-9" src="https://i.ibb.co/h828BhN/NavLogo.png" alt="" /> <span className="text-[#6a8053]">Asia</span> Adventurer</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal bg-transparent items-center gap-x-6 text-[#8e9281] text-lg font-bold px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end hidden md:flex gap-x-1">
                <NavLink to="/" className="dropdown dropdown-end hover:tooltip hover:tooltip-open hover:tooltip-bottom hover:tooltip-success" data-tip="User Name">
                    <div tabIndex={0} role="button" className="btn bg-transparent btn-circle hover:border hover:border-[#617844] avatar" >
                        <div className="w-10 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="User Profile" className="" />
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/login" className="btn text-white bg-[#617844] rounded-full hover:border hover:border-[#617844] hover:text-[#617844] hover:bg-transparent">Log In</NavLink>
                <NavLink to="/register" className="btn text-white bg-[#617844] rounded-full hover:border hover:border-[#617844] hover:text-[#617844] hover:bg-transparent">Register</NavLink>
                <label className="cursor-pointer grid place-items-center">
                    <input onChange={handleTheme} type="checkbox" className="toggle theme-controller bg-[#617844] row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;