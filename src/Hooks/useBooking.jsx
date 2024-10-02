import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useBooking = () => {
    const axiosSecure=useAxiosSecure();
    const { user }= useAuth();

    const { data: booking=[] ,refetch }= useQuery({
        queryKey:['booking', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/reservation?email=${user.email}`);
        
            return res.data
        }
        })
        return [booking, refetch]

};

export default useBooking;