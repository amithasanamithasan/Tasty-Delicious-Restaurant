import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaPhone } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { MdAccountBalanceWallet } from "react-icons/md";


const UserHome = () => {
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure();

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
        <div>
         <div>
         <h2 className="text-3xl"> Hi,Welcome your Dashboard your Name:{user.displayName}</h2>
         <h3 className="text-4xl text-center text-green-800 font-serif font-light "> Email:{user.email}</h3>
         <div className="avater">
         <img className="w-40 h-30 mb-7 rounded-full shadow-lg mx-auto m-4 "src={user.photoURL} alt="Bonnie image"/>
         </div>

         </div>
         <div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-secondary">
    <MdAccountBalanceWallet className="text-3xl" />
    </div>
    <div className="stat-title">MENU</div>
    <div className="stat-value">{stats.menuItemProducts}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-green-800">
     <FaShop className="text-3xl"></FaShop>
    </div>
    <div className="stat-title">SHOP</div>
    <div className="stat-value">{stats.order}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-yellow-400">
    <FaPhone className="text-3xl"></FaPhone>
    </div>
    <div className="stat-title">CONTACT</div>
    <div className="stat-value">3</div>
    <div className="stat-desc">↘︎</div>
  </div>
</div>
          
        </div>
    );
};

export default UserHome;