// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {Autoplay, EffectFade, Pagination} from "swiper/modules";
import 'swiper/css/pagination';
import "./hero.css"
import 'swiper/css/effect-fade';

// import required modules
const Hero = () => {
    console.log("hi")
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
                    <img className='img-hero' src="https://images.samsung.com/is/image/samsung/assets/us/09172023/Homepage-Carrier-offers-DSK.jpg?imwidth=1366" alt=""/>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-hero'>
                    <img className='img-hero' src="https://images.samsung.com/is/image/samsung/assets/us/09172023/ClimateWeek23_Desktop_01_Washer-NoCopy.jpg?imwidth=1366" alt=""/>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-hero'>
                    <img className='img-hero' src="https://images.samsung.com/is/image/samsung/assets/us/home/09222023/Tab_S9F_HP_KV_DT_1440x640.jpg?imwidth=1366" alt=""/>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-hero'>
                    <img className='img-hero' src="https://images.samsung.com/is/image/samsung/assets/us/09172023/OdysseyNeoG9-scombanner-NoText.png?imwidth=1366" alt=""/>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Hero;
