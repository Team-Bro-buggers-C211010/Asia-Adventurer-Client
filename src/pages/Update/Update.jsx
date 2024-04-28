
const Update = () => {
    return (
        <div className="container mx-auto mt-4 md:mt-12 px-1 md:px-0">
            <form className="card-body border-2 border[#8e9281] rounded-xl bg-[#ccd7af] border-base-content md:w-2/3 flex mx-auto">
                <h1 className="text-center text-xl mb-2 md:mb-4 md:text-3xl font-extrabold text-[#8e9281]">Update Your Tourists Spot</h1>
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42] ">Your Name</span>
                        </label>
                        <input type="text" name="userName" placeholder="User Name" className="input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42]">Your Email</span>
                        </label>
                        <input type="email" name="userEmail" placeholder="hablu@paglu.com" className="input input-bordered text-[#657a42] text-xs md:text-base" required />
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
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42]">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Location" className="input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42]">Short Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Describe the place" className="input input-bordered text-[#657a42] text-xs md:text-base" required />
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
                            <span className="label-text text-[#657a42]">Average Cost</span>
                        </label>
                        <input type="text" name="avgcost" placeholder="Give the avg. cost" className="input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">
                            <span className="label-text text-[#657a42]">Total Visitors Per Year</span>
                        </label>
                        <input type="text" name="visitors" placeholder="Visitors" className="input input-bordered text-[#657a42] text-xs md:text-base" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label font-bold">
                        <span className="label-text text-[#657a42]">Tourists Spot Image</span>
                    </label>
                    <input type="text" name="photo" placeholder="Give the Image URL" className="input input-bordered text-[#657a42] text-xs md:text-base" required />
                </div>
                <input className="btn bg-[#657a42] text-white hover:bg-transparent hover:border-[#657a42] hover:text-[#657a42] hover:border-2" type="submit" value="Update Now" />
            </form>
        </div>
    );
};

export default Update;