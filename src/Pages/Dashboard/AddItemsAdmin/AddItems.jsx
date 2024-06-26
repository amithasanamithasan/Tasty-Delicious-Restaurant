
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) =>{ 
        
        console.log(data)};
    return (
        <div>
          <SectionTitle heading="ADD AN ITEMS" subHeading="Whats NEW"></SectionTitle>
          <div>
            

<form  onSubmit={handleSubmit(onSubmit)}  className="max-w-md mx-auto">
  
  <div className="relative z-0 w-full mb-10 group">
  <label  className="  text-1xl font-mono text-black-500 dark:text-blue-400 duration-300
  transform -translate-y-10 scale-75 top-6 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
   peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RECIPE NAME</label>
   
      <input type="text" name="name"  {...register("name")}
      className="rounded-lg   py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-b-3
       border-gray-300 appearance-none dark:text-white dark:border-gray-600
        dark:focus:border-blue-500 focus:outline-none " placeholder=" Racipie Name" required />
     
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
 <div className="relative z-0 w-full mb-5 group ">
 <label  className="font-bold absolute text-2xl font-mono  text-black-500 dark:text-gray-400
     duration-300 transform -translate-y-10 scale-75 -top-0 -z-10 origin-[0] peer-focus:start-0 
     rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
     peer-placeholder-shown:scale-100 ">Category</label>
  <select id="countries"  {...register("category")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option value="salad">Salad</option>
  <option value="pizza">Pizza</option>
  <option value="soup">Soup</option>
  <option value="dessert">Dessert</option>
  <option value="drink">Drink</option>
  </select>
 </div>
    <div className="relative z-0 w-full mb-5 group">
    <label  className="font-bold absolute text-2xl font-mono  text-black-500 dark:text-gray-400
     duration-300 transform -translate-y-10 scale-75 -top-0 -z-10 origin-[0] peer-focus:start-0 
     rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
     peer-placeholder-shown:scale-100 
      ">Price</label>

        <input type="text" name="price" {...register("price")}
        className="  py-2 px-2 text-lg rounded-lg
         text-gray-900 bg-transparent border border-b-3 border-gray-300 appearance-none
          dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
          focus:ring-0 focus:border-blue-600 peer" placeholder=" Price" required />
       
    </div>
    <div className="mx-auto w-full">
    <label  className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Recipe Details</label>
    <textarea {...register("recipe")} rows="3" className=" w-full text-sm
     text-gray-900 bg-gray-50 rounded-lg border border-gray-300
      focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
       dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Recipe Details Here..."  required ></textarea>
    </div>
    <div>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Upload file</label>
  <input {...register("image")}  className="block w-full text-sm text-gray-900 border
   border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400
    focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
    aria-describedby="user_avatar_help"  type="file" required></input>
  <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help"  required >A profile picture is useful to confirm your are logged into your account</div>
</div>

  </div>

  <button type="submit" className=" flex text-white bg-orange-950
   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
   font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
    dark:hover:bg-blue-700 dark:focus:ring-orange-950">Add Items   <FaUtensils></FaUtensils> </button>
</form>

          </div>
        </div>
    );
};

export default AddItems;