import {useSelector} from "react-redux";

const Checkout = () => {
    const p = useSelector(state => state.Cart.cart)
    console.log(p)
    return (
        <div>

        </div>
    );
};

export default Checkout;
