import {object} from "prop-types"
import {Link} from "react-router-dom";
import Rating from '@mui/material/Rating';

const Card = ({product}) => {
    return (
        <div className='w-[227px] h-[360px] rounded-2xl bg-white flex flex-col justify-start items-center'>
            <div className='pt-4 pb-2 px-3 text-[#F11E1E] w-full'>
                <h1>New</h1>
            </div>
            <div className='px-5'>
                <h1 className='text-[14px] text-center font-semibold text-black mb-2'>Iphone 15 Pro max (256GB)</h1>
                <img className='img-mobile block mx-auto w-[130px] h-[167px] object-cover mb-1' src="https://www.apple.com/v/iphone-15-pro/a/images/overview/closer-look/all_colors__eppfcocn9mky_large.jpg" alt=""/>
                <h1 className='text-[13px] font-semibold text-black text-center mb-1'>1,500,000 MMK</h1>
                <div className="w-full flex justify-center items-center">
                    <Rating name="read-only" value={4} readOnly/>
                </div>
            </div>
            <div className='px-3 w-full flex justify-between items-center mt-auto mb-3'>
                <h1 className='text-[11px]'>In stock</h1>
                <Link to="#" className='px-2 py-1 bg-[#46AFFB] rounded-3xl text-[11px] text-white'>
                    Buy
                </Link>
            </div>
        </div>
    );
};
Card.propTypes = {
    product:object
}

export default Card;
