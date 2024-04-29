import { Link } from "react-router-dom";

const LatestTravelNews = () => {
    return (
        <div className="mt-16">
            <h1 className="text-center text-[#657a42] text-2xl md:text-4xl font-extrabold">Latest Travel News</h1>
            <p className="mt-5 text-[#8e9281] text-center text-sm md:text-base font-semibold mx-auto md:w-2/3">Stay up-to-date with our Latest Travel News, your gateway to the latest trends, tips, and updates from the world of travel. Discover exciting destinations, insider insights, and expert advice to inspire your next adventure.</p>
            <div className="mt-10 flex flex-col md:flex-row border-[#657a42] border-2 p-2 md:p-5 rounded-xl">
                <div className="md:w-1/2 flex flex-col gap-5 h-full">
                    <div className="flex gap-5 w-full">
                        <div className="w-28 h-28"><img className="h-full w-full rounded-2xl object-cover object-center" src="https://i.ibb.co/yPDsFWB/Home-Penthouse.jpg" alt="" /></div>
                        <div className="p-2">
                            <h1 className="text-base md:text-xl font-semibold text-base-content">Exploring Uncharted Territories: Top Adventure Destinations of the Year</h1>
                            <div className="flex gap-5 text-sm md:text-base font-medium">
                                <p className="text-[#657a42]">25 Oct 2021</p>
                                <p className="text-red-500">5min read</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 w-full">
                        <div className="w-28 h-28"><img className="h-full w-full rounded-2xl object-cover object-center" src="https://i.ibb.co/Khcjf8z/Bangkok.jpg" alt="" /></div>
                        <div className="p-2">
                            <h1 className="text-base  md:text-xl font-semibold text-base-content">Urban Escapes: Uncovering the Charm of Lesser-Known Cities</h1>
                            <div className="flex gap-5 text-sm md:text-base font-medium">
                                <p className="text-[#657a42]">25 Oct 2021</p>
                                <p className="text-red-500">5min read</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 w-full">
                        <div className="w-28 h-28"><img className="h-full w-full rounded-2xl object-cover object-center" src="https://i.ibb.co/py97Jn8/Exploring-Exotic-Destinations.jpg" alt="" /></div>
                        <div className="p-2">
                            <h1 className="text-base md:text-xl font-semibold text-base-content">Eco-Friendly Adventures: Exploring Nature with a Green Mindset</h1>
                            <div className="flex gap-5 text-sm md:text-base font-medium">
                                <p className="text-[#657a42]">25 Oct 2021</p>
                                <p className="text-red-500">5min read</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 w-full">
                        <div className="w-28 h-28"><img className="h-full w-full rounded-2xl object-cover object-center" src="https://i.ibb.co/hft0R5F/Tropical-Paradise-Resort.jpg" alt="" /></div>
                        <div className="p-2">
                            <h1 className="text-base md:text-xl font-semibold text-base-content">Hidden Gems: Off-the-Beaten-Path Destinations for Your Next Trip</h1>
                            <div className="flex gap-5 text-sm md:text-base font-medium">
                                <p className="text-[#657a42]">25 Oct 2021</p>
                                <p className="text-red-500">5min read</p>
                            </div>
                        </div>
                    </div>
                    <Link className="text-red-600 text-lg md:text-xl font-bold">See all article</Link>
                </div>
                <div className="h-full w-full md:w-1/2">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="h-full w-full"><img className="h-full w-full object-cover object-center" src="https://i.ibb.co/sspzBcQ/Home-Beach.jpg" alt="Shoes" /></figure>
                        <div className="card-body text-base-content">
                            <h2 className="card-title">
                            10 Must-See Destinations Making Waves in 2024
                            </h2>
                            <h3>Embark on a journey to uncover the 10 must-see destinations that are taking the travel world by storm in 2024. From iconic landmarks to hidden gems, delve into the cultural richness and natural splendor that define these remarkable places, setting the tone for this year's most sought-after travel experiences</h3>
                            <Link className="text-red-500 font-bold">Read More...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestTravelNews;