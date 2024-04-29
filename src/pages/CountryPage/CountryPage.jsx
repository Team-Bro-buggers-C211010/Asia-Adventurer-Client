import { useLoaderData, useParams } from "react-router-dom";
import TouristSpotCard from "../../components/TouristSpotCard/TouristSpotCard";

const CountryPage = () => {
    const { countryName } = useParams();
    console.log(countryName);
    const touristSpots = useLoaderData();
    return (
        <div className="mt-4 md:mt-8 px-1 md:px-0">
            <h1 className="text-[#8e9281] text-center text-lg md:text-4xl rounded-full font-bold bg-[#ccd7af] container mx-auto w-auto p-2 md:p-8">Explore The Tourist Destination : <span className="text-[#657a42]">{countryName}</span></h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
                {
                    touristSpots.map( singleSpot => <TouristSpotCard key={singleSpot._id} singleSpot={singleSpot}></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default CountryPage;