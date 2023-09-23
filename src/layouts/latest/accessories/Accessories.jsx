import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import Card from "../../../components/Card.jsx";

const Accessories = () => {
    return (
        <section className='max-w-screen-xl mx-auto pl-3 px-0 md:px-3 h-auto mb-9'>
            <div className='mb-5 flex justify-between items-center pr-3'>
                <h1 className='text-[20px] md:text-[25px] font-semibold leading-[30px]'>Accessories</h1>
                <Link to='#' className='text-sm'>
                    See more
                </Link>
            </div>
            <div>
                <Swiper
                    slidesPerView={'auto'}
                    classsName="swiper-slide-mobile"
                >
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Accessories;
