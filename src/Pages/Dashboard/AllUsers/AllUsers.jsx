import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
const axiosSecure= useAxiosSecure();
    const { data: users =[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
       const res= await axiosSecure.get('/users');
        return res.data;
}
      })

      const handeldelMakeAdmin=user=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
           
        })
      }

      const handeldeleteduser=user=>{
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
             axiosSecure.delete(`/users/${user._id}`)
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
        <div>
            <div className="flex justify-between  my-4 ">
                <h1 className="text-2xl p-8"> All Users</h1>
                <h1 className="text-2xl p-8"> Total Users {users.length}</h1>
            </div>
            <div className="w-ful bg-violet-500 border-3 rounded-lg  overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className="px-4 py-2 border-b text-white">SL</th>
        <th className="px-4 py-2 border-b text-white">NAME</th>
        <th className="px-4 py-2 border-b text-white">EMAIL</th>
        <th className="px-4 py-2 border-b text-white">ROLE</th>
        <th className="px-4 py-2 border-b text-white">ACTION</th>
      </tr>
    </thead>
    <tbody>
   {
    users.map((user,index)=> <tr key={user._id}>
        <th className="px-4 py-2 border-b text-black font-bold">{index +1}</th>
        <td className="px-4 py-2 border-b text-black font-bold">{user.name}</td>
        <td className="px-4 py-2 border-b text-black font-bold">{user.email}</td>
       
        <td>  
            {/* user er role ta jdi admin hoi tahole tumi admin dekhaba 
            na hole take Admin korar button ta dekhaba*/}
    { user.role ==='admin'?'Admin': <button  
onClick={()=>handeldelMakeAdmin(user)} 
className="bg-orange-500
    text-white p-2  rounded">
                    
<FaUsers className="text-2xl"/>
</button>}
        </td>

        <td>
            {/* */}
        <button  
        onClick={()=>handeldeleteduser(user)} 
        className="bg-red-500 text-white p-2 rounded">
                            
        <FaTrashAlt  className="text-white text-1xl"/>
        </button>
        </td>
      </tr>)
   }
     
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;