import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { logIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
                Swal.fire({
                    position: 'top-right',
                    title: `success`,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => console.error(error))

    };

    const handleLogin = async event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    position: 'top-right',
                    title: `success`,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
                Swal.fire({
                    position: 'top-right',
                    title: `email and password dose not match`,
                    icon: 'warning',
                    showConfirmButton: false,
                    timer: 2000
                })
            })

    }

    return (
        <div className="container mx-auto">
            <section className="">
                <div className="container h-full px-6 py-12 lg:py-24">
                    <div
                        className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone image" />
                        </div>

                        <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                            <form onSubmit={handleLogin}>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label

                                    >
                                        Email address
                                    </label>

                                    <input name="email"
                                        type="text"
                                        className="peer hover:bg-gray-200 block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active] motion-reduce:transition-none dark:text-neutral-200  [&:not([data-te-input-placeholder-active])]"
                                        id="exampleFormControlInput3"
                                        placeholder="Email address" />

                                </div>

                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label

                                    >Password
                                    </label>
                                    <input name="password"
                                        type={showPassword ? "text" : "password"}
                                        className="peer hover:bg-gray-200 block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]motion-reduce:transition-none dark:text-neutral-200  [&:not([data-te-input-placeholder-active])]"
                                        id="exampleFormControlInput33"
                                        placeholder="Password" />
                                    <span className="absolute top-9 right-3" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>

                                </div>
                                <button
                                    type="submit"
                                    className="w-full shadow-lg hover:shadow-sky-600 bg-blue-500 font-semibold text-lg py-2 rounded-md border border-black text-white hover:bg-blue-700"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Log In
                                </button>

                                <div
                                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p
                                        className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                        OR
                                    </p>
                                </div>
                            </form>
                            <div className="flex flex-col items-center ">
                                <button onClick={handleGoogleLogin}
                                    className="w-full  font-bold border hover:border-green-200 hover:shadow-lg rounded-lg py-3  text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none  focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-white p-2 rounded-full">
                                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4" />
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853" />
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04" />
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335" />
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Log In with Google
                                    </span>
                                </button>

                            </div>


                            <p className="text-center mt-5">If there is no account<Link to={'/register'} className="text-base hover:text-blue-600 hover:underline hover:font-semibold"> Registration</Link></p>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;