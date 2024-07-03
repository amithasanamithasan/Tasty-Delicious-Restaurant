import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { TbMoneybag } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { PiCarProfileDuotone } from "react-icons/pi";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,PieChart, Pie, Legend  } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const AdminHome = () => {
    const { user } = useAuth();
    // console.log('admin image ',user);

    const axiosSecure = useAxiosSecure();

    const { data: stats = {}, isLoading, isError } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
      
        },
    });
    const {data: chartdata =[]}=useQuery({
        queryKey:['order-stats'],
        queryFn: async()=>{
            const res= await axiosSecure.get('/order-stats');
            return res.data
        }
    })

    if (isLoading) {
        return <div>
        <span className="loading loading-ring loading-lg"></span>
        </div>;
    }

    if (isError) {
        return <div>Error loading stats.</div>;
    }
// custom shape for the bar chart
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
 const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
//   custom shape for the pie chart

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const piechartData= chartdata.map(data =>{
    return {name:data.category, value: data.revenue}
    })

    return (
        <div >
           <div>
           <h1 className="text-4xl text-center  text-orange-600 font-serif font-bold">Hi ,THIS IS ADMIN HOME PAGE</h1>
              <p className="text-3xl text-center text-neutral-900 font-semibold">Admin Name:{user?.displayName}</p>
              <h3 className="text-4xl text-center text-green-800 font-serif font-light "> Email:{user.email}</h3>
               
         <img className="w-40 h-30 mb-7 rounded-full shadow-lg mx-auto m-4 "src={user.photoURL} alt="Bonnie image"/>
                          
                    
           </div>      
        <div>
          
         
            <div className="stats shadow  py-5 ">
                <div className="stat bg-violet-500">
                    <div className="stat-figure text-amber-900 bg-amber-500 rounded-lg">
                    <TbMoneybag className="text-5xl" />
                    </div>
                    <div className="stat-title text-3xl text-lime-400 font-mono font-bold">REVENUE</div>
                    <div className="stat-value">{stats.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat  bg-emerald-500">
                    <div className="stat-figure text-sky-900">
                        <FaUsers className="text-5xl"></FaUsers>
                    </div>
                    <div className="stat-title text-3xl text-green-700 font-mono font-bold">CUSTOMERS</div>
                    <div className="stat-value">{stats.usersCustomers}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat bg-pink-600">
                    <div className="stat-figure bg-pink-600 text-black">
                        <MdProductionQuantityLimits className="text-5xl" />
                    </div>
                    <div className="stat-title text-3xl text-black font-mono font-bold">PRODUCTS</div>
                    <div className="stat-value">{stats.menuItemProducts}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat bg-cyan-600">
                    <div className="stat-figure text-black">
                        <PiCarProfileDuotone className="text-5xl " />
                    </div>
                    <div className="stat-title text-3xl text-pink-700 font-mono font-bold">ORDERS</div>
                    <div className="stat-value">{stats.order}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
        <div className="flex">
        <div className="w-1/2">
        <BarChart
      width={500}
      height={300}
      data={chartdata}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartdata.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>
        </div>
         <div className="w-1/2">
         <PieChart width={400} height={400}>
          <Pie
            data={piechartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {piechartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
         </div>
        </div>
        </div>
    );
};

export default AdminHome;