import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {supabase} from "../../../services/supabase.js";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Products = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [limit,setLimit] = useState(15)
    const [index,setIndex] = useState(0)
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

    const getCategories = async ()=>{
        const {data} = await supabase.from("brands").select("*")
        setBrands(data)
        console.log(data)
    }
    const getData = useCallback(async ()=>{
        if (brand === 0){
            const {data,error} = await supabase.from("products").select(`*`).range(index,limit).eq("category_id",category)
            console.log(data,error)
            setProducts(data)
            setIsLoading(false)
            console.log("yes")
        }else {
            const {data,error} = await supabase.from("products").select(`*,category(*)`).range(index,limit).eq('category_id',category).eq("brand_id",brand)
            console.log("no")
            console.log(data,error)
            setProducts(data)
            setIsLoading(false)
        }
    },[index,limit,category,brand])
    const handleLess = ()=>{
        setIndex(prevState => {
            if (prevState === 0){
                return 0
            }else {
                return prevState - 15
            }
        })
        setLimit(prevState => {
            if (prevState === 15){
                return 15
            }else {
                return prevState - 15
            }
        })
    }
    const handleMore = ()=>{
        setIndex(prevState => prevState + 15)
        setLimit(prevState =>prevState + 15)
    }
    useEffect(() => {
        getCategories()
    }, []);
    useEffect(() => {
        getData()
    }, [getData]);
    console.log(index,limit)
    console.log(category)
    return (
        <section>
            <div>
                <FormControl fullWidth>
                    <InputLabel id="demo-select-small-label">Brands</InputLabel>
                    <Select
                        fullWidth
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={brand}
                        type={"number"}
                        label="Brands"
                        onChange={(e)=>setBrand(e.target.value)}
                    >
                        <MenuItem value={0}>
                            <em>Brands</em>
                        </MenuItem>
                        {
                            brands?.map(cate=> <MenuItem key={cate.id} value={cate.id}>{cate.name}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </div>
        </section>);
};

export default Products;
