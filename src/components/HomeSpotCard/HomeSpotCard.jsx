import { IoManOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { FaChartArea } from "react-icons/fa";
import { Link } from "react-router-dom";
const HomeSpotCard = ({ spot }) => {
    return (
        <div className="card card-compact rounded-none w-full bg-white border-4 border-[#a6ac92] shadow-xl">
            <h1 className="flex justify-center font-Montserrat items-center gap-1 md:gap-2 text-[#5a6f38] mt-4 mb-4 text-lg md:text-2xl font-bold"><FaChartArea></FaChartArea> {spot.spotName}</h1>
            <figure className="h-64 relative"><img src={spot.photo} className="h-full w-full object-cover object-center" alt="Spots Image" />
            </figure>
            <p className="absolute top-20 text-[#5a6f38] font-semibold bg-[#ccd7af] w-28 p-2 border-2 border-l-0 border-[#a6ac92] rounded-r-full justify-center flex gap-1 items-center"><FiSun></FiSun>{spot.season}</p>
            <div className="card-body font-Roboto">
                <div className="flex justify-between">
                    <h1 className="text-[#5a6f38] text-sm md:text-base font-semibold">Country : {spot.country}</h1>
                    <h1 className="text-[#5a6f38] text-sm md:text-base font-semibold flex items-center gap-1"> Average Cost : <span className="flex items-center gap-1"><FaSackDollar></FaSackDollar>{spot.avgCost}</span></h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-[#5a6f38] text-sm md:text-base font-semibold flex items-center gap-1"><MdAccessTime></MdAccessTime>{spot.travelTime}</h1>
                    <h1 className="text-[#5a6f38] text-sm md:text-base font-semibold flex items-center gap-1"><IoManOutline></IoManOutline>{spot.visitors}</h1>
                </div>
                <div className="card-actions font-Poppins justify-center">
                    <Link to={`/spot-details/${spot._id}`} className="btn bg-[#657a42] text-white hover:border-2 hover:border-[#657a42] hover:text-[#657a42] hover:bg-transparent">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeSpotCard;