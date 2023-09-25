import {useParams} from "react-router-dom";
import {supabase} from "../../../services/supabase.js";
import {useEffect, useState} from "react";
import Rating from "@mui/material/Rating";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../../services/cartSlice.js";

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
        const {data,error} = await supabase.from("products").select(`*,brands(*)`).eq("brand_id",product.brand_id)
        if (error === null){
            setProduct(data[0])
        }
    }
    const Carts = useSelector(state => state.Cart.cart)
    const isExisted = Carts.find(c => c.id.toString() === id.toString() )
    useEffect(() => {
        if (id){
            getProduct()
        }
    }, []);
    return (
        <section className='max-w-screen-xl mx-auto px-3 min-h-screen'>
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
                        {isExisted ? <button onClick={() => {
                            dispatch(removeFromCart(product))
                        }}
                                             className='text-sm px-4 py-2 border border-blue-500 rounded-full text-black text-center'>Remove
                            from cart
                        </button>:<button onClick={() => {
                            dispatch(addToCart(product))
                        }}
                                 className='text-sm px-4 py-2 border border-blue-500 rounded-full text-black text-center'>Add
                            to cart
                        </button>}
                        <button className='text-sm px-4 py-2 bg-blue-500 rounded-full text-white text-center'>Buy it
                            now
                        </button>
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
            </div>}
        </section>
    );
};

export default Detail;
