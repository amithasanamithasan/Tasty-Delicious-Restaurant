import { Link } from "react-router-dom";
import logo1 from"../../../assets/logo1.jpg"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";



const Navbar = () => {
// const[success,setSuccess]=useState();
  const{user,logOut }=useContext(AuthContext)

  const [isAdmin]=useAdmin();

  const[cart]=useCart();


  const handelLogout=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error)
     
    })
  }
 const navlink = <>
   <li><Link className=" md:text-2xl" to="/"> HOME</Link></li>

  <li><Link className="   md:text-2xl" to="/contact">CONTACT US</Link></li>

  <li><Link className=" md:text-2xl" to="/ourmenu">OUR MENU</Link></li>
  


    {
      user && isAdmin && <li ><Link to="/dashboard/adminHome">DASHBOARD
      </Link></li> 
      
    }
    {

      user && !isAdmin && <li><Link  className="md:text-2xl" to="/dashboard/userHome text-indigo-700 ">Dashboard</Link></li> 
    }
   
    <li>
      <Link to="/dashboard/cart"><button className="btn">
      <TiShoppingCart  className="mr-2 text-2xl"/>
  <div className="badge badge-secondary">+{cart.length}</div>
</button></Link>
      </li>
   { 
   user? <>
   {/* <span>{user?.displayName}</span> */}
   <button onClick={handelLogout} className="btn btn-accent md:text-2xl text-indigo-700 ">LogOut</button>
   </>
   :
   <>
   <li><Link className=" btn btn-outline md:text-2xl text-indigo-700" to="/login">Log In</Link></li>
   </>
  
  }
   
 
 
      </>


    return (
        <div>
        <div className="navbar fixed z-10 bg-opacity-70 bg-black max-w-screen-full mx-auto  ">
   <div className="navbar-start">
     <div className="dropdown">
       <div tabIndex={0} role="button" className="btn bg-stone-700 lg:hidden">
       
       
 
       </div>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4
    z-[3] p-3 shadow bg-amber-300 rounded-box w-80">
         
       {navlink}
       </ul>
     </div>
     
     <Link to="/">
 
   <img className="w-[90px] avatar rounded-r-full" src={logo1} alt=""></img></Link> 
   </div> 
   
   <div className="navbar-center hidden lg:flex">
     <ul className="menu menu-horizontal px-1 font-bold text-indigo-700">
     {navlink}
     </ul>
   </div>
   
   <div className="navbar-end">
   <button className="btn btn-outline btn-warning md:text-2xl">Appoinment</button>

   </div>
 </div>
    </div>
    );
};

export default Navbar;