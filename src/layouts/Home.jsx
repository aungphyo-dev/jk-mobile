import Hero from "./Hero/Hero.jsx";
import Mobile from "./latest/moblie/Mobile.jsx";
import Laptop from "./latest/laptop/Laptop.jsx";
import Feature from "./Feature/Feature.jsx";
import Accessories from "./latest/accessories/Accessories.jsx";
import Speaker from "./latest/Speaker/Speaker.jsx";
import Brands from "./latest/Brands/Brands.jsx";

const Home = () => {
    return (
        <>
            <Hero/>
            <Mobile/>
            <Brands/>
            <Laptop/>
            <Feature/>
            <Accessories/>
            <Speaker/>
        </>
    )
};

export default Home;
