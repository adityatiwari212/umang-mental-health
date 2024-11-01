import React from 'react'
import"../styles/Solutions.css"
import journal from "../../../images/Journal.png"
import meditation from "../../../images/Meditation.jpg"
import self from "../../../images/SelfCare.png"
import mental from "../../../images/Mental.jpg"
import social from "../../../images/SocialConnection.png"
import spirutual from "../../../images/Spirutual.jpg"
import "../styles/button.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper/modules';




function Solutions() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/solutions");
  }

  return (
    <div className='solutions-container'>
        <div className="headline-container">

        <div className="headline">
            <p> Explore Mental Wellness Solutions</p>
        </div>
        <div className="sub-headline">
            <p>Discover a range of tools and practices to enhance your mental well-being. Dive into meditation, journaling, self-care, spiritual practices, and mental therapy to find what works best for you.</p>
        </div>
        <div className="button-wrapper">
  <button className="subscribe-button" onClick={handleClick}>Head to Solutions
  </button>
</div>
        </div>
            <Slider/>
    </div>
  )
}
function Slider(){
    return (
        <>
        <Swiper
          effect={'flip'}
          grabCursor={true}
        //   pagination={true}
        //   navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          loop={true}
          modules={[EffectFlip, Pagination, Navigation , Autoplay]}
          className="mySwiper1"
        >
          <SwiperSlide>
            <img src={meditation} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mental} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={journal} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={self} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={social} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={spirutual} />
          </SwiperSlide>
        </Swiper>
      </>
    )
}
export default Solutions