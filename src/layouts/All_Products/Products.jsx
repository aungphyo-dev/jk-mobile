import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {supabase} from "../../../services/supabase.js";
import './products.css'
import ProductCard from "../../components/ProductCard.jsx";
const Products = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(16);
    const [totalPages, setTotalPages] = useState(0);
    const [category,setCategory] = useState(0)
    const [brand,setBrand] = useState(0)
    const [products,setProducts] = useState(null)
    const [brands,setBrands] = useState(null)
    const {slug} = useParams()
    useEffect(() => {
        if (slug === "phone") {
            setCategory(2)
        } else if (slug === "laptop") {
            setCategory(1)
        } else if (slug === "accessories") {
            setCategory(4)
        } else if (slug === "headphones-speakers") {
            setCategory(3)
        } else {
            setCategory(2)
        }
    }, [slug]);
    const getBrands = async ()=>{
        const {data} = await supabase.from("brands").select("*")
        setBrands(data)
    }
    const handleChange = (event,value) => {
        setCurrentPage(value);
    };
    const getData = useCallback(async ()=>{
        if (brand === 0){
            const {data} = await supabase
                .from("products")
                .select('*')
                .range((currentPage - 1) * pageSize, currentPage * pageSize - 1)
                .eq("category_id",category)
            const {count} = await supabase
                .from("products")
                .select("*",{count:"exact"})
                .range((currentPage - 1) * pageSize, currentPage * pageSize - 1)
                .eq("category_id",category)
            console.log(data)
            setProducts(data)
            setTotalPages(Math.ceil(count / pageSize));
            setIsLoading(false)
            console.log("yes")
        }else {
            const {data} = await supabase
                .from("products").select('*',{count:"exact"})
                .range((currentPage - 1) * pageSize, currentPage * pageSize - 1)
                .eq('category_id',category)
                .eq("brand_id",brand)
            const {count} = await supabase
                .from("products").select("*",{count:"exact"})
                .range((currentPage - 1) * pageSize, currentPage * pageSize - 1)
                .eq('category_id',category)
                .eq("brand_id",brand)
            setProducts(data)
            setTotalPages(Math.ceil(count / pageSize));
            setIsLoading(false)
            console.log("no")
        }
    },[currentPage,brand,pageSize,category])
    useEffect(() => {
        getBrands()
    }, []);
    useEffect(() => {
        getData()
    }, [getData]);
    return (
        <section className='max-w-screen-xl mx-auto px-3 min-h-screen pb-9'>
            <div className='bg-white py-2 pt-4 rounded-xl shadow mb-7'>
                <img src={"https://mcareasia.com/wp-content/uploads/2023/04/mCare_Web_Banner_2023.png"} className='h-[316px] w-full object-cover' alt=""/>
            </div>
            <div className="grid grid-cols-8 gap-x-4">
                <div className="col-span-2 bg-white">
                    <div className="w-full h-full">
                        https
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="w-full grid grid-cols-4 gap-3">
                        {
                            !isLoading && products?.map(p=><ProductCard key={p.id} product={p}/>)
                        }
                    </div>
                    <div>
                        {(!isLoading && totalPages >1) && <Stack spacing={2}>
                            <Typography>Page: {currentPage}</Typography>
                            <Pagination count={totalPages} page={currentPage} onChange={handleChange}/>
                        </Stack>}
                    </div>
                </div>
            </div>
        </section>);
};

export default Products;
