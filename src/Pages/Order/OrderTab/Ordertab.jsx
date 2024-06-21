import Foodcard from "../../../Components/FoodCard/Foodcard";


const Ordertab = ({items}) => {
    return (
       
    <div className='grid md:grid-cols-2 gap-10 my-16'>
  {
      items.map(item=> <Foodcard key={item._id} item={item}></Foodcard>)
    }
  </div>
      
    );
};

export default Ordertab;