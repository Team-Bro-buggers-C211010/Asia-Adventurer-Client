import { Link } from "react-router-dom";
import { FaSackDollar } from "react-icons/fa6";
import { IoManOutline } from "react-icons/io5";
import { FaChartArea } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { FiSun } from "react-icons/fi";
const TouristsCountryCard = ({ singleSpot }) => {
    return (
        <div className="card card-compact font-Poppins rounded-none w-full bg-white border-4 border-[#a6ac92] shadow-xl">
            <h1 className="flex justify-center items-center font-Montserrat gap-1 md:gap-2 text-[#5a6f38] mt-4 mb-4 text-lg md:text-2xl font-bold"><FaChartArea></FaChartArea> {singleSpot.spotName}</h1>
            <figure className="h-64 relative"><img src={singleSpot.photo} className="h-full w-full object-cover object-center" alt="Shoes" /></figure>
            <p className="absolute top-20 text-[#617844] font-semibold bg-[#ccd7af] w-28 p-2 border-2 border-l-0 border-[#a6ac92] rounded-r-full justify-center flex gap-1 items-center"><FiSun></FiSun>{singleSpot.season}</p>
            <div className="card-body font-Roboto">
                <h1 className="text-base md:text-lg text-[#617844] font-semibold"><span className="font-extrabold">Country :</span> {singleSpot.country}</h1>
                <h1 className="text-base md:text-lg text-[#617844] font-semibold"><span className="font-extrabold">Location :</span> {singleSpot.location}</h1>
                <h1 className="text-base md:text-lg text-[#617844] font-semibold"><span className="font-extrabold">Description :</span> </h1>
                <p className="text-sm md:text-lg text-[#5a6f38] font-medium">{singleSpot.description}</p>
                <div className="flex justify-between mt-3">
                    <h1 className="text-[#5a6f38] text-sm md:text-base font-semibold flex items-center gap-1"><FaSackDollar></FaSackDollar>{singleSpot.avgCost}</h1>
                    <h1 className="text-[#5a6f38] text-sm md:text-base font-semibold flex items-center gap-1"><MdAccessTime></MdAccessTime>{singleSpot.travelTime}</h1>
                    <h1 className="text-[#5a6f38] text-sm md:text-base font-semibold flex items-center gap-1"><IoManOutline></IoManOutline>{singleSpot.visitors}</h1>
                </div>
                <div className="card-actions font-Montserrat justify-center">
                    <Link to={`/spot-details/${singleSpot._id}`} className="btn bg-[#657a42] text-white hover:border-2 hover:border-[#657a42] hover:text-[#657a42] hover:bg-transparent">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TouristsCountryCard;