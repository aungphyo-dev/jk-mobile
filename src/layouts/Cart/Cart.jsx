import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useSelector} from "react-redux";
import CartCard from "../../components/CartCard.jsx";
import {useEffect, useState} from "react";
export default function Cart({cartOpen,cartCount,setCartOpen}) {
    const carts = useSelector(state => state.Cart.cart)
    const [total,setTotal]= useState(0)
    useEffect(()=>{
        setTotal(carts?.reduce((pv,cv)=>pv+cv.price,0))
    },[carts])
    console.log(total)
    const incPrice = (price)=>{
        setTotal(total + price)
    }
    const decPrice = (price)=>{
        setTotal(total - price)
    }
    return (
        <div className={`fixed top-0 right-0 w-full md:w-64 h-screen transition-transform z-[6000] ${cartOpen ? "translate-x-0":"translate-x-full"}`}>
        <div className="w-full h-full px-3 py-4 overflow-y-auto bg-gray-50">
            <ul className="w-full space-y-2 text-black h-full   flex flex-col justify-start items-start">
                <li className='w-full text-start font-semibold text-[20px] flex justify-between items-center'>
                    Cart - {cartCount}
                        <IconButton aria-label="delete" onClick={()=>setCartOpen(false)}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                </li>
                <hr/>
                {
                    carts.length > 0 && carts.map(cart=><CartCard key={cart.id} setCartOpen={setCartOpen} cart={cart} inc={incPrice} dec={decPrice}/>)
                }
                <div className='mt-auto w-full'>
                    <hr/>
                    <div className='mt-1'>
                        <span>Total : </span>
                        <span>{total.toLocaleString('en-US')} MMK</span>
                    </div>
                </div>
            </ul>
        </div>
    </div>
);
}