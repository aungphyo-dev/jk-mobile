import {Link} from "react-router-dom";

const Footer = () => {
    const date = new Date()
    return (
        <footer className="bg-white shadow mx-auto max-w-screen-xl">
            <div className="w-full  p-4 md:flex md:items-center md:justify-between">
                  <span className="text-sm text-gray-500 sm:text-center">
                      © {date.getFullYear()} <Link to="/" className="hover:underline">JKMOBILE™</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
