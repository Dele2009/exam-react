import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { Logo, Dropdown } from "../Elememts";
import { useAuthContent, useLogout } from "../../hooks";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaSlidersH,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaDribbble,
  FaPinterest,
} from "react-icons/fa";
import { HiUserCircle, HiLogout } from "react-icons/hi"; // Import icons as needed
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const fontVarient = {
    fontVariant: "small-caps",
    fontWeight: "700",
    fontSize: "large",
  };
  const { user } = useAuthContent();
  const { handleModalOpen, LogoutModal } = useLogout();
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(containerRef.current.scrollTop);
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 0) {
      controls.start({
        backgroundColor: "#ffffff",
        color: "black",
        boxShadow: "0px 0px 15px gray",
      });
    } else {
      controls.start({
        backgroundColor: "transparent",
        color: "white",
        boxShadow: "none",
      });
    }
    console.log(scrollY);
  }, [scrollY, controls]);

  const menuItems = [
    { label: "Profile", href: "/Dashboard", icon: HiUserCircle },
    { label: "Settings", href: "#", icon: FaSlidersH },
    {
      label: "Logout",
      href: "#",
      icon: HiLogout,
      onClick: handleModalOpen,
      color: "red",
    },
  ];

  return (
    <>
      <div ref={containerRef} className="h-dvh overflow-y-scroll mb-0">
        <motion.header
          animate={controls}
          initial={{
            backgroundColor: "transparent",
            color: "white",
            boxShadow: "none",
          }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-lg lg:backdrop-blur-none rounded-b-3xl shadow-2xl text-slate-700 absolute overflow-hidden lg:overflow-visible top-0 lg:-top-5 w-full z-50 mx-auto flex flex-col  px-0 md:px-8 lg:flex-row lg:items-center"
        >
          <Link
            to="/"
            className="flex items-center w-fit whitespace-nowrap text-4xl font-black"
          >
            <Logo className="size-24 sm:size-32" />
          </Link>
          <input type="checkbox" className="peer hidden" id="navbar-open" />
          <label
            className="absolute top-8 right-5 cursor-pointer lg:hidden"
            htmlFor="navbar-open"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FaTimes className=" h-7 w-7" />
            ) : (
              <FaBars className=" h-7 w-7" />
            )}
          </label>
          <nav
            aria-label="Header Navigation"
            className="backdrop-blur-lg md:backdrop-blur-none peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col lg:ml-auto items-center overflow-hidden lg:overflow-visible  transition-all lg:max-h-full lg:flex-row"
          >
            <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
              <li style={fontVarient} className="lg:mr-12">
                <Link
                  className="rounded  transition focus:outline-none focus:ring-blue-700 focus:ring-offset-2"
                  to=" "
                >
                  Home
                </Link>
              </li>
              <li style={fontVarient} className="lg:mr-12">
                <Link
                  className="rounded  transition focus:outline-none focus:ring-blue-700 focus:ring-offset-2"
                  to="about"
                >
                  About
                </Link>
              </li>
              <li style={fontVarient} className="lg:mr-12">
                <Link
                  className="rounded  transition focus:outline-none focus:ring-blue-700 focus:ring-offset-2"
                  to="#"
                >
                  Contact
                </Link>
              </li>
              <li style={fontVarient} className="lg:mr-12">
                <Link
                  className="rounded  transition focus:outline-none focus:ring-blue-700 focus:ring-offset-2"
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
                  className="whitespace-nowrap rounded-lg text-white py-2 px-4 bg-indigo-600 font-medium transition-all duration-200 focus:outline-none focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"
                >
                  Log In
                </Link>
              ) : (
                // <a
                //     style={fontVarient}
                //     title=""
                //     onClick={handleModalOpen}
                //     className="whitespace-nowrap rounded-lg text-white py-2 px-4 bg-red-600 font-medium transition-all duration-200 focus:outline-none focus:ring-red-500 focus:ring-offset-2 hover:text-opacity-50"
                // >
                //     Log Out
                // </a>
                <Dropdown label={user.info.firstName} menuItems={menuItems} />
              )}
            </div>
          </nav>
        </motion.header>
        <Outlet />
        <footer className="bg-emerald-700 font-sans  rounded-t-3xl mt-6">
          <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl">
                  Subscribe to our newsletter to get updates.
                </h1>
                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                  <input
                    id="email"
                    type="text"
                    className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-emerald-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-emerald-300"
                    placeholder="Email Address"
                  />
                  <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    Subscribe
                  </button>
                </div>
              </div>
              <div>
                <p className="font-semibold text-white">Quick Links</p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                  <p className="text-gray-200 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-gray-400">
                    Home
                  </p>
                  <p className="text-gray-200 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-gray-400">
                    Who We Are
                  </p>
                  <p className="text-gray-200 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-gray-400">
                    Our Philosophy
                  </p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-white">Industries</p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                  <p className="text-gray-200 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-gray-400">
                    Retail & E-Commerce
                  </p>
                  <p className="text-gray-200 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-gray-400">
                    Information Technology
                  </p>
                  <p className="text-gray-200 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-gray-400">
                    Finance & Insurance
                  </p>
                </div>
              </div>
            </div>
            <p className="font-sans p-8 text-start md:text-center md:text-lg text-white">
              © 2023 Your Company Inc. All rights reserved.
            </p>
          </div>
        </footer>
        <LogoutModal />
      </div>
    </>
  );
};

export default Navbar;
