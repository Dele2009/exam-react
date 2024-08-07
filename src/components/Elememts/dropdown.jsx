import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const Dropdown = ({ label, labelImg, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const controls = useAnimation();

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0.95 });
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, controls]);

  return (
    <div className="mx-5 relative inline-block" ref={dropdownRef}>
      {labelImg && (
        <div className="relative h-7 w-7">
          <img
            className="h-full w-full rounded-full object-cover object-center"
            src={labelImg}
            alt={labelImg}
          />
          <span
            className={`absolute right-0 bottom-0 h-2 w-2 rounded-full ${
              user.active ? "bg-green-400" : "bg-red-400"
            } ring ring-white`}
          ></span>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative  w-24 md:w-fit z-10 flex items-center p-3 text-sm text-gray-600 border-2 border-gray-800 bg-white rounded-md  focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:border-white dark:bg-gray-800 focus:outline-none"
      >
        {/* <img src={labelImg} alt={labelImg} /> */}
        <span className="mx-1">{label}</span>
        <svg
          className="w-5 h-5 mx-1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 z-50 w-56 py-0 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={
                  item.onClick
                    ? (e) => {
                        e.preventDefault();
                        item.onClick();
                        setIsOpen(false);
                      }
                    : null
                }
                className={`flex items-center p-3 text-sm text-gray-600 transition-colors duration-300 transform dark:text-white bg-${
                  item.color ? item.color : ""
                }-700 hover:bg-${item.color || "gray"}-100`}
              >
                {item.icon && (
                  <span className="mr-2">
                    <item.icon className="w-5 h-5" />
                  </span>
                )}
                <span>{item.label}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;

// import { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const Dropdown = ({ align = 'right', width = '48', trigger, children }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef();

//     const toggleDropdown = () => setIsOpen(!isOpen);

//     const handleClickOutside = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//             setIsOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const alignmentClasses = {
//         left: 'origin-top-left left-0',
//         right: 'origin-top-right right-0',
//         center: 'origin-top-center left-1/2 transform -translate-x-1/2',
//     };

//     return (
//         <div className="relative" ref={dropdownRef}>
//             <div onClick={toggleDropdown}>
//                 {trigger}
//             </div>
//             {isOpen && (
//                 <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.3 }}
//                     className={`absolute z-50 mt-2 w-${width} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${alignmentClasses[align]}`}
//                 >
//                     <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                         {children}
//                     </div>
//                 </motion.div>
//             )}
//         </div>
//     );
// };

// Dropdown.Link = ({ href, onClick, children }) => (
//     <Link
//         to={href}
//         onClick={onClick}
//         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//     >
//         {children}
//     </Link>
// );

// export default Dropdown;
