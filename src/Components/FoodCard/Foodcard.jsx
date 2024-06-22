import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";


const Foodcard = ({item}) => {
    const {name,image,price,recipe}=item;
    const{user}=useAuth();
    const navigate=useNavigate();
    const handleAddToCart=food=>{
    if(user&&user.email){
      //to  send cart item to the database
    }
    else{
      Swal.fire({
        title: "You are not Logged In?",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,LogIn!"
      }).then((result) => {
        if (result.isConfirmed) {
          // send user to the login page
          navigate('/login')

          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success"
          // });
        }
      });
    }
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img className="rounded-lg" src={image}alt="Shoes" /></figure>
        <p className=" absolute right-0 bg-black text-white text-2xl top-4 mx-4  "> PRICE:${price}</p>
        <div className="card-body flex flex-col items-center ">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
         
          <div className="card-actions justify-end">
            <button onClick={()=>handleAddToCart(item)} className=" btn-warning btn btn-outline border-0 border-b-4 mt-4 justify-center">Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default Foodcard;