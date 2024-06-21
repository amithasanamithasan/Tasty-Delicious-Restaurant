import Foodcard from "../../../Components/FoodCard/Foodcard";

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Ordertab = ({items}) => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
    return (
   


<div>


  <Swiper
  pagination={pagination}
  modules={[Pagination]}
  className="mySwiper"
>
  <SwiperSlide>
  <div className='grid md:grid-cols-2 gap-10 my-16'>
  {
    items.map(item=> <Foodcard key={item._id} item={item}></Foodcard>)
  }
  </div>
 
  </SwiperSlide>

</Swiper>
 
</div>
    );
};

export default Ordertab;