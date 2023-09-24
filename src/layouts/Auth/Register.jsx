import {supabase} from "../../../services/supabase.js";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

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
        const {data, error} = await supabase.auth.signUp({
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
        console.log(data, error)
    }
    return (
        <section className='max-w-screen-xl min-h-screen px-3 flex justify-center items-center'>
            <main
                className="flex items-center justify-center py-8"
            >
                <div className="max-w-xl lg:max-w-3xl">
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
                            <label
                                htmlFor="Name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>

                            <input
                                required
                                value={name}
                                onChange={e=>setName(e.target.value)}
                                type="text"
                                id="Name"
                                className="py-1.5 px-2 mt-1 w-full rounded-md border-blue-500 focus:border-blue-500 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>

                            <input
                                required
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                                type="email"
                                id="email"
                                name="email"
                                className="py-1.5 px-2 mt-1 w-full rounded-md border-blue-500 focus:border-blue-500 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>

                            <input
                                required
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                                type="password"
                                id="password"
                                name="password"
                                className="py-1.5 px-2 mt-1 w-full rounded-md border-blue-500 focus:border-blue-500 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone
                            </label>

                            <input
                                required
                                value={phone}
                                onChange={e=>setPhone(e.target.value)}
                                type="text"
                                id="phone"
                                name="phone"
                                className="py-1.5 px-2 mt-1 w-full rounded-md border-blue-500 focus:border-blue-500 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="province"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Province
                            </label>

                            <input
                                required
                                value={province}
                                onChange={e=>setProvince(e.target.value)}
                                type="text"
                                id="province"
                                name="province"
                                className="py-1.5 px-2 mt-1 w-full rounded-md border-blue-500 focus:border-blue-500 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="city"
                                className="block text-sm font-medium text-gray-700"
                            >
                                City
                            </label>

                            <input
                                required
                                value={city}
                                onChange={e=>setCity(e.target.value)}
                                type="text"
                                id="city"
                                name="city"
                                className="py-1.5 px-2 mt-1 w-full rounded-md border-blue-500 focus:border-blue-500 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="area"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Area
                            </label>

                            <input
                                required
                                value={area}
                                onChange={e=>setArea(e.target.value)}
                                type="text"
                                id="area"
                                name="area"
                                className="py-1.5 px-2 mt-1 w-full rounded-md border-blue-500 focus:border-blue-500 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>
                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <button
                                className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                            >
                                Create an account
                            </button>
                            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                Already have an account?
                                <Link to='/signin' className="text-gray-700 underline">Log in</Link>.
                            </p>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
};

export default Register;
