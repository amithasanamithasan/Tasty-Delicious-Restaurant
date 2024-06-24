import { FaAd, FaCalendar, FaHome, FaList, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { MdContactPhone, MdOutlineMenuBook } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";


const Dashboard = () => {
    const [cart]=useCart();
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
                   My Cart ({cart.length})</NavLink>
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
      <div className="divider"></div>
<li>
<NavLink to ="/">                  
<FaHome className="text-2xl"></FaHome>
Home</NavLink>
</li>

<li>
<NavLink to ="/order/salad">                  
<MdOutlineMenuBook className="text-2xl" />
Menu</NavLink>
</li>
<li>
<NavLink to ="/Shop">                  
<FaShoppingBag className="text-2xl" />
Shop</NavLink>

</li>
<li>
<NavLink to ="/contact">                  
<MdContactPhone className="text-2xl" />
ontact</NavLink>

</li>

                </ul>

            </div>
        
            {/* dashboard content */}
            <div className="felx-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;