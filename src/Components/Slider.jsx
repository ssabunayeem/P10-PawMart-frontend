import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div className=''>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img className='w-full h-[700px] object-cover' src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[700px] object-cover' src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[700px] object-cover' src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[700px] object-cover' src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[700px] object-cover' src={img5} alt="" /></SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Slider;