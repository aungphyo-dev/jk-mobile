import {useCallback, useEffect, useState} from "react";
import {supabase} from "../../../../services/supabase.js";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Card from "../../../components/Card.jsx";
import "../latest.css"
import {Link} from "react-router-dom";
const Mobile = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [limit,setLimit] = useState(15)
    const [index,setIndex] = useState(0)
    const [category,setCategory] = useState(0)
    const [products,setProducts] = useState(null)
    const [categories,setCategories] = useState(null)
    const getCategories = async ()=>{
        const {data} = await supabase.from("category").select("*")
        setCategories(data)
    }
    const getData = useCallback(async ()=>{
        if (category == 0){
            const {data,error} = await supabase.from("products").select(`*,category(*)`).range(index,limit)
            console.log(data,error)
            setProducts(data)
            setIsLoading(false)
            console.log("yes")
        }else {
            const {data,error} = await supabase.from("products").select(`*,category(*)`).range(index,limit).eq('category_id',category)
            console.log("no")
            console.log(data,error)
            setProducts(data)
            setIsLoading(false)
        }
    },[index,limit,category])
    const handleLess = ()=>{
        setIndex(prevState => {
            if (prevState === 0){
                return 0
            }else {
                return prevState - 15
            }
        })
        setLimit(prevState => {
            if (prevState === 15){
                return 15
            }else {
                return prevState - 15
            }
        })
    }
    const handleMore = ()=>{
        setIndex(prevState => prevState + 15)
        setLimit(prevState =>prevState + 15)
    }
    useEffect(() => {
        getCategories()
    }, []);
    useEffect(() => {
        getData()
    }, [getData]);
    console.log(index,limit)
    return (
        <section className='max-w-screen-xl mx-auto pl-3 px-0 md:px-3 h-auto mb-9'>
            <div className='mb-5 flex justify-between items-center pr-3'>
                <h1 className='text-[20px] md:text-[25px] font-semibold leading-[30px]'>Latest Mobile Phone</h1>
                <Link to='#' className='text-sm'>
                    See more

                </Link>
            </div>
            <div>
                <Swiper
                    slidesPerView={'auto'}
                    className="swiper-mobile"
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

export default Mobile;
