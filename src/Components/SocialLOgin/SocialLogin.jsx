import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const{googleSignIn}=useAuth();
    const axiosPublic=useAxiosPublic()
    const navigate=useNavigate();
    const handelgooglesginin=()=>{
googleSignIn()
.then(result=>{
    console.log(result.user);
    // user social login user existing or not
    const userInfo={
        email: result.user?.email,
        displayname:result.user.displayName
    }
    axiosPublic.post ('/users',userInfo)
    .then(res=>{
        console.log(res.data);
        navigate('/');
    })
})
.catch(error=>console.log(error))
    }
    return (
        <div>
               <div>
              <button  onClick={handelgooglesginin}className="px-2 py-2 border btn btn-outline btn-accent border-green-500  rounded-xl hover:bg-green-500">
          <p className="text-1xl flex  "> <FaGoogle className=" text-1xl"></FaGoogle> Login_with_Google </p>
          </button> 
              </div>
        </div>
    );
};

export default SocialLogin;