import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLOgin/SocialLogin';
import Lottie from "lottie-react";
import Signin from"../../SignIn.json";


const Login = () => {
  const [setDisable]=useState(true);
const {singIn} =useContext(AuthContext);
const navigate=useNavigate();
const location =useLocation();

const from=location.state?.from?.pathname || "/";
console.log('state in the location login page ',location.state)
    const handelLogin=event=>{

        event.preventDefault();
        const form=event.target;
        const email =form.email.value;
        const password=form.password.value;
        console.log(email,password);
        singIn(email,password)
        .then(result=>{
        const user =result.user;
        Swal.fire({
          title: "User login successfully",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });

        navigate(from,{replace:true});
        })

    }
    useEffect(()=>{
      loadCaptchaEnginge(6); 
    },[])

    const handalevalidate=(e)=>{
      const user_captcha_value =e.target.value
 
      if (validateCaptcha(user_captcha_value)) {
     
  setDisable(false)
    }

    else {
     setDisable(true)
    }
    }
    return (
      <>
             <Helmet>
                <title>Testy_deliciouse|Log_In</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl text-center font-bold">Login now!</h1>
            <Lottie animationData={ Signin} loop={true}></Lottie>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input  onBlur={handalevalidate} type="text" name="chaptha"  className="input input-bordered" placeholder="Enter type text avobe" />
                
              </div>
              <div className="form-control mt-6">
                <input  disabled={false}  className="btn btn-primary" type="submit" value="Login"></input>
              </div>
              <div className="divider divider-accent">OR</div>
           <SocialLogin></SocialLogin>
            </form>
            <p className='text-center text-0  md:text-2xl font-bold font-serif text-sky-600'><small>New here? <Link to="/singup" className='underline text-0 md:text-2xl'>Create an account</Link></small></p>
          </div>
        </div>
      </div>
      </>
    );
};

export default Login;