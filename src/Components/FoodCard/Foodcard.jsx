import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";



const Foodcard = ({item}) => {
    const {name,image,price,recipe,_id}=item;
    const{user}=useAuth();
    const location =useLocation();
    const navigate=useNavigate();
   const  axiosSecure =useAxiosSecure();
   
const[,refetch] = useCart();



    const handleAddToCart=()=>{

    if(user && user.email){
      //to  send cart item to the database
      // console.log(user.email ,food);
      const CartItem ={
        menueId:_id,
        email:user.email,
        name ,
        image,
        price
        
      }
      axiosSecure.post('/carts',CartItem)
.then(res=>{
  console.log(res.data)
  if(res.data.insertedId  ){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${name} cart added successfully`,
      showConfirmButton: false,
      timer: 1500
    });
    // refetch the cart new user cart added refetch 
    // se state take dabase  call kore notun kore update kore falte parche
    refetch();

  }
})


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
          navigate('/login',{state:{from:location}})

         
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