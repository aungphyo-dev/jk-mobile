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
            <div>
                <h1 className='text-[15px] md:text-[25px] font-semibold leading-[30px] px-3 mb-5'>Sponsor brands</h1>
                <Brands/>
            </div>
            <Laptop/>
            <Feature/>
            <Accessories/>
            <Speaker/>
        </>
    )
};

export default Home;
