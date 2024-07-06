import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";



const useCart = () => {

const axiosSecure=useAxiosSecure();
// jie user login kora ace shudu tder add fodd cart items gula dekhhabe
// tr jonno useAuth hook dea kaj kora lagbe
const { user }= useAuth();
//    tanstack query
const { data: cart=[] ,refetch }= useQuery({
queryKey:['cart', user?.email],
queryFn: async ()=>{
    const res= await axiosSecure.get(`/carts?email=${user.email}`);
    return res.data
}
})
return [cart, refetch]

};

export default useCart;