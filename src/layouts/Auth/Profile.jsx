import {useParams} from "react-router-dom";
import {supabase} from "../../../services/supabase.js";
import {useEffect, useState} from "react";

const Profile = () => {
    const [user, setUser] = useState()
    const getUser =async () => {
        const {data :{user},error} = await supabase.auth.getUser()
        console.log(user)
        if (error === null){
            setUser(user)
        }
    }
    useEffect(() => {
        getUser()
    }, []);
    return (
        <section className='max-w-screen-xl min-h-screen'>
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
