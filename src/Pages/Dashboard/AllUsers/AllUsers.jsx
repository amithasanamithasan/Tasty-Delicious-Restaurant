import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AllUsers = () => {
const axiosSecure= useAxiosSecure();
    const { data: users =[]} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
       const res= await axiosSecure.get('/users');
        return res.data;
}
      })
    return (
        <div>
            <div className="flex justify-between  my-4 ">
                <h1 className="text-2xl p-8"> All Users</h1>
                <h1 className="text-2xl p-8"> Total Users {users.length}</h1>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>ROLE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
   {
    users.map(user=> <tr key={user._id}>
        <th>1</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>Blue</td>
        <td>Blue</td>
      </tr>)
   }
     
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;