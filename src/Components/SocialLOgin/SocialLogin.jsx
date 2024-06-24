import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";


const SocialLogin = () => {
    const{googleSignIn}=useAuth();
    const handelgooglesginin=()=>{
googleSignIn()
.then(result=>{
    console.log(result.user);
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