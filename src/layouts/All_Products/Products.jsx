import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {supabase} from "../../../services/supabase.js";
import ProductCard from "../../components/ProductCard.jsx";
import MenuItem from "@mui/material/MenuItem";
import {Alert, AlertTitle, Backdrop, CircularProgress, Select} from "@mui/material";
import Brands from "../latest/Brands/Brands.jsx";

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
            const {data :products} = await supabase
                .from("products")
                .select('*')
                .range((currentPage - 1) * pageSize, currentPage * pageSize - 1)
                .eq("category_id",category)
            setProducts(products)
            const {count} = await supabase
                .from("products")
                .select("*",{count:"exact"})
                .range((currentPage - 1) * pageSize, currentPage * pageSize - 1)
                .eq("category_id",category)
            setTotalPages(Math.ceil(count / pageSize));
            setIsLoading(false)
        }else {
            const {data:products} = await supabase
                .from("products").select('*')
                .range((currentPage - 1) * pageSize, currentPage * pageSize - 1)
                .eq('category_id',category)
                .eq("brand_id",brand)
            setProducts(products)
            const {count} = await supabase
                .from("products").select("*",{count:"exact"})
                .range((currentPage - 1) * pageSize, currentPage * pageSize - 1)
                .eq('category_id',category)
                .eq("brand_id",brand)
            setTotalPages(Math.ceil(count / pageSize));
            setIsLoading(false)
        }
    },[currentPage,brand,pageSize,category])
    useEffect(() => {
        getBrands()
    }, []);
    useEffect(() => {
        if (brands){
            getData()
        }
    }, [getData,brands]);
    return (
        <section className='max-w-screen-xl mx-auto px-3 min-h-screen pb-9'>
            <div className='bg-white py-2 pt-4 rounded-xl shadow mb-7'>
                <img src={"https://mcareasia.com/wp-content/uploads/2023/04/mCare_Web_Banner_2023.png"} className='h-[200px] md:h-[316px] w-full object-contain md:object-cover' alt=""/>
            </div>
            <div className="mb-5">
                <Brands/>
            </div>
            <div className="grid grid-cols-8 gap-x-4">
                <div className="col-span-8 md:col-span-2">
                    <div className="w-full bg-white mb-5 block md:hidden">
                        <FormControl fullWidth size={"small"}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={brand}
                                onChange={(e)=>setBrand(e.target.value)}
                            >
                                <MenuItem value={0}>All Brands</MenuItem>
                                {brands?.map(b => <MenuItem key={b.id} value={b.id}>{b.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="w-full  bg-white rounded-xl py-2 px-3 hidden md:block">
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Brands</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={brand}
                                onChange={(e)=>setBrand(e.target.value)}
                            >
                                <FormControlLabel value={0} control={<Radio />} label="All brands" />
                                {
                                    brands?.map(b=><FormControlLabel key={b.id} value={b.id} control={<Radio />} label={b.name} />)
                                }
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <div className="col-span-8 md:col-span-6">
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
                        {
                            (!isLoading && products.length === 0 )&&
                                <Alert severity="warning" className={"col-span-2 md:col-span-3 lg:col-span-4"}>
                                    <AlertTitle>Warning</AlertTitle>
                                    This is no item found! — <strong>check it out!</strong>
                                </Alert>

                        }
                        {
                            isLoading &&
                            <Backdrop
                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={isLoading}
                            >
                                <CircularProgress color="inherit" />
                            </Backdrop>

                        }
                        {
                            !isLoading && products?.map(p=><ProductCard key={p.id} product={p}/>)
                        }
                    </div>
                    <div className='w-full flex justify-end items-center'>
                        {(!isLoading && totalPages >1) && <Stack spacing={2}>
                            <Typography>Page: {currentPage}</Typography>
                            <Pagination onClick={window.scroll(0,0)} count={totalPages} variant="outlined" shape="rounded" page={currentPage} onChange={handleChange}/>
                        </Stack>}
                    </div>
                </div>
            </div>
        </section>);
};

export default Products;
