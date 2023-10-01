import {supabase} from "../../../services/supabase.js";
import {useEffect, useState} from "react";
import {CircularProgress, Dialog, DialogContent} from "@mui/material";

const Profile = () => {
    const [isLoading,setIsLoading] = useState(false)
    const [user, setUser] = useState()
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
            <div className='flex justify-start items-start p-5'>
                <h1>
                    {
                        user?.email
                    }
                </h1>
            </div>
        </section>
    );
};

export default Profile;
