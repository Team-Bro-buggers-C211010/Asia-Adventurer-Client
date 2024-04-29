import { useLoaderData, useParams } from "react-router-dom";
import TouristSpotCard from "../../components/TouristSpotCard/TouristSpotCard";
import TouristsCountryCard from "../../components/TouristsCountryCard/TouristsCountryCard";

const CountryPage = () => {
    const { countryName } = useParams();
    console.log(countryName);
    const touristSpots = useLoaderData();
    return (
        <div className="mt-4 md:mt-8 mb-14 px-1 md:px-0">
            <h1 className="text-[#8e9281] text-center text-lg md:text-4xl rounded-full font-bold bg-[#ccd7af] container mx-auto w-auto p-2 md:p-8">Explore The Tourist Destination : <span className="text-[#657a42]">{countryName}</span></h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
                {
                    touristSpots.map( singleSpot => <TouristsCountryCard key={singleSpot._id} singleSpot={singleSpot}></TouristsCountryCard>)
                }
            </div>
        </div>
    );
};

export default CountryPage;