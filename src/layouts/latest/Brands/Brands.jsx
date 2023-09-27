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
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Apple} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Xiaomi} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Rog} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Oneplus} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Oppo} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Vivo} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Samsung} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Sony} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Huawei} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Honor} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Google} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Realme} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Asus} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Acer} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Dell} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Hp} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Lenovo} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={Fujisu} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-brand'>
                <div className='p-4 bg-white rounded-2xl w-[67px]'>
                    <img src={MSI} className='img-brand' alt=""/>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Brands;
