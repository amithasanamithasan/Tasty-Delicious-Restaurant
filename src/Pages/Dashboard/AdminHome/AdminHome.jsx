import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { TbMoneybag } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { PiCarProfileDuotone } from "react-icons/pi";


const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {}, isLoading, isError } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading stats.</div>;
    }

    return (
        <div >
            <h1 className="text-3xl">Hi ,THIS IS ADMIN HOME PAGE <br />
            
         <span>Admin Name:</span>
         <span className="text-4xl flex"> {user?.displayName ? user.displayName : 'Back'}</span>   

            </h1>
            <h3 className="text-4xl  flex">{user.email}</h3>
         
               
        <div>
          
         
            <div className="stats shadow  py-20 ">
                <div className="stat bg-violet-500">
                    <div className="stat-figure text-secondary">
                    <TbMoneybag className="text-5xl" />
                    </div>
                    <div className="stat-title text-3xl text-lime-400 font-mono font-bold">REVENUE</div>
                    <div className="stat-value">{stats.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat  bg-emerald-500">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-5xl"></FaUsers>
                    </div>
                    <div className="stat-title text-3xl text-green-700 font-mono font-bold">CUSTOMERS</div>
                    <div className="stat-value">{stats.usersCustomers}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat bg-pink-600">
                    <div className="stat-figure text-secondary">
                        <MdProductionQuantityLimits className="text-5xl" />
                    </div>
                    <div className="stat-title text-3xl text-black font-mono font-bold">PRODUCTS</div>
                    <div className="stat-value">{stats.menuItemProducts}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat bg-cyan-600">
                    <div className="stat-figure text-secondary">
                        <PiCarProfileDuotone className="text-5xl" />
                    </div>
                    <div className="stat-title text-3xl text-pink-700 font-mono font-bold">ORDERS</div>
                    <div className="stat-value">{stats.order}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AdminHome;