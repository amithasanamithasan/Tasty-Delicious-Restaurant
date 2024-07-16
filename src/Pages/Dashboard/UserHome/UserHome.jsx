import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaCartArrowDown, FaPhone, FaRegStar } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { MdAccountBalanceWallet } from "react-icons/md";
import useCart from "../../../Hooks/useCart";
import { TbBrandBooking } from "react-icons/tb";
import { BsFillCreditCard2BackFill } from "react-icons/bs";


const UserHome = () => {
  const [cart]=useCart();
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments=[] } = useQuery({
    queryKey: ['payments', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
        // console.log('payments', res.data);
        return res.data;
    },

});
  const { data: stats = {}, isLoading, isError } = useQuery({
      queryKey: ['user-stats'],
      queryFn: async () => {
          const res = await axiosSecure.get('/user-stats');
          return res.data;
      },
  });

  if (isLoading) {
      return <div>
          <span className="loading loading-ring loading-lg"></span>
      </div>;
  }

  if (isError) {
      return <div>Error loading stats.</div>;
  }

    return (
      <div className="p-8 ">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl text-orange-600 font-bold font-serif">Hi, Welcome to User Dashboard</h1>
         
      </div>
      
      <div className="flex justify-around mb-8">
          <div className="stat bg-purple-200 p-4 rounded shadow-lg text-center">
              <MdAccountBalanceWallet className="text-3xl mx-auto mb-2" />
              <div className="stat-title">MENU</div>
              <div className="stat-value text-2xl">{stats.menuItemProducts}</div>
          </div>

          <div className="stat bg-yellow-200 p-4 rounded shadow-lg text-center">
              <FaShop className="text-3xl mx-auto mb-2 text-green-800" />
              <div className="stat-title">SHOP</div>
              <div className="stat-value text-2xl">{stats.order}</div>
          </div>

          <div className="stat bg-pink-200 p-4 rounded shadow-lg text-center">
              <FaPhone className="text-3xl mx-auto mb-2 text-yellow-400" />
              <div className="stat-title">CONTACT</div>
              <div className="stat-value text-2xl">3</div>
          </div>
      </div>
      
      <div className="flex ">
        

          <div className="w-[700px] h-[300px]  p-7 bg-orange-300 rounded shadow-lg">
          <div className="w-24 avatar rounded-full">
     
         <img className="w-24 avatar rounded-full shadow-lg mx-auto m-4 "src={user.photoURL} alt="Bonnie image"/>
       </div>
              <div>
              <h2 className="text-3xl mb-2">Name: {user.displayName}</h2>
              <h3 className="text-2xl text-green-800 font-serif">Email: {user.email}</h3>
              
                  {/* <h5 className="text-lg mb-2">Orders</h5> */}
                  {/* Map through the order list */}
                   {/* <ul>
                      {stats.orders.map(order => (
                          <li key={order.id} className="mb-2">
                              {order.details}
                          </li>
                      ))}
                  </ul>  */}
              </div>
              <div>
                  {/* <h5 className="text-lg mb-2">Reviews</h5> */}
                  {/* Map through the review list */}
                  {/* <ul>
                      {stats.reviews.map(review => (
                          <li key={review.id} className="mb-2">
                              {review.details}
                          </li>
                      ))}
                  </ul> */}
              </div>
              <div>
                 {/* <h5 className="text-lg mb-2">Payments</h5>
                  {/* Map through the payment list */}
                  {/* <ul>
  {payments.map(payment => (
    <li key={payment.id} className="mb-2">
      {payment.email}
    </li>
  ))}
</ul>  */}
              </div>
          </div>
          <div className="w-2/3 p-4 bg-green-400 rounded shadow-lg mr-4">
              <h4 className="text-3xl mb-4">Your Activities</h4>
              <ul>
                  <li className="mb-2 flex  text-2xl "> <FaCartArrowDown className="p-0 m-1" /><strong >Orders:</strong> {cart.length}</li>
                  <li className="mb-2 flex  text-2xl"> <FaRegStar className="p-0 m-1"  /><strong>Reviews:</strong> 2</li>
                  <li className="mb-2 flex  text-2xl"><TbBrandBooking  className="p-0 m-1"  /><strong>Bookings: </strong> 1</li>
                  <li className="mb-2 flex  text-2xl">  <BsFillCreditCard2BackFill className="p-0 m-1"  /> <strong>Payments: </strong>{payments.length}</li>
              </ul>
          </div>
      </div>
  </div>
    );
};

export default UserHome;