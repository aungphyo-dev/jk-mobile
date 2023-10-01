import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch, useSelector} from "react-redux";
import CartCard from "../../components/CartCard.jsx";
import {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {emptyCart} from "../../../services/cartSlice.js";
import {Link} from "react-router-dom";

export default function Cart({cartOpen,cartCount,setCartOpen}) {
    const dispatch = useDispatch()
    const carts = useSelector(state => state.Cart.cart)
    const [total,setTotal]= useState(0)
    useEffect(()=>{
        setTotal(carts?.reduce((pv,cv)=>pv+(cv.price * cv.quantity),0))
    },[carts])
    return (
        <div className={`fixed top-0 right-0 w-full md:w-80 transition-transform z-[6000] ${cartOpen ? "translate-x-0":"translate-x-full"}`}>
        <div className="w-full  px-3 py-4 overflow-y-auto bg-gray-50">
            <div className="w-full text-black h-screen flex flex-col gap-y-3">
                <div className='w-full text-start font-semibold text-[20px] flex justify-between items-center'>
                    Cart - {cartCount}
                        <IconButton aria-label="delete" onClick={()=>setCartOpen(false)}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                </div>
                <hr/>
                {
                    carts.length > 0 && carts.map(cart=><CartCard key={cart.id} setCartOpen={setCartOpen} cart={cart}/>)
                }
                {cartCount > 0 && <div className='mt-auto w-full mb-2'>
                    <hr/>
                    <div className='py-3 w-full flex justify-between items-center'>
                        <span>Total : </span>
                        <span>{total.toLocaleString('en-US')} MMK</span>
                    </div>
                    <div className='w-full mb-11'>
                        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                            <Button onClick={() => {
                                setCartOpen(false)
                                dispatch(emptyCart())
                            }}>Empty cart</Button>
                            <Button onClick={()=>setCartOpen(false)}>
                                <Link to='/checkout'>
                                    Check out
                                </Link>
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>}
            </div>
        </div>
    </div>
);
}