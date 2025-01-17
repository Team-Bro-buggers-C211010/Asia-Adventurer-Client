import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { TbBrandGmail } from "react-icons/tb";
import { SiLinkedin } from "react-icons/si";
import { FaHashtag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Slide, Zoom, Bounce } from "react-awesome-reveal";
const Footer = () => {
    return (
        <div className="font-Poppins">
            <footer className="footer flex flex-col md:flex-row justify-around p-10 bg-[#657a42] text-base-content border-y-2 border-t-white  rounded-t-lg border-base-100 ">
                <aside>
                    <img className="w-20" src="https://i.ibb.co/h828BhN/NavLogo.png" alt="" />
                    <p className="text-[#ccd7af] text-lg font-Roboto"><span className="text-2xl font-bold font-Poppins"><Slide duration={1500}>Asia Adventurer</Slide></span><br /> - Discover Asia: Your Ultimate Adventure Awaits</p>
                </aside>
                <nav>
                    <h1 className="text-lg font-semibold">Contact Us - </h1>
                    <h1 className="font-medium text-base"> <Zoom>- Call 24/7 for any help</Zoom></h1>
                    <p className="text-base md:text-lg font-bold"> <Slide direction="right" duration={1500}>+00 123 456 789</Slide></p>
                    <h1 className="font-medium text-base"> <Zoom>- Mail to our support team</Zoom></h1>
                    <p className="text-base md:text-lg font-bold"><Slide direction="right" duration={1500}>support@domain.com</Slide></p>
                </nav>
            </footer>
            <footer className="footer bg-[#8e9281] items-center p-4 text-base-content">
                <aside className="items-center grid-flow-col font-bold">
                    <FaHashtag className="h-5"></FaHashtag>
                    <p className="font-Montserrat">Copyright © 2024 - All right reserved by Asia Adventurer</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <Bounce>
                        <Link><TbBrandGmail className="h-5 md:h-7 w-5 md:w-7 hover:text-base-100" /></Link>
                        <Link><SiLinkedin className="h-5 md:h-7 w-5 md:w-7 hover:text-base-100" /></Link>
                        <Link><FaFacebookSquare className="h-5 md:h-7 w-5 md:w-7 hover:text-base-100" /></Link>
                        <Link><GrInstagram className="h-5 md:h-7 w-5 md:w-7 hover:text-base-100" /></Link>
                    </Bounce>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;