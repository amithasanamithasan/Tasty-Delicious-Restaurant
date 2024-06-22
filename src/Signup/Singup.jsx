import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Singup = () => {
  const {register,handleSubmit,formState: { errors },} = useForm();

  const{createuser}=useContext(AuthContext);

  const onSubmit = data => {
    console.log(data);
    createuser(data.email ,data.password)
    .then(result=>{
      const loggeduser=result.user;
      console.log(loggeduser);
    })
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
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
            </form>
            <p> <small> Already register<Link to='/login'> Got to Log_In</Link></small></p>
          </div>
        </div>
      </div>
      </>
    );
};

export default Singup;