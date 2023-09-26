import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import {useSelector} from "react-redux";
export default function Cart({cartOpen,cartCount,setCartOpen}) {
    const carts = useSelector(state => state.Cart.cart)
    console.log(carts)
    const dispatch = useDispatch()
    return (
        <div className={`fixed top-0 right-0 w-full md:w-64 h-screen transition-transform z-[6000] ${cartOpen ? "translate-x-0":"translate-x-full"}`}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
            <ul className="space-y-2 text-black">
                <li className='text-start font-semibold text-[20px] flex justify-between items-center'>
                    Cart - {cartCount}
                        <IconButton aria-label="delete" size="large" onClick={()=>setCartOpen(false)}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                </li>
                <hr/>
            </ul>
        </div>
    </div>
);
}