import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments=[] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            // console.log('payments', res.data);
            return res.data;
        },

    });

  

    return (
        <div>
            <h2 className="text-2xl">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>SL</th>
        <th>Email</th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
{payments.map((payment,index) =>  <tr key={payment._id}>
        <th>{index +1}</th>
         <th>{payment.email}</th>

        <td>${payment.price}</td>
        <td>{payment.transactionId}</td>
            <td>{payment.date}</td>
        <td>{payment.status}</td>
      </tr>)}
     
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};



export default PaymentHistory;

