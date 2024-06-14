import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import img from '../../assets/login/login.png'
import { useContext, useState, } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [passwordVisible, setPasswordVisible] = useState(false);


    const from = location?.state?.from?.pathname || '/';

    const onSubmit = data => {
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <div>
            <Helmet>
                <title>SA Camp | Login </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={img} style={{ width: "700px" }} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email && <span className="text">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <div className="relative">
                                    <input type={passwordVisible ? 'text' : 'password'} placeholder="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} className="input input-bordered w-full" />
                                    <span  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400" onClick={togglePasswordVisibility}>{passwordVisible ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                                </div>
                                {errors.password?.type === 'required' && <span className="text-red-700">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-700">Password must be 6 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-700">Password  must have one uppercase one lower case one number and one special characters  20 characters</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white bg-teal-600 hover:bg-teal-900" type="submit" value="Login" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className="p-5"><button className="btn-link"><Link to='/signUp'>SignUp</Link></button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;