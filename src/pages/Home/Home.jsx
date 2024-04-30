import Banner from "../../components/Banner/Banner";
import HomeSpotCard from "../../components/HomeSpotCard/HomeSpotCard";
import { useEffect, useState } from "react";
import LatestTravelNews from "../../components/LatestTravelNews/LatestTravelNews";
import ContactUs from "../../components/ContactUs/ContactUs";
import ContrySection from "../../components/CountrySection/ContrySection";
import { Slide, Bounce } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
const Home = () => {
    // const allSpots = useLoaderData();
    const [viewAll, setViewALL] = useState(false);

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

    return (
        <div className="mb-14">
            <Helmet>
                <title>Asia Adventurer | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="mt-40 font-Poppins container mx-auto px-1 md:px-0">
                <h1 className="text-center text-[#657a42] text-2xl md:text-4xl font-extrabold"><Bounce>Discover Top Tourist Destinations</Bounce></h1>
                <p className="mt-5 font-Roboto text-[#8e9281] text-center text-sm md:text-base font-semibold mx-auto md:w-2/3">Explore breathtaking landscapes, vibrant cultures, and unforgettable experiences in our curated collection of must-visit tourist spots. From pristine beaches to ancient temples, there's something for every traveler to discover and enjoy.</p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Slide direction="up" triggerOnce="true">
                        {
                            allSpots.slice(0, viewAll ? allSpots.length : 6).map(spot => <HomeSpotCard key={spot._id} spot={spot}></HomeSpotCard>)
                        }
                    </Slide>
                </div>
                <div className="flex justify-center items-center mt-5">
                    {
                        allSpots.length > 6 && !viewAll ? <button className="btn bg-[#657a42] text-white hover:border-2 hover:border-[#657a42] hover:text-[#657a42] hover:bg-transparent" onClick={() => setViewALL(!viewAll)}>View All</button>
                            :
                            <button className="btn bg-[#657a42] text-white hover:border-2 hover:border-[#657a42] hover:text-[#657a42] hover:bg-transparent" onClick={() => setViewALL(!viewAll)}>View Less</button>
                    }
                </div>
                <ContrySection></ContrySection>
                <LatestTravelNews></LatestTravelNews>
                <div className="mt-14">
                    <ContactUs></ContactUs>
                </div>
            </div>
        </div>
    );
};

export default Home;