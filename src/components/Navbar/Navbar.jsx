import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
    const { user, loading, logOut } = useContext(AuthContext);
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
    const handleLogOut = () => {
        logOut()
            .then(() => {
                let timerInterval;
                Swal.fire({
                    title: "Log Out Successfully !!!",
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                });
            })
            .catch(err => {
                let timerInterval;
                Swal.fire({
                    title: err.message,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                });;
            })
    }
    const navLinks = <>
        <NavLink to="/" className={({ isActive }) =>
            isActive ? "border-b-2 md:px-1 border-[#617844] rounded-b-lg text-[#617844]" : "hover:border-b-2 md:hover:px-1 hover:rounded-b-lg hover:text-[#617844] hover:border-[#617844]"
        }>Home</NavLink>
        <NavLink to="/all-tourists-spot" className={({ isActive }) =>
            isActive ? "border-b-2 md:px-1 border-[#617844] rounded-b-lg text-[#617844]" : "hover:border-b-2 md:hover:px-1 hover:rounded-b-lg hover:text-[#617844] hover:border-[#617844]"
        }>All Tourists Spot</NavLink>
        {
            user && <>
                <NavLink to="/add-tourists-spot" className={({ isActive }) =>
                    isActive ? "border-b-2 md:px-1 border-[#617844] rounded-b-lg text-[#617844]" : "hover:border-b-2 md:hover:px-1 hover:rounded-b-lg hover:text-[#617844] hover:border-[#617844]"
                }>Add Tourists Spot</NavLink>
                <NavLink to="/my-list" className={({ isActive }) =>
                    isActive ? "border-b-2 md:px-1 border-[#617844] rounded-b-lg text-[#617844]" : "hover:border-b-2 md:hover:px-1 hover:rounded-b-lg hover:text-[#617844] hover:border-[#617844]"
                }>My-List</NavLink>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100 font-Poppins fixed z-50 border-b-2 rounded-b-lg  p-1 md:p-4 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-[#617844] lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-bold text-[#8e9281] shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                        <div className="inline-block md:hidden mt-1">
                            {
                                loading ? <div className="flex justify-center items-center text-[#ccd7af]"><span className="loading loading-bars loading-lg"></span></div>
                                :
                                user ? <NavLink onClick={handleLogOut} to="/login" className="btn text-xs text-white bg-[#617844] rounded-full hover:border hover:border-[#617844] hover:text-[#617844] hover:bg-transparent">Log Out</NavLink>
                                    :
                                    <>
                                        <NavLink to="/login" className="btn text-xs text-white bg-[#617844] rounded-full hover:border hover:border-[#617844] hover:text-[#617844] hover:bg-transparent">Log In</NavLink>
                                        <NavLink to="/register" className="btn text-xs text-white bg-[#617844] rounded-full hover:border hover:border-[#617844] hover:text-[#617844] hover:bg-transparent">Register</NavLink>
                                    </>
                            }
                        </div>
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost hover:bg-transparent text-sm md:text-2xl hover:border-2 rounded-xl hover:border-[#617844] font-bold md:font-extrabold text-[#8e9281] flex gap-x-1 md:gap-x-2 items-center"><img className="w-4 h-4 md:w-9 md:h-9" src="https://i.ibb.co/h828BhN/NavLogo.png" alt="" /> <span className="text-[#6a8053]">Asia</span> Adventurer</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal bg-transparent items-center gap-2 md:gap-5 text-[#8e9281] md:text-base font-bold px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end hidden md:flex gap-x-1">
                {
                    loading ? <div className="flex justify-center items-center text-[#ccd7af]"><span className="loading loading-bars loading-lg"></span></div>
                    :
                    user ? <>
                        <NavLink to="/my-list" className="dropdown dropdown-end hover:tooltip hover:tooltip-open hover:tooltip-bottom hover:tooltip-success" data-tip={user.displayName}>
                            <div tabIndex={0} role="button" className="btn bg-transparent btn-circle hover:border hover:border-[#617844] avatar" >
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="User Profile" className="" />
                                </div>
                            </div>
                        </NavLink>
                        <NavLink onClick={handleLogOut} to="/login" className="btn text-white bg-[#617844] rounded-full hover:border hover:border-[#617844] hover:text-[#617844] hover:bg-transparent">Log Out</NavLink>
                    </> :
                        <>
                            <NavLink to="/login" className="btn text-white bg-[#617844] rounded-full hover:border hover:border-[#617844] hover:text-[#617844] hover:bg-transparent">Log In</NavLink>
                            <NavLink to="/register" className="btn text-white bg-[#617844] rounded-full hover:border hover:border-[#617844] hover:text-[#617844] hover:bg-transparent">Register</NavLink>
                        </>
                }
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input onChange={handleTheme} type="checkbox" className="theme-controller" value="synthwave" />
                    {/* sun icon */}
                    <svg className="swap-off text-[#617844] fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                    {/* moon icon */}
                    <svg className="swap-on text-[#617844] fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                </label>
            </div>
            <div className="navbar-end flex md:hidden gap-x-1">
                {
                    user && <div className="dropdown dropdown-end hover:tooltip hover:tooltip-open hover:tooltip-left hover:tooltip-success" data-tip={user.displayName} >
                        <NavLink to="/my-list" tabIndex={0} role="button" className="bg-transparent w-8 h-8 border border-white flex justify-center items-center rounded-full hover:border hover:border-[#82b440] avatar">
                            <div className="w-6 rounded-full">
                                <img alt="User Profile" src={user.photoURL} />
                            </div>
                        </NavLink>
                    </div>
                }
                <label className="swap swap-rotate pr-1">
                    {/* this hidden checkbox controls the state */}
                    <input onChange={handleTheme} type="checkbox" className="theme-controller" value="synthwave" />
                    {/* sun icon */}
                    <svg className="swap-off text-[#617844] fill-current w-7 md:w-10 h-7 md:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                    {/* moon icon */}
                    <svg className="swap-on text-[#617844] fill-current w-7 md:w-10 h-7 md:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;