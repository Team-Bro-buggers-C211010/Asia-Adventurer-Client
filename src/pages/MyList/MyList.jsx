import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import myListBG from "../../images/myListBG.svg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Rotate } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
const MyList = () => {
    const { user } = useContext(AuthContext);
    const [currentData, setCurrentData] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://asia-adventurer-server.vercel.app/all-tourists-spot/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setCurrentData(data);
                setLoading(false);
            })
    }, [])

    if(loading) {
        return <div className="flex justify-center items-center text-[#ccd7af]"><span className="loading loading-bars loading-lg min-h-screen"></span></div>;
    }

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure to delete it ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://asia-adventurer-server.vercel.app/all-tourists-spot/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingSpots = currentData.filter(checkData => id !== checkData._id);
                            setCurrentData(remainingSpots);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
            else {
                Swal.fire({
                    title: "Not Deleted!",
                    text: "Your file has been safe.",
                    icon: "error"
                });
            }
        });
    }

    return (
        <div className="min-h-screen font-Poppins bg-cover bg-no-repeat " style={{ backgroundImage: `url(${myListBG})` }}>
            <Helmet>
                <title>{`Asia Adventurer | ${user.displayName}`}</title>
            </Helmet>
            <div className="backdrop-blur-sm bg-base/20 min-h-screen w-full">
                <h1 className="text-lg md:text-3xl font-bold mt-5 md:mt-8 mb-5 text-[#8e9281] flex justify-center items-center gap-1"> Planner :<Rotate direction="right" triggerOnce="true"><span className="text-[#657a42]">{user.displayName}</span></Rotate></h1>
                <div className="container mx-auto border-2 border-[#8e9281] bg-[#ccd7af] mb-14">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-[#657a42] font-extrabold font-Montserrat">
                                    <th></th>
                                    <th>Image</th>
                                    <th>Tourists Spot Name</th>
                                    <th>Seasonality</th>
                                    <th>Average Cost</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentData.map((tourist, idx) => <tr key={tourist._id} className="hover:bg-[#657a42] font-medium font-Roboto hover:text-white">
                                        <th>{idx + 1}</th>
                                        <td><img src={tourist.photo} className="w-8 h-8 object-cover rounded-full" alt="" /></td>
                                        <td>{tourist.spotName}</td>
                                        <td>{tourist.season}</td>
                                        <td>$ {tourist.avgCost}</td>
                                        <td><Link tourist={tourist} to={`/update-spots/${tourist._id}`}><FaEdit className="w-5 h-5"></FaEdit></Link></td>
                                        <td><button onClick={() => handleDelete(tourist._id)}><MdDelete className="w-5 h-5"></MdDelete></button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyList;