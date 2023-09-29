import {object} from "prop-types"
import {Link} from "react-router-dom";
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
const Card = ({product}) => {
    return (
        <div className='shadow-card w-[180px] lg:w-[227px] lg:h-[360px] rounded-2xl bg-white flex flex-col justify-start items-center'>
            <div className='pt-4 pb-2 px-3 text-[#F11E1E] w-full'>
                <h1>New</h1>
            </div>
            <div className='px-5'>
                <h1 className='text-[14px] text-center font-semibold text-black mb-2 line-clamp-2'>
                    {product?.name}
                </h1>
                <Link to={`/detail/${product.id}`}>
                    <img className='img-mobile block mx-auto w-[75px] h-[80px] lg:w-[130px] lg:h-[167px] object-contain mb-1' src={`https://lsultulaeaayauzvcajj.supabase.co/storage/v1/object/public/products/items/${product?.image}`} alt=""/>
                </Link>
                <h1 className='text-[13px] font-semibold text-black text-center mb-3'>{product?.price.toLocaleString('en-US')} MMK</h1>
                <div className="w-full flex justify-center items-center mb-2">
                    <Rating size={"small"} name="read-only" value={4.5}  precision={0.5}  readOnly/>
                </div>
            </div>
            <div className='px-3 w-full flex justify-between items-center mt-auto mb-3'>
                {
                    (Number(product.stock) > 0) ? <h1 className='text-[11px]'>In stock {product.stock}</h1>:<h1 className='text-[11px] text-red-500'>Sold out</h1>
                }
               <Button size={"small"} variant="contained">
                   <Link to={`/detail/${product.id}`}>
                       Buy
                   </Link>
               </Button>
            </div>
        </div>
    );
};
Card.propTypes = {
    product:object
}

export default Card;
