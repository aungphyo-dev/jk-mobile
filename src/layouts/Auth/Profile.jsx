import {supabase} from "../../../services/supabase.js";
import {useEffect, useState} from "react";
import {CircularProgress, Dialog, DialogContent} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink, Outlet, useNavigate} from "react-router-dom";
const Profile = () => {
    const nav = useNavigate()
    const [isLoading,setIsLoading] = useState(false)
    const [user, setUser] = useState()
    const logout =async () => {
        const {error} = await supabase.auth.signOut()
        if (error === null){
            nav("/")
        }
    }
    const getUser =async () => {
        setIsLoading(true)
        const {data :{user},error} = await supabase.auth.getUser()
        if (error === null){
            setUser(user)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getUser()
    }, []);
    return (
        <section className='max-w-screen-xl min-h-screen'>
            {
                isLoading &&
                <Dialog
                    open={isLoading}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <CircularProgress color="primary" />
                    </DialogContent>
                </Dialog>

            }
            <div className="w-full p-5 text-[20px] font-semibold bg-[#FAE9CF]">My Account</div>
            <div className='w-full flex justify-start items-start pb-5'>
                   <div className={`flex w-[45px] md:w-44 flex-col items-center overflow-hidden text-black bg-white h-screen px-0 md:px-3`}>
                           <div className="w-full flex flex-col items-center px-1 md:px-0">
                               <NavLink to={`/profile/${user?.id}`} className="flex items-center justify-center md:justify-start w-full h-12 px-0  md:px-3 mt-2 rounded md:hover:bg-gray-200 md:hover:text-gray-800">
                                   <ShoppingCartIcon/>
                                   <span className="ml-1 text-sm md:block hidden font-medium">Order</span>
                               </NavLink>
                               <NavLink to={`/profile/${user?.id}/detail`} className="flex items-center justify-center md:justify-start w-full h-12 px-0  md:px-3 mt-2 rounded md:hover:bg-gray-200 md:hover:text-gray-800">
                                   <PersonIcon/>
                                   <span className="ml-1 text-sm md:block hidden font-medium">Account</span>
                               </NavLink>
                               <button  onClick={logout} className="flex justify-center items-center md:justify-start w-full h-12 px-0  md:px-3 mt-2 rounded md:hover:bg-gray-200 md:hover:text-gray-800">
                                   <LogoutIcon/>
                                   <span className="ml-1 text-sm md:block hidden font-medium">Logout</span>
                               </button>
                           </div>
                   </div>
                   <div className="w-full min-h-screen">
                       <Outlet/>
                   </div>
            </div>
        </section>
    );
};

export default Profile;
