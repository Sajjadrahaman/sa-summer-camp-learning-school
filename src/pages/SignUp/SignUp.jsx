import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import img from '../../assets/login/login.png'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../shared/SocialLogin/SocialLogin";


const SignUp = () => {

    const { register, watch, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const password = watch('password');


    
    const onSubmit = data => {


        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photo)

                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://sa-summer-camp-server-six.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Sign In Successful',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => console.log(error))

            })

    };



    return (
        <div>
            <Helmet>
                <title>SA Camp | SignUp </title>
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" {...register("name", { required: true })} className="input input-bordered" />
                                {errors.name && <span className="text-red-700">name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" {...register("photo", { required: true })} className="input input-bordered" />
                                {errors.photo && <span className="text-red-700">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email && <span className="text-red-700">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} className="input input-bordered" />

                                {errors.password?.type === 'required' && <span className="text-red-700">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-700">Password must be 6 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-700">Password  must have one uppercase one lower case one number and one special characters  20 characters</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text"  placeholder="confirm password" ref {...register("confirmPassword", { required: true, validate: (value) => value === password || 'Passwords do not match', minLength: 6, pattern: /(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} className="input input-bordered" />

                                {errors.confirmPassword && <span  className="text-red-700">{errors.confirmPassword.message}</span>}

                                {errors.confirmPassword?.type === 'required' && <span className="text-red-700">confirm is required</span>}
                                {errors.confirmPassword?.type === 'minLength' && <span className="text-red-700">confirm must be 6 characters</span>}
                                {errors.confirmPassword?.type === 'pattern' && <span className="text-red-700">confirm  must have one uppercase one lower case one number and one special characters  20 characters</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn text-white bg-teal-600 hover:bg-teal-900" type="submit" value="SignUp" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className="p-5">Already have an account<Link className="btn-link" to='/login'>LogIn</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;