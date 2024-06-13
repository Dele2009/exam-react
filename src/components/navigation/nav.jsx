import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ children }) => {
    const fontVarient={
        fontVariant: 'small-caps'
    }
    return (
        <>



            <header className="text-slate-700 absolute top-0 w-full z-50 mx-auto flex flex-col overflow-hidden px-4 py-5 lg:flex-row lg:items-center">
                <Link to="#" className="flex items-center whitespace-nowrap text-4xl font-black">
                    <span className="mr-2 w-8">
                        <img src="/images/JOJj79gp_Djhwdp_ZOKLL.png" alt="" />
                    </span>
                    spline <span className='text-yellow-400'>.</span>
                </Link>
                <input type="checkbox" className="peer hidden" id="navbar-open" />
                <label className="absolute top-5 right-5 cursor-pointer lg:hidden" for="navbar-open">
                    <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col lg:ml-auto items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
                    <ul  className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
                        <li style={fontVarient} className="lg:mr-12"><Link className="rounded ca  text-slate-100 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" to="#">Components</Link></li>
                        <li style={fontVarient} className="lg:mr-12"><Link className="rounded ca text-slate-100 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" to="#">Pricing</Link></li>
                        <li style={fontVarient} className="lg:mr-12"><Link className="rounded ca text-slate-100 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" to="#">Contact</Link></li>
                        <li style={fontVarient} className="lg:mr-12"><Link className="rounded ca text-slate-100 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" to="#">FAQ</Link></li>
                    </ul>
                    <hr className="mt-4 w-full lg:hidden" />
                    <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
                        <Link to="/login" style={fontVarient} title="" className="whitespace-nowrap rounded-lg text-white py-2 px-4 bg-indigo-600 font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"> Log In </Link>
                    </div>
                </nav>
            </header>
            {children}
        </>
    );
};

export default Navbar;
