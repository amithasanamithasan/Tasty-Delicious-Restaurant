import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRouts = ({children}) => {
    const{user ,loading}=useContext(AuthContext);
    const location =useLocation();
    if(loading){
        return <span className="loading loading-spinner text-primary"></span>
    }
    if (user?.email){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivetRouts;