import {supabase} from "../../../services/supabase.js";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save.js";

const Register = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [province, setProvince] = useState("")
    const [city, setCity] = useState("")
    const [area, setArea] = useState("")
    const register = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const {error} = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {data: {name, phone, province, city, area, address: `${province}-${city}-${area}`}}
            }
        )
        setIsLoading(false)
        if (error === null) {
            setError(false)
            setName("")
            setEmail("")
            setProvince("")
            setPassword("")
            setCity("")
            setArea("")
            setPhone("")
            navigate("/")
        } else {
            setError(true)
        }
        console.log(error)
    }
    return (
        <section className='max-w-screen-xl min-h-screen px-3 flex justify-center items-start'>
            <main
                className="w-full flex items-center justify-center py-8"
            >
                <div className="w-full md:w-auto">
                    <div className="text-center">
                        <h1
                            className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                        >
                            Welcome to JK Mobile
                        </h1>

                        <p className="mt-4 leading-relaxed text-gray-500">
                            Register your account!
                        </p>
                    </div>

                    <form onSubmit={register} className="mt-8 grid grid-cols-6 gap-6">
                        {
                            error && <div className="col-span-6 rounded border-s-4 border-red-500 bg-red-50 p-4">
                                <div className="flex items-center gap-2 text-red-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <strong className="block font-medium"> Something went wrong </strong>
                                </div>
                            </div>
                        }
                        <div className="col-span-6 sm:col-span-3">
                            <TextField  value={name} onChange={(e)=>setName(e.target.value)}  fullWidth label="Name" variant="standard" required />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextField  value={email} onChange={(e)=>setEmail(e.target.value)}  fullWidth label="Email" variant="standard" required />
                        </div>

                        <div className="col-span-6">
                            <TextField type={"password"} value={password} onChange={(e)=>setPassword(e.target.value)}  fullWidth label="Password" variant="standard" required />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <TextField  value={phone} onChange={(e)=>setPhone(e.target.value)}  fullWidth label="Phone" variant="standard" required />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <TextField  value={province} onChange={(e)=>setProvince(e.target.value)}  fullWidth label="Province" variant="standard" required />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <TextField  value={city} onChange={(e)=>setCity(e.target.value)}  fullWidth label="City" variant="standard" required />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <TextField  value={area} onChange={(e)=>setArea(e.target.value)} fullWidth label="Area" variant="standard" required />
                        </div>
                        <div className="col-span-6 sm:flex sm:items-center justify-between sm:gap-4">
                            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                Already have an account?
                                <Link to='/signin' className="text-gray-700 underline">Log in</Link>.
                            </p>
                            {isLoading ? <LoadingButton
                                loading
                                loadingPosition="start"
                                startIcon={<SaveIcon />}
                                variant="outlined"
                            >
                                Waiting
                            </LoadingButton>:<Button type={"submit"} variant={"contained"}>
                                Register
                            </Button>}
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
};

export default Register;
