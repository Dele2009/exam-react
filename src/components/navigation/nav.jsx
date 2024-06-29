import React from "react";
import { Link } from "react-router-dom";
import { useAuthContent, useLogout } from "../../hooks";


const Navbar = ({ children }) => {
    const fontVarient = {
        fontVariant: "small-caps",
    };
    const { user } = useAuthContent()
    const { logout } = useLogout()

    return (
        <>
            <header className="backdrop-blur-lg lg:backdrop-blur-none text-slate-700 absolute top-0 w-full z-50 mx-auto flex flex-col overflow-hidden px-0  md:px-4 md:py-10 lg:py-5 pt-5 lg:flex-row lg:items-center">
                <Link
                    to="/"
                    className="flex items-center whitespace-nowrap text-4xl font-black"
                >
                    <span className="mr-2 w-2">
                        <img src="/images/JOJj79gp_Djhwdp_ZOKLL.png" alt="" />
                    </span>
                    spline <span className="text-yellow-400">.</span>
                </Link>
                <input type="checkbox" className="peer hidden" id="navbar-open" />
                <label
                    className="absolute md:top-10 lg:top-5 top:5 right-5 cursor-pointer lg:hidden"
                    for="navbar-open"
                >
                    <svg
                        className="h-7 w-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </label>
                <nav
                    aria-label="Header Navigation"
                    className="backdrop-blur-lg md:backdrop-blur-none peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col lg:ml-auto items-center overflow-hidden transition-all lg:max-h-full lg:flex-row"
                >
                    <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
                        <li style={fontVarient} className="lg:mr-12">
                            <Link
                                className="rounded ca  text-slate-100 transition focus:outline-none  focus:ring-blue-700 focus:ring-offset-2"
                                to="#"
                            >
                                Components
                            </Link>
                        </li>
                        <li style={fontVarient} className="lg:mr-12">
                            <Link
                                className="rounded ca text-slate-100 transition focus:outline-none  focus:ring-blue-700 focus:ring-offset-2"
                                to="#"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li style={fontVarient} className="lg:mr-12">
                            <Link
                                className="rounded ca text-slate-100 transition focus:outline-none  focus:ring-blue-700 focus:ring-offset-2"
                                to="#"
                            >
                                Contact
                            </Link>
                        </li>
                        <li style={fontVarient} className="lg:mr-12">
                            <Link
                                className="rounded ca text-slate-100 transition focus:outline-none  focus:ring-blue-700 focus:ring-offset-2"
                                to="/Students"
                            >
                                FAQ
                            </Link>
                        </li>
                    </ul>
                    <hr className="mt-4 w-full lg:hidden" />
                    <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
                        {!user ? (
                            <Link
                                to="/login"
                                style={fontVarient}
                                title=""
                                className="whitespace-nowrap rounded-lg text-white py-2 px-4 bg-indigo-600 font-medium transition-all duration-200 focus:outline-none  focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"
                            >
                                {" "}
                                Log In{" "}
                            </Link>
                        ) : (
                            <a
                                style={fontVarient}
                                title=""
                                onClick={logout}
                                className="whitespace-nowrap rounded-lg text-white py-2 px-4 bg-red-600 font-medium transition-all duration-200 focus:outline-none  focus:ring-red-500 focus:ring-offset-2 hover:text-opacity-50"
                            >
                                {" "}
                                Log Out{" "}
                            </a>
                        )}


                    </div>
                </nav>
            </header>
            {children}
        </>
    );
};

export default Navbar;
