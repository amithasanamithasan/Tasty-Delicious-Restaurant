import { Link } from "react-router-dom";
import logo1 from"../../../assets/logo1.jpg"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";



const Navbar = () => {
  const{user,logOut }=useContext(AuthContext)
  const handelLogout=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error)
     
    })
  }
 const navlink = <>
   <li><Link to="/"> Home</Link></li>
    <li><Link to="/contact">CONTACT us</Link></li>
    <li><Link to="/order">Order</Link></li>
    <li><Link to="/dashboard">DASHBOARD</Link></li>
    <li><Link to="/ourmenu">Our Menu</Link></li>
    <li><Link to="/secret">Secret</Link></li>
   
    <li>
      <Link to="/"><button className="btn">
      <TiShoppingCart  className="mr-2"/>
  <div className="badge badge-secondary">+0</div>
</button></Link>
      </li>
   { 
   user? <>
   {/* <span>{user?.displayName}</span> */}
   <button onClick={handelLogout} className="btn btn-ghost">LogOut</button>
   </>
   :
   <>
   <li><Link to="/login">Log In</Link></li>
   </>
  
  }
   
 
 
      </>


    return (
        <div>
        <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl mx-auto  ">
   <div className="navbar-start">
     <div className="dropdown">
       <div tabIndex={0} role="button" className="btn bg-orange-500 lg:hidden">
       
       
 
       </div>
       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3
        z-[1] p-2 shadow bg-amber-300 rounded-box w-52">
         
       {navlink}
       </ul>
     </div>
     
     <Link to="/">
 
   <img className="w-[90px] avatar rounded-r-full" src={logo1} alt=""></img></Link> 
   </div> 
   
   <div className="navbar-center hidden lg:flex">
     <ul className="menu menu-horizontal px-1 font-bold text-yellow-600">
     {navlink}
     </ul>
   </div>
   
   <div className="navbar-end">
   <button className="btn btn-outline btn-warning">Appoinment</button>
   </div>
 </div>
 
 
 
       </div>
    );
};

export default Navbar;