import {useState} from "react";
import {BiSearch} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";
import {GoPersonFill} from "react-icons/go";
import Cart from "../Cart/Cart.jsx";
import {Link, useNavigate} from "react-router-dom";
import {supabase} from "../../../services/supabase.js";
import {bool} from "prop-types";

const Navbar = ({login,userId}) => {
    const nav = useNavigate()
    const [open, setOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const logout =async () => {
        const {error} = await supabase.auth.signOut()
        if (error === null){
            nav("/")
        }
    }
    return (
        <nav className="border-gray-200">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
                <Link to='/' className="flex items-center">
                    <span className="text-2xl font-semibold whitespace-nowrap tracking-normal">
                        JK
                    </span>
                </Link>
                <div className='flex gap-x-5 order-2'>
                    <button type="button" className="w-[22px] h-[22px] text-center">
                        <BiSearch className='bock w-full h-full'/>
                    </button>
                    <button type="button" className="w-[22px] h-[22px] text-center" onClick={()=>setCartOpen(!cartOpen)}>
                        <FaShoppingCart className='bock w-full h-full'/>
                        <Cart cartOpen={cartOpen} setCartOpen={setCartOpen}/>
                    </button>
                    <div className="relative">
                        <button className='block w-[22px] h-[22px] text-center rounded-full' onClick={() => setOpen(!open)}>
                            <GoPersonFill className='bock w-full h-full'/>
                        </button>
                        <div
                            className={`z-50 right-0 top-7 absolute ${open ? "block" : "hidden"} text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}
                            id="language-dropdown-menu">
                            {
                                !login && <ul className="py-2 font-medium" role="none">
                                    <li onClick={()=>setOpen(false)}>
                                        <Link to='/signin' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                              role="menuitem">
                                            SignIn
                                        </Link>
                                    </li>
                                    <li onClick={()=>setOpen(false)}>
                                        <Link to='/signup' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                              role="menuitem">
                                            SignUp
                                        </Link>
                                    </li>
                                </ul>
                            }
                            {
                                login && <ul className="py-2 font-medium" role="none">
                                    <li onClick={()=>setOpen(false)}>
                                        <Link to={`/profile/${userId}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Profile
                                        </Link>
                                    </li>
                                    <li onClick={()=>setOpen(false)}>
                                        <button onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            SignOut
                                        </button>
                                    </li>
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
Navbar.propTypes = {
    login:bool
}
export default Navbar;
