import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {decreaseQuantity, increaseQuantity, removeFromCart} from "../../services/cartSlice.js";
import {Link} from "react-router-dom";
const CartCard = ({cart,setCartOpen}) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(0)
    const products = useSelector(state => state.Cart.cart).filter(p=>p.id === cart.id)[0].quantity
    const stock = useSelector(state => state.Cart.cart).filter(p=>p.id === cart.id)[0].stock
    useEffect(() => {
        setQuantity(products)
    }, [products]);
    return (
      <div className="w-full border py-2 px-3 rounded-xl">
        <Link
          to={`/detail/${cart.id}`}
          onClick={() => setCartOpen(false)}
          className="w-full flex justify-between items-center gap-x-4 mb-2"
        >
          <img
            src={`https://lsultulaeaayauzvcajj.supabase.co/storage/v1/object/public/products/items/${cart.image}`}
            className="w-[30px] h-[40px]"
            alt=""
          />
          <div className="flex flex-col gap-y-1">
            <span className="line-clamp-2 leading-2">
              {cart.name}
            </span>
            <span className="text-sm">{cart.price} MMK</span>
          </div>
        </Link>
        <ButtonGroup
          variant="outlined"
          fullWidth
          aria-label="outlined button group"
        >
          {quantity > 1 ? (
            <Button onClick={() => dispatch(decreaseQuantity(cart))}>
              <RemoveIcon />
            </Button>
          ) : (
            <Button onClick={() => dispatch(removeFromCart(cart))}>
              <DeleteIcon />
            </Button>
          )}
          <Button>{quantity}</Button>
          <Button className={`${stock === quantity && "disabled"}`} onClick={() => dispatch(increaseQuantity(cart))}>
            <AddIcon />
          </Button>
        </ButtonGroup>
      </div>
    );
};

export default CartCard;
