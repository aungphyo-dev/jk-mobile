import {supabase} from "../../../services/supabase.js";
import {useEffect, useState} from "react";

const Order = () => {
    const [orders, setOrders] = useState([]);
    const user_id = JSON.parse(localStorage.getItem("sb-lsultulaeaayauzvcajj-auth-token"))?.user.id
    const getOrder = async ()=>{
        const {data} = await supabase.from("order").select().eq("user_id",user_id)
        setOrders(data)
    }
    useEffect(() => {
        getOrder()
    }, []);
    console.log(orders)
    return (
        <div className='bg-transparent p-2 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-2 md:px-5 md:pt-4'>
            {orders?.map(o =>(
                <div key={o.id} className="w-full bg-white flex flex-col md:flex-row rounded px-5 py-2">
                    <div className='flex flex-col gap-2 justify-start'>
                        <div className='flex flex-col gap-y-2 text-start'>
                            <span className='text-[15px] font-semibold'>Order ID</span>
                            {o.id}
                        </div>
                        <div className='flex flex-col gap-y-2 text-start'>
                            <span className='text-[15px] font-semibold'>Items ID</span>
                            {o.items.map(d=><span key={d} className='text-[12px]'>{d}</span>)}
                        </div>
                        <div className='flex flex-col gap-y-2 text-start'>
                            <span className='text-[15px] font-semibold'>Quantity</span>
                            {o.quantity.map(d=><span key={d} className='text-[12px]'>{d}</span>)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Order;
