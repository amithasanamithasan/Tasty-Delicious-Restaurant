import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import cat1 from"../../../assets/home/slide1.jpg"
import cat2 from"../../../assets/home/slide2.jpg"
import cat3 from"../../../assets/home/slide3.jpg"
import cat4 from"../../../assets/home/slide4.jpg"
import cat5 from"../../../assets/home/slide5.jpg"



const Category = () => {
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
        <SwiperSlide>
            <img src={cat1} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-12 text-white'>SALAD</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={cat2} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-12 text-yellow-400'>PIZZAS</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={cat3} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-12 text-orange-500'>SOUPS</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={cat4} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-12 text-pink-800'>DESSERTS</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={cat5} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-12 text-purple-900'>SALAD</h3>
        </SwiperSlide>
   
      </Swiper>
    );
};

export default Category;