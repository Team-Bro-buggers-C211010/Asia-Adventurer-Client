import { useParams } from "react-router-dom";
import TouristsCountryCard from "../../components/TouristsCountryCard/TouristsCountryCard";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const CountryPage = () => {
    const { countryName } = useParams();

    const [loading, setLoading] = useState(true);
    const [touristSpots, setTouristSpots] = useState([]);
    useEffect(() => {
        fetch(`https://asia-adventurer-server.vercel.app/tourists-country/${countryName}`)
        .then(res => res.json())
        .then(data => {
            setTouristSpots(data);
            setLoading(false);
        })
    }, [])
    if(loading) {
        return <div className="flex justify-center items-center text-[#ccd7af]"><span className="loading loading-bars loading-lg min-h-screen"></span></div>;
    }

    return (
        <div className="mt-4 md:mt-8 mb-14 px-1 md:px-0">
            <Helmet>
                <title>{`Asia Adventurer | ${countryName}`}</title>
            </Helmet>
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