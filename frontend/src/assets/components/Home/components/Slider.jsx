import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, EffectCoverflow, FreeMode, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        // loop={true}
        modules={[EffectCoverflow, Pagination , Autoplay , FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide><Box/></SwiperSlide>
        <SwiperSlide><Box/></SwiperSlide>
        <SwiperSlide><Box/></SwiperSlide>
        <SwiperSlide><Box/></SwiperSlide>
        <SwiperSlide><Box/></SwiperSlide>
        <SwiperSlide><Box/></SwiperSlide>
        <SwiperSlide><Box/></SwiperSlide>
        <SwiperSlide><Box/></SwiperSlide>
        <SwiperSlide><Box/></SwiperSlide>
        <SwiperSlide><Box/></SwiperSlide>
        <SwiperSlide><Box/></SwiperSlide>
        <SwiperSlide><Box/></SwiperSlide>
        
      </Swiper>
    </>
  );
}

function Box(){
   return( 
    <div className="slider-box-container">
        <div className="review">
    <p>Lorem ipsum dolor sit amet abcd adipisicing elit. Vel eum, dolorum quaerat architecto error doloremque sapiente labore sequi molestias optio illo eaque tempore abcd quidem.</p>
        </div>
        <div className="photo-name-location-container">
            <div className="photo">
                <img src="https://i.pinimg.com/originals/ed/18/91/ed189191dc22169f0e6786a85f068616.jpg" alt="" />
            </div>
            <div className="name-location-container">
                <div className="name">
    <p>Lorem, ipsum.</p>
                </div>
                <div className="location">
<p>Lorem, ipsum.</p>
                </div>
            </div>
        </div>
    </div>  )
    
}
