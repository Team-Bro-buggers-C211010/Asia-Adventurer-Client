import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import add from "../../images/Add.svg"
import Swal from "sweetalert2";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
const AddTouristsSpot = () => {
    const { user } = useContext(AuthContext);
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

        Swal.fire({
            title: "Are you sure to add it ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // send data to the server
                fetch("https://asia-adventurer-server.vercel.app/all-tourists-spot", {
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
                            Swal.fire({
                                title: "Added!",
                                text: "New Tourists Spot Added !!!",
                                icon: "success"
                            });
                        }
                        form.reset();
                        form.country.selectedIndex = 0;
                        form.season.selectedIndex = 0;
                    })
            }
            else {
                Swal.fire({
                    title: "Nothing Added!",
                    text: "New Tourists Spot is not added !!!",
                    icon: "error"
                });
            }
        });
    }

    return (
        <div className="container mx-auto mb-14 font-Poppins mt-4 md:mt-8 px-1 md:px-0 flex flex-col justify-center items-center">
            <Helmet>
                <title>{`${user.displayName} | Add Tourists Spot`}</title>
            </Helmet>
            <div><img className="w-48 h-48" src={add} alt="" /></div>
            <form onSubmit={handleAddTouristsSpot} className="card-body border-2 border-[#8e9281] rounded-xl bg-[#ccd7af] md:w-2/3 flex mx-auto">
                <h1 className="text-center text-xl mb-2 md:mb-4 md:text-3xl font-extrabold text-[#8e9281]"><Zoom>Add Your Tourists Spot</Zoom></h1>
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42] font-Montserrat">Your Name</span>
                        </label>
                        <input type="text" defaultValue={user.displayName} name="userName" placeholder="User Name" className="input input-bordered text-[#657a42] text-xs md:text-base font-Roboto" disabled required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42] font-Montserrat">Your Email</span>
                        </label>
                        <input type="email" defaultValue={user.email} name="userEmail" placeholder="hablu@paglu.com" className="input input-bordered text-[#657a42] text-xs md:text-base font-Roboto" disabled required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42] font-Montserrat">Tourists Spot Name</span>
                        </label>
                        <input type="text" name="spotName" placeholder="Your Fav. Place" className="input input-bordered text-[#657a42] text-xs md:text-base font-Roboto" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42] font-Montserrat">Country Name</span>
                        </label>
                        <select name="country" className="select select-bordered w-ful font-Roboto text-[#657a42] text-xs md:text-base">
                            <option disabled selected>Country</option>
                            <option>Bangladesh</option>
                            <option>Thailand</option>
                            <option>Indonesia</option>
                            <option>Malaysia</option>
                            <option>Vietnam</option>
                            <option>Cambodia</option>
                        </select>
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42] font-Montserrat">Short Description</span>
                        </label>
                        <textarea name="description" className="textarea textarea-bordered font-Roboto text-[#657a42] text-xs md:text-base" placeholder="Describe the place"></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42] font-Montserrat">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Location" className="input input-bordered font-Roboto text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42] font-Montserrat">Tourists Spot Image</span>
                        </label>
                        <input type="text" name="photo" placeholder="Give the Image URL" className="input input-bordered font-Roboto text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42] font-Montserrat">Seasonality</span>
                        </label>
                        <select name="season" className="select select-bordered w-full text-[#657a42] font-Roboto text-xs md:text-base">
                            <option disabled selected>Season</option>
                            <option>Summer</option>
                            <option>Winter</option>
                            <option>Monsoon</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42] font-Montserrat">Travel Time</span>
                        </label>
                        <input type="text" name="travelTime" placeholder="some - some days" className="input input-bordered text-[#657a42] text-xs md:text-base font-Roboto" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42] font-Montserrat">Average Cost ($)</span>
                        </label>
                        <input type="text" name="avgCost" placeholder="Give the avg. cost" className="input input-bordered text-[#657a42] text-xs md:text-base font-Roboto" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42] font-Montserrat">Total Visitors Per Year</span>
                        </label>
                        <input type="text" name="visitors" placeholder="10000000" className="input input-bordered text-[#657a42] text-xs md:text-base font-Roboto" required />
                    </div>
                </div>
                <input className="font-Montserrat btn bg-[#657a42] text-white hover:bg-transparent hover:border-[#657a42] hover:text-[#657a42] hover:border-2" type="submit" value="Add Now" />
            </form>
        </div>
    );
};

export default AddTouristsSpot;