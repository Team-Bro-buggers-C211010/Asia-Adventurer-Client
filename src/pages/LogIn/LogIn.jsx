import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import loginBG from "../../images/logIn.svg"
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";

const LogIn = () => {
    const naviGate = useNavigate();
    const location = useLocation();
    const [eyeCheck, setEyeCheck] = useState(false);
    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const handleSignIn = e => {
        e.preventDefault();
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
            toast.error("Password should have at least one lowercase character");
            return;
        }
        signInUser(email, password)
            .then(res => {
                e.target.reset();
                naviGate(location?.state ? location.state : "/");
                let timerInterval;
                Swal.fire({
                    title: "Log In Successfully !!!",
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
                toast.error("Invalid Email or Password !!!");
            })
    }
    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        signInWithGoogle()
            .then(res => {
                naviGate(location?.state ? location.state : "/");
                let timerInterval;
                Swal.fire({
                    title: "Log In Successfully !!!",
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
                    title: err.message,
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
    const handleGitHubSignIn = (e) => {
        e.preventDefault();
        signInWithGithub()
            .then(res => {
                naviGate(location?.state ? location.state : "/");
                let timerInterval;
                Swal.fire({
                    title: "Log In Successfully !!!",
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
                    title: err.message,
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
        <div className="bg-cover flex items-center bg-center bg-no-repeat min-h-[calc(100vh-357px)] w-full" style={{ backgroundImage: `url(${loginBG})` }}>
            <div className='backdrop-blur-sm bg-base/30 w-full min-h-[calc(100vh-357px)]'>
                <div className=" hero rounded-2xl md:h-[800px] ">
                    <div className="hero-content flex-col">
                        <div className="text-center md:w-1/2">
                            <h1 className="text-3xl md:text-5xl font-semibold md:font-bold text-[#657a42]">
                                <Typewriter
                                    words={['LogIn now!']}
                                    loop={true}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={80}
                                    deleteSpeed={100}
                                    delaySpeed={1500}
                                />
                            </h1>
                            <p className="py-6 text-[#44483b] text-sm md:text-base">Welcome to our login page! Sign in securely with your username and password.</p>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-[#617844]">
                            <form onSubmit={handleSignIn} className="card-body">
                                <div className="form-control text-xs md:text-base">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered text-xs md:text-base text-base-content" required />
                                </div>
                                <div className="form-control text-xs md:text-base">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={eyeCheck ? "text" : "password"} name="password" placeholder="Password" className="input text-xs md:text-base input-bordered text-base-content" required />
                                    <Link className="absolute right-14 bottom-[245px]  md:bottom-[254px] text-base-content" onClick={() => setEyeCheck(!eyeCheck)}> {eyeCheck ? <LuEyeOff className="w-5 h-5" /> : <LuEye className="w-5 h-5" />} </Link>
                                </div>
                                <div>
                                    <p className="text-xs md:text-base text-base-content">New in Asia Adventurer? <Link to="/register" className="font-bold border-[#657a42] border-dashed text-[#8e9281] hover:font-extrabold">Register Now!</Link></p>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#657a42] text-white hover:bg-transparent hover:border hover:border-[#617844] hover:text-[#617844]">Sign In</button>
                                </div>
                                <div className="divider text-[#657a42] font-medium">OR</div>
                                <div className='flex justify-center gap-x-4'>
                                    <NavLink onClick={handleGoogleSignIn} className="hover:tooltip hover:tooltip-open hover:tooltip-bottom" data-tip="Google" ><FcGoogle className="w-8 h-8 hover:border hover:border-[#657a42] hover:rounded-full hover:p-1" /></NavLink>
                                    <NavLink onClick={handleGitHubSignIn} className="hover:tooltip hover:tooltip-open hover:tooltip-bottom text-base-content" data-tip="GitHub" ><FaGithub className="w-8 h-8 hover:border hover:border-[#657a42] hover:rounded-full hover:p-1" /></NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default LogIn;