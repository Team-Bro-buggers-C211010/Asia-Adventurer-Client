import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import add from "../../images/Add.svg"

const AddTouristsSpot = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const handleAddTouristsSpot = e => {
        e.preventDefault();

        const form = e.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const spotName = form.spotName.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const season = form.season.value;
        const travelTime = form.travelTime.value;
        const avgCost = form.avgCost.value;
        const visitors = form.visitors.value;
        const photo = form.photo.value;

        const newTouristsSpot = { userName, userEmail, spotName, country, location, description, season, travelTime, avgCost, visitors, photo };
        console.log(newTouristsSpot);

        // send data to the server
        fetch("http://localhost:5000/all-tourists-spot", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newTouristsSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("New Tourists Spot Added !!!");
                }
                form.reset();
            })

    }

    return (
        <div className="container mx-auto mt-4 md:mt-8 px-1 md:px-0 flex flex-col justify-center items-center">
            <div><img className="w-48 h-48" src={add} alt="" /></div>
            <form onSubmit={handleAddTouristsSpot} className="card-body border-2 border-[#8e9281] rounded-xl bg-[#ccd7af] md:w-2/3 flex mx-auto">
                <h1 className="text-center text-xl mb-2 md:mb-4 md:text-3xl font-extrabold text-[#8e9281]">Add Your Tourists Spot</h1>
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42] ">Your Name</span>
                        </label>
                        <input type="text" defaultValue={user.displayName} name="userName" placeholder="User Name" className="input input-bordered text-[#657a42] text-xs md:text-base" disabled required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42]">Your Email</span>
                        </label>
                        <input type="email" defaultValue={user.email} name="userEmail" placeholder="hablu@paglu.com" className="input input-bordered text-[#657a42] text-xs md:text-base" disabled required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42]">Tourists Spot Name</span>
                        </label>
                        <input type="text" name="spotName" placeholder="Your Fav. Place" className="input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42]">Country Name</span>
                        </label>
                        <input type="text" name="country" placeholder="Country You Tour" className="input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42]">Short Description</span>
                        </label>
                        <textarea name="description" className="textarea textarea-bordered text-[#657a42] text-xs md:text-base" placeholder="Describe the place"></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42]">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Location" className="input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42]">Tourists Spot Image</span>
                        </label>
                        <input type="text" name="photo" placeholder="Give the Image URL" className="input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42]">Seasonality</span>
                        </label>
                        <input type="text" name="season" placeholder="Summer / Winter / Monsoon" className="input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42]">Travel Time</span>
                        </label>
                        <input type="text" name="travelTime" placeholder="some - some days" className="input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42]">Average Cost ($)</span>
                        </label>
                        <input type="text" name="avgCost" placeholder="Give the avg. cost" className="input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42]">Total Visitors Per Year</span>
                        </label>
                        <input type="text" name="visitors" placeholder="10000000" className="input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                </div>
                <input className="btn bg-[#657a42] text-white hover:bg-transparent hover:border-[#657a42] hover:text-[#657a42] hover:border-2" type="submit" value="Add Now" />
            </form>
        </div>
    );
};

export default AddTouristsSpot;