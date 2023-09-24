import {useEffect, useState} from "react";
import {BiSearch} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";
import {GoPersonFill} from "react-icons/go";
import Cart from "../Cart/Cart.jsx";
import {Link, useNavigate} from "react-router-dom";
import {supabase} from "../../../services/supabase.js";
import {bool} from "prop-types";
import {AiOutlineClose} from "react-icons/ai";
import SearchCard from "../../components/SearchCard.jsx";

const Navbar = ({login,userId}) => {
    const nav = useNavigate()
    const [open, setOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const [filterProducts, setFilterProducts] = useState([])
    const logout =async () => {
        const {error} = await supabase.auth.signOut()
        if (error === null){
            nav("/")
        }
    }
    useEffect(() => {
        if (searchOpen && search.length >= 3){
            setTimeout(async ()=>{
                setIsLoading(true)
                const {data} = await supabase.from("products").select().ilike("name",`%${search}%`).limit(2)
                setIsLoading(false)
                setFilterProducts(data)
            },1500)
        }
    }, [search,searchOpen]);
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
                        <BiSearch className='bock w-full h-full pointer-events-none' onClick={()=>setSearchOpen(true)}/>
                    </button>
                    <button type="button" className="w-[22px] h-[22px] text-center" onClick={()=>setCartOpen(!cartOpen)}>
                        <FaShoppingCart className='bock w-full h-full pointer-events-none'/>
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
            <div className={`pt-4 px-5  pb-7 fixed z-[2000] top-0 right-0 left-0 bg-white transition duration-500 ${searchOpen ? "translate-y-100 opacity-100" : "-translate-y-[155px] opacity-0"}`}>
                <div className='relative'>
                    {!isLoading && <button type={"button"} className='absolute right-0 top-0 p-3' onClick={() => {
                        setSearchOpen(false)
                        setFilterProducts([])
                        setSearch("")
                    }}>
                        <AiOutlineClose className='pointer-events-none'/>
                    </button>}
                    <input value={search} onChange={e=>setSearch(e.target.value)} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer mb-2" placeholder="Search..." required />
                    {isLoading && <svg aria-hidden="true"
                          className="absolute right-1 top-3 w-5 h-5 text-gray-200 animate-spin fill-blue-600"
                          viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"/>
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"/>
                    </svg>}
                    <p className='text-[20px]'>Type for searching your product!</p>
                    <div className='pt-4 pb-6'>
                        {
                            !isLoading && filterProducts?.map(pd=><SearchCard key={pd.id} product={pd} setSearchOpen={setSearchOpen}/>)
                        }
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
