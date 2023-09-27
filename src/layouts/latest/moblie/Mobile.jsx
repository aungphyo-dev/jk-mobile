
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Card from "../../../components/Card.jsx";
import "../latest.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {supabase} from "../../../../services/supabase.js";
import Loading from "../../Loading/Loading.jsx";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from "@mui/material/Button";
const Mobile = () => {
    const [mobiles,setMobiles] = useState([])
    const [isLoaing, setIsLoaing] = useState(false)
    const getMobiles =async () => {
        setIsLoaing(true)
        const {data} = await supabase.from("products").select().eq("category_id",2).limit(10).order("id",{ascending:false})
        setIsLoaing(false)
        setMobiles(data)
    }
    useEffect(() => {
        getMobiles()
    }, []);
    return (
        <section className='max-w-screen-xl mx-auto pl-3 px-0 md:px-3 h-auto mb-9'>
            <div className='mb-5 flex justify-between items-center pr-3'>
                <h1 className='text-[15px] md:text-[25px] font-semibold leading-[30px]'>Latest Mobile Phone</h1>
                <Link to="/all/phone" className='text-sm'>
                    <Button size={"small"}>
                        See more
                        <KeyboardArrowRightIcon/>
                    </Button>
                </Link>
            </div>
            <div>
                <Swiper
                    slidesPerView={'auto'}
                    grabCursor={true}
                    className="swiper-mobile"
                >
                    {
                        isLoaing && <Loading/>
                    }
                    {
                        !isLoaing && mobiles?.map(mobile=> <SwiperSlide className="swiper-slide-mobile" key={mobile.id}>
                            <Card product={mobile}/>
                        </SwiperSlide> )
                    }

                </Swiper>
            </div>
        </section>
    );
};

export default Mobile;
