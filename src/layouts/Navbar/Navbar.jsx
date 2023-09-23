import {useState} from "react";
import {BiSearch} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";
import {GoPersonFill} from "react-icons/go";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className="border-gray-200">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
                <a href="#" className="flex items-center">
                    <span className="text-2xl font-semibold whitespace-nowrap tracking-normal">
                        JK
                    </span>
                </a>
                <div className='flex gap-x-5 order-2'>
                    <button type="button" className="w-[22px] h-[22px] text-center">
                        <BiSearch className='bock w-full h-full'/>
                    </button>
                    <button type="button" className="w-[22px] h-[22px] text-center">
                        <FaShoppingCart className='bock w-full h-full'/>
                    </button>
                    <div className="relative">
                        <button className='block w-[22px] h-[22px] text-center rounded-full' onClick={() => setOpen(!open)}>
                            <GoPersonFill className='bock w-full h-full'/>
                        </button>
                        <div
                            className={`z-50 right-0 top-7 absolute ${open ? "block" : "hidden"} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}
                            id="language-dropdown-menu">
                            <ul className="py-2 font-medium" role="none">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                       role="menuitem">
                                        SignIn
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                       role="menuitem">
                                        SignUp
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
