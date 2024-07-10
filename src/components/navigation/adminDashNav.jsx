import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { useAuthContent, useLogout } from '../../hooks'
import { FaUser, FaSlidersH } from 'react-icons/fa'
import { HiUserCircle, HiLogout } from 'react-icons/hi'; // Import icons as needed

import { Dropdown } from '../Elememts'
import FemaleAvatar from '../../assets/female_avatar.svg'
import MaleAvatar from '../../assets/male_avatar.svg'

const Dashboard = () => {
    const [isAddUserCollapsed, setIsAddUserCollapsed] = useState(false);
    const [isAddUserCollapsed2, setIsAddUserCollapsed2] = useState(false);

    const toggleAddUserCollapse = () => {
        setIsAddUserCollapsed(!isAddUserCollapsed);
    };

    const { user } = useAuthContent()
    const { logout } = useLogout()

    const menuItems = [
        { label: 'Profile', href: 'profile', icon: HiUserCircle },
        { label: 'Settings', href: '#', icon: FaSlidersH },
        { label: 'Logout', href: '#', icon: HiLogout, onClick: logout },
    ];

    return (
        <div className="bg-slate-200 flex h-screen overflow-hidden">
            <aside className="fixed z-50 md:relative">
                <input type="checkbox" defaultChecked className="peer hidden" id="sidebar-open" />
                <label
                    className="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:top-5 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer"
                    htmlFor="sidebar-open">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <nav aria-label="Sidebar Navigation"
                    className="peer-checked:w-64 peer- left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-emerald-700 text-white transition-all md:h-screen">
                    <div className="bg-slate-800 mt-5 py-4 pl-3 md:mt-1">
                        {/* <Link to="/" className="">
                            <span
                                className="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 align-bottom text-2xl font-bold">U</span>
                            <span className="text-xl">SchoolSmart</span>
                        </Link> */}
                        <Link to="/Dashboard" className="text-xl font-bold flex items-center space-x-2">
                            {/* <FaUsers /> */}
                            <span>SchoolSmarts</span>
                        </Link>
                    </div>
                    <ul className="mt-8 md:mt-20 px-4  space-y-3  overflow-y-auto overflow-x-hidden">
                        <li className="relative">
                            <Link to=''
                                className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                                <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg></span><span className="">Overview</span>
                            </Link>
                        </li>




                        {user && user.role === 'Admin' && (
                            <li className="relative">
                                <button
                                    className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 font-semibold focus:outline-none"
                                    onClick={toggleAddUserCollapse}>
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                    </svg></span><span className="">Users</span>
                                </button>
                                {isAddUserCollapsed && (
                                    <ul className="rounded-md mt-2 text-sm  space-y-2 w-full bg-slate-800 p-4">
                                        <li className='text-gray-300 hover:bg-slate-600 focus:bg-slate-600 rounded-md'>
                                            <Link to='users' className="flex  gap-2 items-center justify-start px-4 py-2  ml-2">

                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                                    </svg>
                                                </span>

                                                <span> All users </span>
                                            </Link>

                                        </li>
                                        <li className='text-gray-300 hover:bg-slate-600 focus:bg-slate-600 rounded-md'>
                                            <Link to='newuser/admin' className="flex gap-2  items-center justify-start px-4 py-2  ml-2">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                                    </svg>
                                                </span>

                                                <span>Secondary Admin</span>
                                            </Link>
                                        </li>
                                        <li className='text-gray-300 hover:bg-slate-600 focus:bg-slate-600 rounded-md'>
                                            <Link to='newuser/teacher' className="flex gap-2  items-center justify-start px-4 py-2 ml-2">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                                    </svg>
                                                </span>
                                                <span>Teacher</span>
                                            </Link>
                                        </li>
                                        <li className='text-gray-300 hover:bg-slate-600 focus:bg-slate-600 rounded-md'>
                                            <Link to='newuser/student' className="flex gap-2  items-center justify-start px-4 py-2 ml-2">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                                    </svg>
                                                </span>
                                                <span>Student</span>
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        )}

                        {/* <li className="relative">
                            <Link to=''
                                className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                                <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg></span><span className="">Send Money</span>
                            </Link>
                        </li> */}
                        <li className="relative">
                            <button
                                className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 font-semibold focus:outline-none"
                                onClick={() => setIsAddUserCollapsed2(!isAddUserCollapsed2)}>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                </svg>
                                </span><span className="">Exams</span>
                                {/* <span className='ml-auto w-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                                    </svg>

                                </span> */}
                            </button>
                            {isAddUserCollapsed2 && (
                                <ul className="rounded-md mt-2 text-sm  space-y-2 w-full bg-slate-800 p-4">
                                    <li>
                                        <Link to='exams' className=" block px-4 py-2 text-gray-300 hover:bg-slate-600 focus:bg-slate-600 rounded-md">All Exams</Link>
                                    </li>
                                    <li>
                                        <Link to='exams/create' className=" block px-4 py-2 text-gray-300 hover:bg-slate-600 focus:bg-slate-600 rounded-md">New Exam</Link>
                                    </li>
                                    <li>
                                        <Link to='#' className=" block px-4 py-2 text-gray-300 hover:bg-slate-600 focus:bg-slate-600 rounded-md">Update Exam</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        {/* <li className="relative">
                            <Link to=''
                                className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                                <span className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
                                    width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36">
                                    <path fill="currentColor"
                                        d="M32 15h-1V9a1 1 0 0 0-1-1H6a1 1 0 0 1-1-.82v-.36A1 1 0 0 1 6 6h23.58a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3a3.08 3.08 0 0 0 0 .36v20.57A4.1 4.1 0 0 0 7.13 32H30a1 1 0 0 0 1-1v-6h1a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Zm-3 15H7.13A2.11 2.11 0 0 1 5 27.93V9.88A3.11 3.11 0 0 0 6 10h23v5h-7a5 5 0 0 0 0 10h7Zm2-7h-9a3 3 0 0 1 0-6h9Z"
                                        className="clr-i-outline clr-i-outline-path-1" />
                                    <circle cx="23.01" cy="20" r="1.5" fill="currentColor"
                                        className="clr-i-outline clr-i-outline-path-2" />
                                    <path fill="none" d="M0 0h36v36H0z" />
                                </svg></span><span className="">Payments</span>
                            </Link>
                        </li>
                        <li className="relative">
                            <Link to=''
                                className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                                <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg></span><span className="">Cards</span>
                            </Link>
                        </li>
                        <li className="relative">
                            <Link to=''
                                className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                                <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg></span><span className="">Settings</span>
                            </Link>
                        </li> */}
                    </ul>

                    <div className="my-6 mt-auto ml-10 flex cursor-pointer">
                        <div>
                            <img
                                className="h-12 w-12 rounded-full"
                                src={user.profilePicture || (user.info.gender === 'Female' ? FemaleAvatar : MaleAvatar)}
                                alt="Profile"
                            />
                        </div>
                        <div className="ml-3">
                            <p className="font-medium">{user.info.firstName}</p>
                            <p className="text-sm text-gray-300">{user.info.email}</p>
                        </div>
                    </div>
                </nav>
            </aside>
            {/* <!-- /Sidebar --> */}

            <div className="flex h-full w-full flex-col">
                {/* <!-- Navbar --> */}
                <header className="relative flex flex-col items-center bg-white px-4 py-4 shadow sm:flex-row md:h-20">
                    <div className="flex w-full flex-col justify-between transition-all sm:max-h-full sm:flex-row sm:items-center">
                        <div className="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto">
                            <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" className=""></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
                            </svg>
                            <input 
                                type="name" 
                                name="search"
                                className="h-12 w-full rounded-md border border-gray-100 bg-gray-100 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500"
                                placeholder="Search for anything" 
                            />
                        </div>

                        {/* <ul className="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
                            <li className="">
                                <a onClick={logout}
                                    className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </a>
                            </li>
                            <li className="">
                                <Link to=''
                                    className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="">
                                <Link to=''
                                    className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </Link>
                            </li>
                        </ul> */}
                        {/* <li> */}
                        <Dropdown label={user.info.firstName} menuItems={menuItems} />
                        {/* </li> */}
                    </div>
                </header>
                {/* <!-- /Navbar --> */}

                {/* <!-- Main --> */}
                <div className="h-full overflow-hidden">
                    <main id="dashboard-main" className="h-full overflow-auto px-4 py-10">
                        <Outlet />
                    </main>
                </div>
                {/* <!-- /Main --> */}
            </div>
        </div>
    )
}

export default Dashboard;
