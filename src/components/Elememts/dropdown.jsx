import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Link } from "react-router-dom";

const Dropdown = ({ label, menuItems }) => {
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
            document.addEventListener('mousedown', handleClickOutside);
            controls.start({ opacity: 1, scale: 1 });
        } else {
            controls.start({ opacity: 0, scale: 0.95 });
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, controls]);

    return (
        <div className="mx-5 relative inline-block" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-10 flex items-center p-2 text-sm text-gray-600 border-2 border-gray-800 rounded-md  focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:border-white focus:outline-none"
            >
                <span className="mx-1">{label}</span>
                <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
                    >
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.href}
                                onClick={item.onClick ? (e) => { e.preventDefault(); item.onClick(); setIsOpen(false); } : null}
                                className="flex items-center p-3 text-sm text-gray-600 transition-colors duration-300 transform dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
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
