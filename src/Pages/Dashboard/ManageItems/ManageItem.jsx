import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";


const ManageItem = () => {
   const[menu ,refetch ]=useMenu()

    const axiosSecure=useAxiosSecure();
    const handelAdminmanageDelete= async (item) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async(result) => {
            if (result.isConfirmed) {
                try {
      const res= await axiosSecure.delete(`/menu/${item._id}`);

            //  console.log(res.data);
             if(res.data.deletedCount > 0){
                // refetch update to the ui
                await refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${item.name} has been deleted`,
                    showConfirmButton: false,
                    timer: 1500
                 });
                
                           
                    }
           
            }catch (error) {
                console.error("Error deleting item:", error);
             }
             }
          });
    };
    return (
       < div>
       <SectionTitle subHeading="HURRY UP" heading="MANAGE ALL ITEMS"> </SectionTitle>
        <div className="p-4">
        <div className="">
            <div className="flex  justify-start  top-20 mb-8 ">
                <h1 className="text-3xl p-4 font-bold-sm  text-emerald-800 ">TOTAL ITEMS:{menu.length}</h1>
           <div>
          
           </div>
        
            </div>
            <table className="w-full bg-slate-900 border-3 rounded-lg  overflow-x-auto">
                <thead>
                    <tr> 
                
                        <th className="px-4 py-2 border-b text-white">SL</th>
                        <th className="px-4 py-2 border-b text-white">ITEM IMAGE</th>
                        <th className="px-4 py-2 border-b text-white">ITEM NAME</th>
                        <th className="px-4 py-2 border-b text-white">PRICE</th>
                        <th className="px-4 py-2 border-b text-white">ACTION</th>
                        <th className="px-4 py-2 border-b text-white">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {menu.map((item,index) => (
                        
                        <tr key={item._id} className="text-center">
                            <th className="text-yellow-600">{index +1}</th>
                            <td className="px-4 py-2 border-b">
                                <img src={item.image} alt={item.name} className="w-24 h-20 object-cover mx-auto" />
                            </td>
                            <td className="px-4 py-2 border-b text-white">{item.name}</td>
                            <td className="px-4 py-2 border-b text-white">${item.price}</td>
                            <td className="px-4 py-2 border-b">
                                <button  className="bg-yellow-500 text-white p-2 rounded">
                            
                                <FaEdit />
                                </button>
                            </td>
                            <td className="px-4 py-2 border-b">
                                <button onClick={()=>handelAdminmanageDelete(item)} className="bg-red-500 text-white p-2 rounded">
                            
                                <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    </div>
    );
};

export default ManageItem;