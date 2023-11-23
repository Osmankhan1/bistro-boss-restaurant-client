import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";

const Register = () => {
    const navigate = useNavigate()
    const axiosPublic = UseAxiosPublic();

    const { register, reset, handleSubmit, formState: { errors }, } = useForm();

    const { creatUser, updateUserProfile } = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data)
        creatUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        // create user entry in the database
                        const useInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', useInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added in the database')
                                    reset();
                                    Swal.fire({
                                        title: "Good job!",
                                        text: "You registration is succesfull!",
                                        icon: "success"
                                    });
                                    navigate('/')
                                }
                            })
                    })


            })
            .catch(error => {
                console.error(error)
            })

    }



    return (
        <>
            <Helmet>
                <title>Bristo Boss || Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-700">name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Upload URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-700">photo URl is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-700">email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* )/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Password must be less than 20 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password must be one number, one lowecase, one uppercase and one special character</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <h1 className='text-[#D1A054] text-xl font-medium mt-[20px]'> <Link to='/login'>Already registered? Go to log in</Link></h1>
                        </form>
                        <div className='p-4'>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;