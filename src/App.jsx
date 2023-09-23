import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./layouts/Navbar/Navbar.jsx";
import Home from "./layouts/Home.jsx";
import Detail from "./layouts/Detail/Detail.jsx";

const App = () => {
    return (
        <BrowserRouter>
                <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
