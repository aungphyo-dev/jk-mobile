import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {TableFooter, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {supabase} from "../../../services/supabase.js";

const Checkout = () => {
    const [file,setFile] = useState(null)
    const [url,setUrl] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [province, setProvince] = useState("")
    const [city, setCity] = useState("")
    const [area, setArea] = useState("")
    const p = useSelector(state => state.Cart.cart)
    const [total,setTotal]= useState(0)
    const user_id = JSON.parse(localStorage.getItem("sb-lsultulaeaayauzvcajj-auth-token"))?.user.id
    useEffect(()=>{
        setTotal(p?.reduce((pv,cv)=>pv+(cv.price * cv.quantity),0))
    },[p])
    const imagePreview = (file)=>{
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = ()=>{
            setUrl(reader.result)
        }
    }
    useEffect(() => {
        if (file){
            imagePreview(file)
        }
    }, [file]);
    const handleOrder =async () => {
        const fileName = Date.now() + file.name;
        await supabase.storage("products").upload(`payments/${fileName}`, file, {
            cacheControl: '3600',
            upsert: false
        })
        const {data,error} = await supabase.from("order").insert([{
            name,
            phone,
            province,
            city,
            area,
            user_id,
            payment:fileName,
            total_price:total,
            items:[p.map(p=>p.id)]
        }])
        console.log(data,error)
    }
    return (
        <div className='bg-white min-h-screen max-w-screen-2xl mx-auto'>
            <div className="grid grid-cols-10 gap-4 p-3">
                <div className="col-span-10 md:col-span-4">
                    <div className='w-full'>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell colSpan={2}  align="right">Price</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {p.map((p) => (
                                        <TableRow
                                            key={p.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {p.name}
                                            </TableCell>
                                            <TableCell  align="right" colSpan={2}><div className='whitespace-nowrap'>{p.price.toLocaleString("en-US")} MMK</div></TableCell>
                                            <TableCell align="right">{p.quantity}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell  align="right">
                                            Total -
                                        </TableCell>
                                        <TableCell  align="right" colSpan={3}>
                                            {total.toLocaleString("en-US")} MMK
                                        </TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
                <div className='col-span-10 md:col-span-6'>
                    <div className="flex items-center justify-center w-full mb-5">
                        <label htmlFor="dropzone-file" className="relative overflow-hidden  flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center"><span className="font-semibold">Click to upload</span> Your payment screenshot!</p>
                            </div>
                            <input onChange={e=>setFile(e.target.files[0])} id="dropzone-file" type="file" className="hidden" required/>
                            {url && <img src={url} className="z-50 absolute inset-0 pointer-events-none w-full h-full" alt=""/>}
                        </label>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-5'>
                        <TextField value={name} onChange={e=>setName(e.target.value)} required size={"small"} fullWidth variant={"outlined"} label={"Name"}/>
                        <TextField value={phone} onChange={e=>setPhone(e.target.value)} required size={"small"} fullWidth variant={"outlined"} label={"Phone"}/>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-5'>
                        <TextField value={province} onChange={e=>setProvince(e.target.value)} required size={"small"} fullWidth variant={"outlined"} label={"Province"}/>
                        <TextField value={city} onChange={e=>setCity(e.target.value)} required size={"small"} fullWidth variant={"outlined"} label={"City"}/>
                    </div>
                    <div className='grid grid-cols-1 mb-5'>
                        <TextField value={area} onChange={e=>setArea(e.target.value)} required size={"small"} fullWidth variant={"outlined"} label={"Area"}/>
                    </div>
                    <div>
                        <Button variant={"contained"} type={"submit"} fullWidth>
                            Order Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
