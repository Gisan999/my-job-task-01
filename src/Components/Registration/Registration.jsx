import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { useForm } from "react-hook-form";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [red, setRed] = useState(false);
    const {registerUser, userUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const handleRegistration = async data => {
     
        const formData = new FormData();
        formData.append('image', data.image[0])
        const res = await axios.post(image_hosting_api, formData)
        const image = res.data.data.display_url;

        if (data.password.length < 6) {
            Swal.fire({
                position: 'center',
                title: 'Password must be at least six digits long',
                icon: 'warning',
                showConfirmButton: false,
                timer: 2000
            })
            return;
        }
        else if (!/[A-Z]/.test(data.password)) {
            Swal.fire({
                position: 'center',
                title: 'Password must be at least one uppercase letter',
                icon: 'warning',
                showConfirmButton: false,
                timer: 2000
            })
            return;
        }
        else if (!/[!@#$%^&*_+?><|/]/.test(data.password)) {
            Swal.fire({
                position: 'center',
                title: 'Password must contain at least one special character',
                icon: 'warning',
                showConfirmButton: false,
                timer: 2000
            })
            return;
        }
       
        
        if(data.pass2 !== data.password){
            setRed(true);
           return    Swal.fire({
            position: 'center',
            title: 'Password does not match',
            icon: 'warning',
            showConfirmButton: false,
            timer: 1000
        })
        }
        setRed(false)
        // console.log(name, photo, email, password, check, pass2);
        registerUser(data.email, data.password)
        .then(result => {
            console.log(result);
            Swal.fire({
                position: 'center',
                title: 'Registration Successfully',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            })
            userUpdate(data.name, image)
            .then(result => {
                console.log(result);
                navigate('/');
                // window.location.reload(false);
            })
            .catch(error => console.error(error))
        })
        .catch(error => {
            console.error(error);
            Swal.fire({
                position: 'center',
                title: 'This email already exists',
                icon: 'warning',
                showConfirmButton: false,
                timer: 2000
            })
        })
    }

    return (
        <div>


            <div className="h-full bg-gray-400 dark:bg-gray-900">
                <div className="mx-auto">
                    <div className="flex justify-center px-6 py-12">
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex ">
                            <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"

                                style={{ backgroundImage: `url('https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1600')` }}

                            ></div>
                            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none lg:py-24">
                                <h3 className="py-4 text-4xl font-bold text-center text-gray-800 dark:text-white">Create an Account!</h3>

                                <form onSubmit={handleSubmit(handleRegistration)} className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                                    <div className="mb-4 md:flex md:justify-center">
                                        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="firstName">
                                                 Name
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="firstName"
                                                type="text"
                                                name="name"
                                                {...register("name")}
                                                required
                                                placeholder=" Name"
                                            />
                                        </div>
                                        <div className="md:ml-2 flex-1">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="lastName">
                                                Photo URL
                                            </label>
                                            <input
                                                className="w-full px-2 py-1.5 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="lastName"
                                                type="file"
                                                name="photo"
                                                {...register("image")}
                                                required
                                                placeholder="Photo URL"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            name="email"
                                            {...register("email")}
                                            required
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="mb-4 md:flex md:justify-around">
                                        <div className="mb-4 md:mr-2 md:mb-0 flex-1 relative">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="password"
                                                required
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                {...register("password")}
                                                placeholder="password"
                                            />
                                                <span className="absolute top-9 right-3" onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                            }
                                        </span>

                                        </div>
                                        <div className="md:ml-2 flex-1 relative">
                                            <label className={`${red ? 'text-red-500' : 'text-gray-700'} block mb-2  text-sm font-bold  `} htmlFor="c_password">
                                                Confirm Password
                                            </label>
                                            <input
                                                className={` w-full ${red ? 'border-red-500 border-2' : ''} px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline `}
                                                id="c_password"
                                                name="pass2"
                                                {...register("pass2")}
                                                required
                                                type={showPassword2 ? "text" : "password"}
                                                placeholder="password"
                                            />
                                              <span className="absolute top-9 right-3" onClick={() => setShowPassword2(!showPassword2)}>
                                            {
                                                showPassword2 ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                            }
                                        </span>
                                        </div>

                                    </div>
                                   
                                    <div className="mb-6 text-center">
                                        <button type="submit"
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                          
                                        >
                                            Register Account
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                  
                                    <div className="text-center">
                                        <p className="inline-block text-sm  dark:text-blue-500 align-baseline "
                                          >
                                            Already have an account?<Link to={'/login'} className="hover:text-blue-800 text-base hover:underline hover:font-semibold"> Login!</Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;