import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./layouts/Navbar/Navbar.jsx";
import Home from "./layouts/Home.jsx";
import Detail from "./layouts/Detail/Detail.jsx";
import Products from "./layouts/All_Products/Products.jsx";
import Register from "./layouts/Auth/Register.jsx";
import Error from "./layouts/Error/Error.jsx";
import Login from "./layouts/Auth/Login.jsx";
import {useState} from "react";
import {supabase} from "../services/supabase.js";

const App = () => {
    const [login,setLogin] = useState(false)
    const Auth = localStorage.getItem("sb-lsultulaeaayauzvcajj-auth-token")
    supabase.auth.onAuthStateChange((event, session) => {
        console.log(session)
        if (session !== null){
            setLogin(true)
        }else {
            setLogin(false)
        }
    })
    return (
        <BrowserRouter>
            <Navbar login={login}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
                <Route path="/all/:slug" element={<Products/>}/>
                <Route path="*" element={<Error/>}/>
                {!Auth && <Route path="/signup" element={<Register/>}/>}
                {!Auth && <Route path="/signin" element={<Login/>}/>}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
