import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";


const Cart = () => {
    const [cart]=useCart();
    const totalPrice=cart.reduce((total,item)=>total+item.price,0)
    return (
        <div className="p-4">
        <div className="">
            <div className="flex  justify-start  top-20 ">
                <h1 className="text-2xl p-4 ">Total Orders: {cart.length}</h1>
           <div>
           <h2 className="text-2xl p-4 ">Total Price: ${totalPrice}</h2>
           </div>
           <button className="btn btn-success p-4 top-3">Pay</button>
            </div>
            <table className="min-w-full bg-white border rounded-lg">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b">ITEM IMAGE</th>
                        <th className="px-4 py-2 border-b">ITEM NAME</th>
                        <th className="px-4 py-2 border-b">PRICE</th>
                        <th className="px-4 py-2 border-b">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item._id} className="text-center">
                            <td className="px-4 py-2 border-b">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mx-auto" />
                            </td>
                            <td className="px-4 py-2 border-b">{item.name}</td>
                            <td className="px-4 py-2 border-b">${item.price}</td>
                            <td className="px-4 py-2 border-b">
                                <button className="bg-red-500 text-white p-2 rounded">
                            
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