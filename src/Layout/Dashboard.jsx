import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-600">
                <ul className="menu p-4">
                <li>
                    <NavLink to ="/dashboard/userhome">                  
                   <FaHome className="text-2xl"></FaHome>
                   UserHome</NavLink>
                   </li>
                  
                 <li>
                    <NavLink to ="/dashboard/reservation ">                  
                   <FaCalendar className="text-2xl"></FaCalendar>
                   Reservation</NavLink>
                   </li>
                 <li>
                    <NavLink to ="/dashboard/cart ">                  
                   <FaShoppingCart className="text-2xl"></FaShoppingCart>
                   My Cart</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/review">                  
                   <FaAd className="text-2xl"></FaAd>
                   Add a Review</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/bookings">                  
                   <FaList className="text-2xl"></FaList>
                  My Bookings</NavLink>
                   </li>

                </ul>

            </div>
            {/* dashboard content */}
            <div className="felx-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;