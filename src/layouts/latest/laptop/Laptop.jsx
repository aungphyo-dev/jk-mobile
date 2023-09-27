import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import Card from "../../../components/Card.jsx";
import "../latest.css"
import {useEffect, useState} from "react";
import {supabase} from "../../../../services/supabase.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight.js";
import Button from "@mui/material/Button";
import {Backdrop, CircularProgress} from "@mui/material";
import Loading from "../../Loading/Loading.jsx";
const Laptop = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [laptops,setLaptops] = useState([])
    const getLaptops =async () => {
        setIsLoading(true)
        const {data} = await supabase.from("products").select().eq("category_id",1).limit(10).order("id",{ascending:false})
        setLaptops(data)
        setIsLoading(false)
    }
    useEffect(() => {
        getLaptops()
    }, []);
    return (
        <section className='max-w-screen-xl mx-auto pl-3 px-0 md:px-3 h-auto mb-9'>
            <div className='mb-5 flex justify-between items-center pr-3'>
                <h1 className='text-[15px] md:text-[25px] font-semibold leading-[30px]'>Latest Laptop</h1>
                <Link to="/all/laptop" className='text-sm'>
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
                        isLoading &&
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={isLoading}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>

                    }
                    {
                        isLoading && <Loading/>
                    }
                    {
                        !isLoading && laptops?.map(mobile=> <SwiperSlide className="swiper-slide-mobile" key={mobile.id}>
                            <Card product={mobile}/>
                        </SwiperSlide> )
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Laptop;
