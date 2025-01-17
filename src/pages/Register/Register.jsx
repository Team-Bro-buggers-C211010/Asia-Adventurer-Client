import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import registerBG from "../../images/register.svg"
import { AuthContext } from './../../Providers/AuthProvider';
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";

const Register = () => {
    const location = useLocation();
    const { setUser, setLoading } = useContext(AuthContext);
    const [eyeCheck, setEyeCheck] = useState(false);
    const { createUser } = useContext(AuthContext);
    const naviGate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            toast.error("Password should be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error("Password should have one uppercase character");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error("Password should have at least one lowercase character.");
            return;
        }
        createUser(email, password)
            .then(res => {
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(
                        () => { setUser({ ...res.user, displayName: name, photoURL: photo }); }
                    )
                e.target.reset();
                setLoading(true);
                naviGate(location?.state ? location.state : "/");
                let timerInterval;
                Swal.fire({
                    title: "User register successfully !!!",
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                });
            })
            .catch(err => {
                let timerInterval;
                Swal.fire({
                    title: "Invalid information or user already created !!!",
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                });
            })
    }
    return (
        <div className="bg-cover flex items-center bg-center bg-no-repeat min-h-[calc(100vh-357px)] w-full" style={{ backgroundImage: `url(${registerBG})` }}>
            <div className='backdrop-blur-sm bg-base/30 w-full min-h-[calc(100vh-357px)]'>
                <div className="hero rounded-2xl lg:h-[800px]">
                    <div className="hero-content flex-col">
                        <div className="text-center md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#657a42]">
                                <Typewriter
                                    words={['Register now!']}
                                    loop={true}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={80}
                                    deleteSpeed={100}
                                    delaySpeed={1500}
                                />
                            </h1>
                            <p className="py-6 text-sm md:text-base text-[#44483b]">Welcome to our registration page! Join our platform by creating your account. Fill in your details to get started.</p>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm md:w-1/2 shadow-2xl bg-base-100 border-2 border-[#657a42]">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your name" className="text-xs md:text-base input input-bordered text-base-content" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo url" name="photo" className="input text-xs md:text-base input-bordered w-full max-w-xs text-base-content" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input text-xs md:text-base input-bordered text-base-content" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={eyeCheck ? "text" : "password"} name="password" placeholder="Password" className="input text-xs md:text-base input-bordered text-base-content" required />
                                    <Link className="absolute right-14 bottom-[150px] md:bottom-40 text-base-content" onClick={() => setEyeCheck(!eyeCheck)}> {eyeCheck ? <LuEyeOff className="w-5 h-5" /> : <LuEye className="w-5 h-5" />} </Link>
                                </div>
                                <div>
                                    <p className="text-xs md:text-base text-base-content">Already in family? <Link to="/login" className="font-bold text-[#8e9281] hover:font-extrabold">LogIn Now!</Link></p>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#657a42] text-white hover:bg-transparent hover:border hover:border-[#657a42] hover:text-[#657a42]">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center"></ToastContainer>
        </div>
    );
};

export default Register;