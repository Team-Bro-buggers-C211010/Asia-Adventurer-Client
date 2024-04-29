import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import CountryCard from "../CountryCard/CountryCard";
import { Link } from "react-router-dom";
import { Bounce } from "react-awesome-reveal";
const ContrySection = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/countries")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCountries(data);
        })
    }, [])
    return (
        <div className="mt-14">
            <h1 className="text-center text-[#657a42] text-2xl md:text-4xl font-extrabold"><Bounce>Explore Southeast Asian Countries</Bounce></h1>
            <div className="">
                <Marquee pauseOnHover="true" speed={80} gradient="true" gradientWidth={20} className="">
                    {
                        countries.map( country => <Link key={country._id} to={`/tourists-spot/${country.name}`}><CountryCard country={country} ></CountryCard></Link>)
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default ContrySection;