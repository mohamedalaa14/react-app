import React ,{ useRef, useState } from 'react'
import '../styles/Communitystyle.css'
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,Autoplay } from "swiper";
function Community() {
    const [swiperRef, setSwiperRef] = useState(null);
    let appendNumber = 6;
    let prependNumber = 1;

   

  return (
    <div className='format'> 
        <p className='title'>Join a community <br></br>of millions</p>
        <p className='p2'>You’re not alone. Two million developers from all over the world visit the React<br></br> docs every month. React is something that people and teams can agree on.</p>
        <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={40}
        loop={true}
        autoplay={{
            delay: 300,
            disableOnInteraction: false}}
        
         
        
        
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='image' alt='react' src='3.png'/></SwiperSlide>
        <SwiperSlide><img className='image' alt='react' src='Screenshot 2023-06-19 021757.png'/></SwiperSlide>
        <SwiperSlide><img className='image'alt='react' src='\Screenshot 2023-06-19 021848.png'/></SwiperSlide>
        <SwiperSlide><img className='image'alt='react' src='3.png'/></SwiperSlide>
        <SwiperSlide><img className='image'alt='react' src='Screenshot 2023-06-19 021757.png'/></SwiperSlide>
        <SwiperSlide><img className='image'alt='react' src='\Screenshot 2023-06-19 021848.png'/></SwiperSlide>
      </Swiper>
      <p>This is why React is more than a library, an architecture, or even an ecosystem.<br></br> React is a community. It’s a place where you can ask for help, find opportunities,<br></br> and meet new friends. You will meet both developers and designers, beginners<br></br> and experts, researchers and artists, teachers and students. Our backgrounds<br></br> may be very different, but React lets us all create user interfaces together.</p>


        {/* <Slider {...settings}>
          <div className='slide'>
          <img alt='react' src='3.png'/>
          </div>
          <div className='slide'>
          <img alt='react' src='Screenshot 2023-06-19 021757.png'/>
          </div>
          <div className='slide'>
          <img alt='react' src='\Screenshot 2023-06-19 021848.png'/>
          </div>
          <div className='slide'>
          <img alt='react' src='3.png'/>
          </div>
          <div className='slide'>
          <img alt='react' src='Screenshot 2023-06-19 021757.png'/>
          </div>
          <div className='slide'>
          <img alt='react' src='\Screenshot 2023-06-19 021848.png'/>
          </div>
        </Slider> */}
    </div>
  )
}

export default Community