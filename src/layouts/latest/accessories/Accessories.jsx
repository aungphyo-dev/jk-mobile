import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import Card from "../../../components/Card.jsx";
import {useEffect, useState} from "react";
import {supabase} from "../../../../services/supabase.js";
import Loading from "../../Loading/Loading.jsx";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";

const Accessories = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [accessories,setAccessories] = useState([])
    const getAccessories =async () => {
        setIsLoading(true)
        const {data} = await supabase.from("products").select().eq("category_id",4).limit(10).order("id",{ascending:false})
        setAccessories(data)
        setIsLoading(false)
    }
    useEffect(() => {
        getAccessories()
    }, []);
    return (
        <section className='max-w-screen-xl mx-auto pl-3 px-0 md:px-3 h-auto mb-9'>
            <div className='mb-5 flex justify-between items-center pr-3'>
                <h1 className='text-[15px] md:text-[25px] font-semibold leading-[30px]'>Accessories</h1>
                <Link to="/all/accessories" className='text-sm'>
                    <Button size={"small"}>
                        See more
                        <KeyboardArrowRightIcon/>
                    </Button>
                </Link>
            </div>
            <div>
                <Swiper
                    slidesPerView={'auto'}
                    className="swiper-mobile"
                >
                    {
                        isLoading && <Loading/>
                    }
                    {
                        !isLoading && accessories?.map(mobile=> <SwiperSlide className="swiper-slide-mobile" key={mobile.id}>
                            <Card product={mobile}/>
                        </SwiperSlide> )
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Accessories;
