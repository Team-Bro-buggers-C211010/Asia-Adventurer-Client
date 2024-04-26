import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <NavLink to="/" className={({ isActive }) =>
            isActive ? "border-b-2 md:px-1 md:py-2 border-[#617844] rounded-b-lg text-[#617844]" : "hover:border-b-2 hover:rounded-b-lg hover:text-[#617844] hover:border-[#617844]"
        }>Home</NavLink>
        <NavLink to="/all-tourists-spot" className={({ isActive }) =>
            isActive ? "border-b-2 md:px-1 md:py-2 border-[#617844] rounded-b-lg text-[#617844]" : "hover:border-b-2 hover:rounded-b-lg hover:text-[#617844] hover:border-[#617844]"
        }>All Tourists Spot</NavLink>
        <NavLink to="/add-tourists-spot" className={({ isActive }) =>
            isActive ? "border-b-2 md:px-1 md:py-2 border-[#617844] rounded-b-lg text-[#617844]" : "hover:border-b-2 hover:rounded-b-lg hover:text-[#617844] hover:border-[#617844]"
        }>Add Tourists Spot</NavLink>
    </>
    return (
        <div className="navbar relative z-50 fixed bg-[#FCFAEE] md:p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className=" text-3xl font-extrabold text-[#8e9281] flex gap-x-2 items-center"><img className="md:w-9 md:h-9" src="https://i.ibb.co/h828BhN/NavLogo.png" alt="" /> <span className="text-[#6a8053]">Asia</span> Adventurer</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal bg-transparent items-center gap-x-6 text-[#8e9281] text-lg font-bold px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;