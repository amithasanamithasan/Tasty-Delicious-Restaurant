import { Swiper,  } from 'swiper/react';

import Marquee from "react-fast-marquee";
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import cat1 from"../../../assets/home/slide1.jpg"
import cat2 from"../../../assets/home/slide2.jpg"
import cat3 from"../../../assets/home/slide3.jpg"
import cat4 from"../../../assets/home/slide4.jpg"
import cat5 from"../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Category = () => {
    return (
     <section>
      <SectionTitle       
      subHeading={"From 11am to 10pm"}
      heading={"Order online"}
      >

      </SectionTitle>
         <Swiper
        slidesPerView={3}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
        
        <Marquee Direction:right speed={70}>
            <img src={cat1} alt="" />
          
            <h3 className='text-4xl uppercase text-center -mt-12 text-white'>SALAD</h3>
      
    
            <img src={cat2} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-12 text-yellow-400'>PIZZAS</h3>
   
     
            <img src={cat3} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-12 text-orange-500'>SOUPS</h3>
      
    
            <img src={cat4} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-12 text-pink-800'>DESSERTS</h3>
       
    
            <img src={cat5} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-12 text-purple-900'>SALAD</h3>
      
        </Marquee>
      </Swiper>
     
     </section>
   
    );
};

export default Category;