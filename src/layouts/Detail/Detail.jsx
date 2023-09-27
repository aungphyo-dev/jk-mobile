import {useParams} from "react-router-dom";
import {supabase} from "../../../services/supabase.js";
import {useEffect, useState} from "react";
import Rating from "@mui/material/Rating";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../../services/cartSlice.js";
import {Swiper, SwiperSlide} from "swiper/react";
import Loading from "../Loading/Loading.jsx";
import Card from "../../components/Card.jsx";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Shop2Icon from '@mui/icons-material/Shop2';
import Skeleton from "@mui/material/Skeleton";
const Detail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState(null)
    const [relatedProducts, setRelatedProducts] = useState([])
    const getProduct =async () => {
        const {data,error} = await supabase.from("products").select(`*,brands(*)`).eq("id",id)
        if (error === null){
            setProduct(data[0])
        }
        setIsLoading(false)
    }
    const getProductRelated =async () => {
        const {data,error} = await supabase.from("products").select(`*,brands(*)`).eq("brand_id",product.brand_id).limit(11)
        if (error === null){
            setRelatedProducts(data)
        }
    }
    const Carts = useSelector(state => state.Cart.cart)
    const isExisted = Carts.find(c => c.id.toString() === id.toString() )
    useEffect(() => {
        if (id){
            getProduct()
        }
    }, [id]);
    useEffect(() => {
        if (product){
            getProductRelated()
        }
    }, [product]);
    return (
        <section className='max-w-screen-xl mx-auto px-3 min-h-screen pb-7'>
            {isLoading && <div className="space-y-2">
                <Skeleton variant="rectangular" height={60} />
                <Skeleton variant="rectangular" height={260} />
                <Skeleton variant="rectangular" height={260} />
            </div>}
            {!isLoading && <div className='grid grid-cols-7 gap-5'>
                <div className='col-span-7 md:col-span-3 lg:col-span-2 bg-white rounded-xl px-4 py-6'>
                    <img className='h-[245px] object-contain mx-auto'
                         src={`https://lsultulaeaayauzvcajj.supabase.co/storage/v1/object/public/products/items/${product?.image}`}
                         alt=""/>
                    <h1 className='text-center mt-3 font-semibold text-[15px]'>{product?.name}</h1>
                </div>
                <div className='col-span-7 md:col-span-4 lg:col-span-3 bg-white rounded-xl px-4 py-6'>
                    <div className='flex justify-between items-center mb-3'>
                        <h1 className='font-semibold text-[17px]'>{product?.name} ({product?.rom} GB)</h1>
                        <h1 className='font-semibold text-[14px] bg-blue-500 px-4 py-1 rounded-full text-white'>
                            {product?.brands.name}
                        </h1>
                    </div>
                    <div className='mb-6'>
                        <Rating name="read-only" value={4} readOnly/>
                    </div>
                    <div className='mb-3'>
                        <span className='font-semibold'>Warranty</span> : {product.warranty ?
                        <span className='text-sm'>{product.warranty} warranty</span> :
                        <span className='text-sm'>Without warranty</span>}
                    </div>
                    <div className='mb-3'>
                        <span className='font-semibold'>Ram</span> : <span className='text-sm'>{product.ram} </span>
                    </div>
                    <div className='mb-3'>
                        <span className='font-semibold'>Rom</span> : <span className='text-sm'>{product.rom} GB</span>
                    </div>
                    <div className='mb-9'>
                        <span className='font-semibold'>Price</span> : <span
                        className='text-sm'>{product.price} MMK</span>
                    </div>
                    <div className='flex justify-end items-center gap-3'>
                        <Button variant="filled" endIcon={<Shop2Icon />}>
                            Buy now
                        </Button>
                        {isExisted ? <Button variant="contained" onClick={()=>dispatch(removeFromCart(product))} endIcon={<RemoveShoppingCartIcon />}>
                            Remove cart
                        </Button>:<Button variant="contained" onClick={()=>dispatch(addToCart(product))} endIcon={<AddShoppingCartIcon />}>
                            Add cart
                        </Button>}
                    </div>
                </div>
                <div className='col-span-7 md:col-span-7 lg:col-span-2 bg-white rounded-xl px-4 py-6'>
                    <div>
                        <h1 className='text-lg font-semibold mb-2'>Delivery</h1>
                        <p className='text-sm mb-4'>
                            Same Day Delivery ဝန်ဆောင်မှုအား (ရန်ကုန်နှင့်မန္တလေး)သာ ရရှိနိုင်ပါသည်။
                            အခြားမြို့များအတွက် မှာယူသည့်နေ့တွင် သက်ဆိုင်ရာ Delivery Service အပ်ပေးပါသည်။
                        </p>
                        <h1 className='text-lg font-semibold mb-2'>Return</h1>
                        <p className='text-sm'>၇ရက်အတွင်းဖြစ်ပေါ်သော မူလချို့ယွင်းမှုများ အတွက် 24နာရီ အတွင်း အာမခံအပြည့်ပါသော ပစ္စည်းများဖြင့် အစားထိုးပေးပါသည်။</p>
                    </div>
                </div>
                <div className="col-span-7">
                    <h1 className='text-xl font-bold'>Description</h1>
                </div>
                <div className="col-span-7 md:col-span-5 bg-white rounded-xl px-4 py-6">
                    {product.specifications}
                </div>
                <div className="col-span-7">
                    <div className='mb-5'>
                        <h1 className='text-xl font-bold'>Related products</h1>
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
                                !isLoading && relatedProducts?.map(mobile=> <SwiperSlide className="swiper-slide-mobile" key={mobile.id}>
                                    <Card product={mobile}/>
                                </SwiperSlide> )
                            }
                        </Swiper>
                    </div>
                </div>
            </div>}
        </section>
    );
};

export default Detail;
