import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../services/cartSlice.js";
import {Link} from "react-router-dom";
const CartCard = ({cart,dec,inc,setCartOpen}) => {
    const [quantity,setQuantity] = useState(1)
    const dispatch = useDispatch()
    const incQuantity = (price) => {
        setQuantity((prevState)=> prevState += 1)
        inc(price)
    }
    const decQuantity = (price) => {
        setQuantity((prevState)=>{
            if (prevState === 1){
                return prevState
            }else {
                return prevState -= 1
            }
        })
        if (quantity > 1){
            dec(price)
        }
    }
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
            <span className="line-clamp-2 leading-2">{cart.name}</span>
            <span className="text-sm">{cart.price} MMK</span>
          </div>
        </Link>
        <ButtonGroup
          variant="outlined"
          fullWidth
          aria-label="outlined button group"
        >
          {quantity > 1 ? (
            <Button onClick={() => decQuantity(cart.price)}>
              <RemoveIcon />
            </Button>
          ) : (
            <Button onClick={() => dispatch(removeFromCart(cart))}>
              <DeleteIcon />
            </Button>
          )}
          <Button>{quantity}</Button>
          <Button onClick={() => incQuantity(cart.price)}>
            <AddIcon />
          </Button>
        </ButtonGroup>
      </div>
    );
};

export default CartCard;
