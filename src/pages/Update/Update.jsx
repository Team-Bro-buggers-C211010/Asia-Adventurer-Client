import { useLoaderData } from "react-router-dom";
import update from "../../images/update.svg";
import Swal from "sweetalert2";
const Update = () => {
    const currentData = useLoaderData();
    console.log(currentData);
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const spotName = form.spotName.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const season = form.season.value;
        const travelTime = form.travelTime.value;
        const avgCost = form.avgCost.value;
        const visitors = form.visitors.value;
        const photo = form.photo.value;

        const updateSpot = { spotName, country, location, description, season, travelTime, avgCost, visitors, photo };
        console.log(updateSpot);

        Swal.fire({
            title: "Are you sure to update it ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/all-tourists-spot/${currentData._id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(updateSpot)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your file has been updated.",
                                icon: "success"
                            });
                        }
                        else {
                            Swal.fire({
                                title: "Nothing Changed!",
                                text: "Nothing is updated.",
                                icon: "warning"
                            })
                        }
                    })
            }
        });

    }
    return (
        <div className="container mx-auto mb-14 font-Poppins mt-4 md:mt-12 px-1 md:px-0 flex flex-col justify-center items-center">
            <div><img className="w-48 h-48" src={update} alt="" /></div>
            <form onSubmit={handleUpdate} className="card-body border-2 border[#8e9281] rounded-xl bg-[#ccd7af] border-base-content md:w-2/3 flex mx-auto">
                <h1 className="text-center text-xl mb-2 md:mb-4 md:text-3xl font-extrabold text-[#8e9281]">Update Your Tourists Spot</h1>
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                    <div className="form-control">
                        <label className="label font-bold font-Montserrat">
                            <span className="label-text text-[#657a42]">Tourists Spot Name</span>
                        </label>
                        <input type="text" defaultValue={currentData.spotName} name="spotName" placeholder="Your Fav. Place" className="font-Roboto input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold font-Montserrat">
                            <span className="label-text text-[#657a42]">Country Name</span>
                        </label>
                        <input type="text" defaultValue={currentData.country} name="country" placeholder="Country You Tour" className="font-Roboto input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label font-bold font-Montserrat">
                            <span className="label-text text-[#657a42]">Short Description</span>
                        </label>
                        <textarea defaultValue={currentData.description} name="description" className="font-Roboto textarea textarea-bordered text-[#657a42] text-xs md:text-base" placeholder="Describe the place"></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label font-bold font-Montserrat">
                            <span className="label-text text-[#657a42]">Location</span>
                        </label>
                        <input type="text" defaultValue={currentData.location} name="location" placeholder="Location" className="font-Roboto input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold font-Montserrat">
                            <span className="label-text text-[#657a42]">Tourists Spot Image</span>
                        </label>
                        <input type="text" defaultValue={currentData.photo} name="photo" placeholder="Give the Image URL" className="font-Roboto input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold font-Montserrat">
                            <span className="label-text text-[#657a42]">Seasonality</span>
                        </label>
                        <input type="text" defaultValue={currentData.season} name="season" placeholder="Summer / Winter / Monsoon" className="font-Roboto input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold font-Montserrat">
                            <span className="label-text text-[#657a42]">Travel Time</span>
                        </label>
                        <input type="text" defaultValue={currentData.travelTime} name="travelTime" placeholder="some - some days" className="font-Roboto input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold font-Montserrat">
                            <span className="label-text text-[#657a42]">Average Cost</span>
                        </label>
                        <input type="text" defaultValue={currentData.avgCost} name="avgCost" placeholder="Give the avg. cost" className="font-Roboto input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold font-Montserrat">
                            <span className="label-text text-[#657a42]">Total Visitors Per Year</span>
                        </label>
                        <input type="text" defaultValue={currentData.visitors} name="visitors" placeholder="Visitors" className="font-Roboto input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                </div>
                <input className="font-Montserrat btn bg-[#657a42] text-white hover:bg-transparent hover:border-[#657a42] hover:text-[#657a42] hover:border-2" type="submit" value="Update Now" />
            </form>
        </div>
    );
};

export default Update;