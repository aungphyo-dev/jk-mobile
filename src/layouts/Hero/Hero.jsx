// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {Autoplay, EffectFade, Pagination} from "swiper/modules";
import 'swiper/css/pagination';
import "./hero.css"
import 'swiper/css/effect-fade';
import {IMG1, IMG2, IMG3, IMG4} from "../../assets/images/index.js"
// import required modules
const Hero = () => {
    return (
        <>
            <Swiper
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                slidesPerView={1}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[EffectFade,Autoplay,Pagination]}
                className="swiper-hero mb-5"
            >
                <SwiperSlide className='swiper-slide-hero'>
                    <img className='img-hero' src={IMG1} alt=""/>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-hero'>
                    <img className='img-hero' src={IMG2} alt=""/>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-hero'>
                    <img className='img-hero' src={IMG3} alt=""/>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-hero'>
                    <img className='img-hero' src={IMG4} alt=""/>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Hero;
