import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { MdContactPhone, MdOutlineMenuBook } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [cart]=useCart();
    // TODO: get  isAdmin Value from the database 
    const [isAdmin]=useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-600">
                <ul className="menu p-4">
                    {/* Condition  jodi admin ture mane admin jodi thake thakhole admin dashboard
                     dekhaba na hoel user dashboard dekhabe */}
                    {
                        isAdmin? <>
                              <li>
                    <NavLink to ="/dashboard/adminHome">                  
                   <FaHome className="text-2xl"></FaHome>
                   Admin Home</NavLink>
                   </li>
                  
                 <li>
                    <NavLink to ="/dashboard/addItems">                  
                   <FaUtensils className="text-2xl"></FaUtensils>
                   Add Items</NavLink>
                   </li>
                 <li>
                    <NavLink to ="/dashboard/manageItems">                  
                   <FaBook className="text-2xl"></FaBook>
                   MANAGE ITEMS</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/allUsers">                  
                   <FaUser  className="text-2xl"></FaUser>
                   All Users</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/mybookings">                  
                   <FaBook className="text-2xl"></FaBook>
                  My Bookings</NavLink>
                   </li>
                        </>
                        :
                        <>
                              <li>
                    <NavLink to ="/dashboard/userHome">                  
                   <FaHome className="text-2xl"></FaHome>
                   User Home</NavLink>
                   </li>
                  
                 <li>
                    <NavLink to ="/dashboard/reservation">                  
                   <FaCalendar className="text-2xl"></FaCalendar>
                   Reservation</NavLink>
                   </li>
                 <li>
                    <NavLink to ="/dashboard/cart">                  
                   <FaShoppingCart className="text-2xl"></FaShoppingCart>
                   My Cart ({cart.length})</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/review">                  
                   <FaAd className="text-2xl"></FaAd>
                   Add a Review</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/paymentHistory">                  
                   <FaList className="text-2xl"></FaList>
                Real Payment History</NavLink>
                   </li>
                        </>
                    }
          
                   {/* sheard nav links */}
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