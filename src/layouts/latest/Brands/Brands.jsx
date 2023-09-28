import {Swiper, SwiperSlide} from "swiper/react";
import {Realme,Fujisu,MSI,Xiaomi,Asus,Acer,Apple,Rog,Hp,Google,Honor,Huawei,Sony,Lenovo,Samsung,Oppo,Oneplus,Dell,Vivo} from "../../../assets/icons/index.js";
import './brand.css'
const Brands = () => {
    return (
        <Swiper
            slidesPerView={'auto'}
            className="swiper-brand mb-5"
        >
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Apple} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Xiaomi} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Rog} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Oneplus} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Oppo} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Vivo} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Samsung} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Sony} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Huawei} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Honor} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Google} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Realme} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Asus} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Acer} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Dell} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Hp} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Lenovo} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={Fujisu} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px] shadow-card'>
                    <img src={MSI} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Brands;
