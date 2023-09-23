import Hero from "./hero/Hero.jsx";
import Mobile from "./latest/moblie/Mobile.jsx";
import Laptop from "./latest/laptop/Laptop.jsx";
import Feature from "./Feature/Feature.jsx";
import Accessories from "./latest/accessories/Accessories.jsx";
import Speaker from "./latest/Speaker/Speaker.jsx";

const Home = () => {
    console.log("hi")
    return (
        <>
            <Hero/>
            <Mobile/>
            <Laptop/>
            <Feature/>
            <Accessories/>
            <Speaker/>
        </>
    )
};

export default Home;
