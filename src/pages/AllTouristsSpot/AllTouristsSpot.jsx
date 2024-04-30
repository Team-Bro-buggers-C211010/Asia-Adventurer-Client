import TouristSpotCard from "../../components/TouristSpotCard/TouristSpotCard";
import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
const AllTouristsSpot = () => {

    const [loading, setLoading] = useState(true);
    const [allSpots, setAllSpots] = useState([]);
    useEffect(() => {
        fetch("https://asia-adventurer-server.vercel.app/all-tourists-spot")
        .then(res => res.json())
        .then(data => {
            setAllSpots(data);
            setLoading(false);
        })
    }, [])
    if(loading) {
        return <div className="flex justify-center items-center text-[#ccd7af]"><span className="loading loading-bars loading-lg min-h-screen"></span></div>;
    }

    const handleSort = e => {
        const sortType = e.target.value;
        if (sortType === "Ascending") {
            fetch("https://asia-adventurer-server.vercel.app/all-tourists-spot/sort/1")
                .then(res => res.json())
                .then(data => {
                    setAllSpots(data);
                })
        }
        else {
            fetch("https://asia-adventurer-server.vercel.app/all-tourists-spot/sort/-1")
                .then(res => res.json())
                .then(data => {
                    setAllSpots(data);
                })
        }
    }
    return (
        <div className="mt-4 md:mt-8 mb-14 px-1 md:px-0">
            <Helmet>
                <title>{`Asia Adventurer | All Tourists Spot`}</title>
            </Helmet>
            <Zoom><h1 className="text-[#8e9281] text-center text-lg md:text-4xl rounded-full font-bold bg-[#ccd7af] container mx-auto w-auto p-2 md:p-8"><span className="text-[#657a42]">Discover Southeast Asia:</span> Explore Top Tourist Destinations</h1></Zoom>
            <div className="container mx-auto mb-20 flex justify-center items-center mt-5">
                <select onChange={handleSort} className="select select-bordered w-full max-w-xs bg-[#657a42] text-white text-lg font-semibold">
                    <option disabled selected className="text-[#ccd7af]">Sort By Avg. Cost</option>
                    <option className="">Ascending</option>
                    <option className="">Descending</option>
                </select>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    allSpots.map(singleSpot => <TouristSpotCard key={singleSpot._id} singleSpot={singleSpot}></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;