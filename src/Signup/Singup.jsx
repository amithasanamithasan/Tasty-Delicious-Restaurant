import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SocialLogin from "../Components/SocialLOgin/SocialLogin";
import Lottie from "lottie-react";
import Login from"../Login.json";


const Singup = () => {
const axiosPublic=useAxiosPublic();

  const {register,handleSubmit, reset,formState: { errors },} = useForm();

  const{createuser , UserupdateProfile}=useContext(AuthContext);

  const navigate=useNavigate();

  const onSubmit = data => {
    // console.log(data);
    createuser(data.email ,data.password)
    .then(result=>{
      const loggeduser=result.user;
      
      console.log(loggeduser);

      UserupdateProfile(data.name,data.photoURL)
      .then(()=>{
    // console.log('User profile info update');
    // create user entry in the data base
    const userInfo = {
      name: data.name,
      email: data.email,
      photoURL: data.photoURL // Include photo URL in user info
    };
axiosPublic.post('/users',userInfo)
.then(res=>{
  console.log('user info',res);
  if (res.data.insertedId){
    console.log('user added the database');
    reset();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Created user successfully",
      showConfirmButton: false,
      timer: 1500
    });
navigate('/');
  }


  else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "User already exists",
      showConfirmButton: false,
      timer: 1500
    });
  }

})
.catch(error=>console.log(error))
});
     
})
.catch(error => console.error(error));
  };

    return (
      <>
         <Helmet>
                <title>Testy_deliciouse|Sign_Up</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign_Up now!</h1>
          <Lottie animationData={ Login} loop={true}></Lottie>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name"  {...register("name",{ required: true,maxLength: 20  })}  placeholder="Enter your name" className="input input-bordered"  />
                {errors.name && <span className="text-red-600">This name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text"   {...register("photoURL",{ required: true  })}  placeholder="Photo URL" className="input input-bordered"  />
                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  name="email" {...register("email",{ required: true })}  placeholder="email" className="input input-bordered"  />
                  {errors.email && <span className="text-red-600">This email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" {...register("password",
                { 
                  required: true,
                  minLength:6,
                  maxLength: 10,
                  pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                  })} 
                   placeholder="password" className="input input-bordered"  />
                {errors.password && <span className="text-red-600">This password field is required</span>}
                {errors.password?.type==="minLength" &&<p className="text-red-600">This password must be 6 characters</p>}
                {errors.password?.type==="maxLength" &&<p className="text-red-600">This password must be 10 characters</p>}
                {errors.password?.type==="pattern" &&<p className="text-red-600">This password must have one Uppercase one lower case one number and one spacial charecter </p>}
                <label className="label">
  
                </label>
              </div>
              <div className="form-control mt-6">
              <input   className="btn btn-primary" type="submit" value="Sign up"></input>
                
              </div>
              <div className="divider divider-success">OR</div>
              <SocialLogin></SocialLogin>
            </form>
            <p className="text-center text-green-500 font-bold text-2xl"> <small> Already register<Link to='/login' className="underline"> Got to Log_In</Link></small></p>
          </div>
        </div>
      </div> 
      </>
    );
};

export default Singup;