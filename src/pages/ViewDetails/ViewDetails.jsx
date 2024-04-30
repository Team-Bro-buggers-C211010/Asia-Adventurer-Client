import { useParams } from "react-router-dom";
import { FaSackDollar } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoManOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FaChartArea } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
const ViewDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [currentSpot, setCurrentSpot] = useState([]);
    useEffect(() => {
        fetch(`https://asia-adventurer-server.vercel.app/all-tourists-spot/current-spot/${id}`)
        .then(res => res.json())
        .then(data => {
            setCurrentSpot(data);
            setLoading(false);
        })
    }, [])
    if(loading) {
        return <div className="flex justify-center items-center text-[#ccd7af]"><span className="loading loading-bars loading-lg min-h-screen"></span></div>;
    }

    return (
        <div className="mt-5 md:mt-14 mb-14 px-1 md:px-0 container mx-auto">
            <Helmet>
                <title>{`${currentSpot.country} | ${currentSpot.spotName}`}</title>
            </Helmet>
            <div className="card rounded-3xl border-4 border-[#617844] bg-white lg:card-side shadow-xl">
                <figure className="w-full lg:w-1/2 h-[500px] md:h-[800px]"><img className="h-full w-full object-cover object-center" src={currentSpot.photo} alt="Album" /></figure>
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <div className="card-body">
                        <h2 className="flex justify-center items-center gap-3 mb-3 md:mb-5 text-2xl text-[#617844] md:text-5xl font-bold"><FaChartArea></FaChartArea>{currentSpot.spotName}</h2>
                        <hr className="border-[#617844]" />
                        <div className="flex flex-col md:flex-row my-3 md:my-5 justify-between w-full">
                            <h2 className="text-sm md:text-xl font-semibold flex gap-2">Country Name: <div className="flex gap-2 items-center text-[#617844]"><TbWorld></TbWorld> {currentSpot.country}</div></h2>
                            <h2 className="text-sm md:text-xl font-semibold flex gap-2">Location: <div className="flex gap-2 items-center text-[#617844]"><FaMapLocationDot></FaMapLocationDot> {currentSpot.location}</div></h2>
                        </div>
                        <hr className="border-[#617844]" />
                        <div className="flex flex-col md:flex-row my-3 md:my-5 justify-between">
                            <h1 className="flex gap-2 text-sm md:text-xl font-semibold">Average Cost: <span className="text-[#617844] flex gap-2 items-center"><FaSackDollar></FaSackDollar>{currentSpot.avgCost}</span></h1>
                            <h1 className="text-sm md:text-xl font-semibold">Travel Time : <span className="text-[#617844]">{currentSpot.travelTime}</span></h1>
                        </div>
                        <h1 className="text-sm md:text-xl md:mb-5 font-semibold flex gap-2">Total Visitors Per Year : <div className="flex gap-2 items-center text-[#617844]"><IoManOutline></IoManOutline> {currentSpot.visitors}</div></h1>
                        <hr className="border-[#617844]" />
                        <h1 className="mt-3 md:mt-5 text-sm md:text-xl font-semibold">Description : </h1>
                        <h3 className="text-sm md:text-lg font-semibold text-[#617844]">{currentSpot.description}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;