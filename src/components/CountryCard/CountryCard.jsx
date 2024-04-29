const CountryCard = ({ country }) => {
    return (
        <div className="mt-10 w-64 md:w-96 h-full mr-5 card card-compact rounded-none  bg-white border-4 border-[#a6ac92] shadow-xl">
            <figure className="h-52 relative"><img src={country.image} className="h-full w-full object-fill object-center" alt="Shoes" /></figure>
            <p className="absolute top-20 font-Montserrat text-[#5a6f38] text-lg md:text-xl font-semibold bg-[#ccd7af] w-32 p-2 border-2 border-l-0 border-[#a6ac92] rounded-r-full justify-center flex gap-1 items-center">{country.name}</p>
            <div className="card-body">
                <h1 className="text-xl font-semibold">Description :</h1>
                <p className="font-Roboto">{country.description}</p>
            </div>
        </div>
    );
};

export default CountryCard;