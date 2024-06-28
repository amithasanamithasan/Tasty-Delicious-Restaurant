import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart,refetch]=useCart();
    const totalPrice=cart.reduce((total,item)=>total+item.price,0)
    const axiosSecure=useAxiosSecure();
    const handelcartdeleted= id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             axiosSecure.delete(`/carts/${id}`)
             .then(res=>{
                if(res.data.dletetedCount>0){
                refetch();
                Swal.fire({
                         title: "Deleted!",
                         text: "Your file has been deleted.",
                         icon: "success"
                         
                       });
                       
                }
             })
            }
          });
    }
    return (
        <div className="p-4">
        <div className="">
            <div className="flex  justify-start  top-20 mb-8 ">
                <h1 className="text-2xl p-4 ">Total Orders: {cart.length}</h1>
           <div>
           <h2 className="text-2xl p-4 ">Total Price: ${totalPrice}</h2>
           </div>
{cart?.length?   <Link to="/dashboard/payment">
<button className="btn btn-success p-4 top-3 mb-8">Pay</button>
</Link>:
<button disabled className="btn btn-success p-4 top-3 mb-8">Pay</button>
}
            </div>
            <table className="w-full bg-black border-3 rounded-lg  overflow-x-auto">
                <thead>
                    <tr>
                          <th className="px-4 py-2 border-b text-white">SL</th>
                        <th className="px-4 py-2 border-b text-white">ITEM IMAGE</th>
                        <th className="px-4 py-2 border-b text-white">ITEM NAME</th>
                        <th className="px-4 py-2 border-b text-white">PRICE</th>
                        <th className="px-4 py-2 border-b text-white">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item,index) => (
                        
                        <tr key={item._id} className="text-center">
                            <th className="text-yellow-600">{index +1}</th>
                            <td className="px-4 py-2 border-b">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mx-auto" />
                            </td>
                            <td className="px-4 py-2 border-b text-white">{item.name}</td>
                            <td className="px-4 py-2 border-b text-white">${item.price}</td>
                            <td className="px-4 py-2 border-b">
                                <button onClick={()=>handelcartdeleted(item._id)} className="bg-red-500 text-white p-2 rounded">
                            
                                <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Cart;