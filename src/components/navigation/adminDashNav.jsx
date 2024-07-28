import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useAuthContent, useLogout } from "../../hooks";
import { FaUser, FaSlidersH } from "react-icons/fa";
import { HiUserCircle, HiLogout } from "react-icons/hi"; // Import icons as needed
import { motion } from "framer-motion";

import { Dropdown, Logo } from "../Elememts";
import FemaleAvatar from "../../assets/female_avatar.svg";
import MaleAvatar from "../../assets/male_avatar.svg";

const Dashboard = () => {
  const [isUsersCollapsed, setIsUsersCollapsed] = useState(false);
  const [isExamsCollapsed, setIsExamsCollapsed] = useState(false);

  const toggleUsersCollapse = () => {
    setIsUsersCollapsed(!isUsersCollapsed);
  };

  const toggleExamsCollapse = () => {
    setIsExamsCollapsed(!isExamsCollapsed);
  };

  const { user } = useAuthContent();
  const { handleModalOpen, LogoutModal } = useLogout();

  const menuItems = [
    { label: "Profile", href: "profile", icon: HiUserCircle },
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
    <div className="bg-slate-200 dark:bg-gray-700 flex h-screen overflow-hidden">
      <aside className="fixed z-50 md:relative">
        <input
          type="checkbox"
          defaultChecked
          className="peer hidden"
          id="sidebar-open"
        />
        <label
          className="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-2 peer-checked:top-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer"
          htmlFor="sidebar-open"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Sidebar Navigation"
          className="peer-checked:w-64 peer-left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-emerald-700 text-white transition-all md:h-screen"
        >
          <div className="bg-slate-800 mt-5 py-0 pl-3 md:mt-0">
            {/* <Link to="/" className="">
                            <span
                                className="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 align-bottom text-2xl font-bold">U</span>
                            <span className="text-xl">SchoolSmart</span>
                        </Link> */}
            <Link
              to="/Dashboard"
              className="flex items-center w-fit whitespace-nowrap font-black md:h-20"
            >
              {/* <FaUsers /> */}
              <Logo className="size-24 sm:size-48 py-16" />
            </Link>
          </div>
          <ul className="mt-8 md:mt-20 px-4 space-y-3 overflow-y-auto overflow-x-hidden">
            <li className="relative">
              <Link
                to=""
                className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-white focus:outline-none"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </span>
                <span className="text-xl">Overview</span>
              </Link>
            </li>
            <li className="text-gray-300 hover:bg-slate-600 focus:bg-slate-600 rounded-md">
              <Link
                to="users"
                className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-white focus:outline-none"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </span>
                <span className="ml-2 text-xl">All Users</span>
              </Link>
            </li>

            {user && user.role === "Admin" && (
              <li className="relative">
                <button
                  className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 focus:outline-none"
                  onClick={toggleUsersCollapse}
                >
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                      />
                    </svg>
                  </span>
                  <span className="text-xl">Add User</span>
                </button>
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isUsersCollapsed ? "auto" : 0,
                    opacity: isUsersCollapsed ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`overflow-hidden rounded-md mt-2 text-sm space-y-2 w-full bg-slate-800 p-4 ${
                    isUsersCollapsed ? "" : "hidden"
                  }`}
                >
                  <li className="text-gray-300 hover:bg-slate-600 focus:bg-slate-600 rounded-md">
                    <Link
                      to="newuser/student"
                      className="flex gap-2 items-center justify-start px-4 py-2 ml-2"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 6.75v-.3c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.78 1.65 7.62 1.65 9.3 1.65h5.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C19.5 3.93 19.5 4.77 19.5 6.45v.3m-15 0a.75.75 0 0 0-.75.75v8.7a4.95 4.95 0 0 0 1.003 3.004c.52.667 1.217 1.146 1.933 1.463.887.39 1.89.39 3.543.39h4.642c1.653 0 2.656 0 3.543-.39a4.95 4.95 0 0 0 1.933-1.463A4.95 4.95 0 0 0 20.25 16.2v-8.7a.75.75 0 0 0-.75-.75m-15 0h15M8.25 15h.008v.008H8.25V15Zm7.5 0h.008v.008H15.75V15Zm-5.494 0h4.488v.008H10.256V15Zm-1.506-3.75h7.5m-7.5 0h.008v.008H8.25V11.25Zm7.5 0h.008v.008H15.75V11.25Zm-5.494 0h4.488v.008H10.256V11.25Zm-1.506-3h7.5m-7.5 0h.008v.008H8.25V8.25Zm7.5 0h.008v.008H15.75V8.25Zm-5.494 0h4.488v.008H10.256V8.25Z"
                          />
                        </svg>
                      </span>
                      <span className="ml-2">Students</span>
                    </Link>
                  </li>
                  <li className="text-gray-300 hover:bg-slate-600 focus:bg-slate-600 rounded-md">
                    <Link
                      to="newuser/teacher"
                      className="flex gap-2 items-center justify-start px-4 py-2 ml-2"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6.75v-.3c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C13.47 1.65 12.63 1.65 10.95 1.65H7.5v3.75H16.5v-.3m-15 0a.75.75 0 0 1 .75-.75h1.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-1.5A.75.75 0 0 1 1.5 7.5v-1.5Zm0 4.5a.75.75 0 0 1 .75-.75h1.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-1.5a.75.75 0 0 1-.75-.75v-1.5Zm15-4.5h1.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-1.5a.75.75 0 0 1-.75-.75v-1.5c0-.621.504-1.125 1.125-1.125Zm0 4.5h1.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-1.5a.75.75 0 0 1-.75-.75v-1.5c0-.621.504-1.125 1.125-1.125Z"
                          />
                        </svg>
                      </span>
                      <span className="ml-2">Teachers</span>
                    </Link>
                  </li>
                  <li className="text-gray-300 hover:bg-slate-600 focus:bg-slate-600 rounded-md">
                    <Link
                      to="newuser/admin"
                      className="flex gap-2 items-center justify-start px-4 py-2 ml-2"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 4.5c0 .621-.504 1.125-1.125 1.125S7.5 5.121 7.5 4.5 8.004 3.375 8.625 3.375 9.75 3.879 9.75 4.5ZM21 20.25a11.25 11.25 0 0 1-21 0v-1.5c0-1.35.78-2.55 1.986-3.165a1.874 1.874 0 0 1 2.516.788 7.456 7.456 0 0 0 12.997 0 1.875 1.875 0 0 1 2.516-.788A3.75 3.75 0 0 1 21 18.75v1.5Zm-.75-15.75a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 1 0 4.5 0Zm-9-4.5A2.25 2.25 0 1 1 9 1.5a2.25 2.25 0 0 1 1.25 1.125Zm-6 2.25a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 1 0-4.5 0Z"
                          />
                        </svg>
                      </span>
                      <span className="ml-2">Admins</span>
                    </Link>
                  </li>
                </motion.ul>
              </li>
            )}

            {user && user.role === "Admin" && (
              <li className="relative">
                <button
                  className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 focus:outline-none"
                  onClick={toggleExamsCollapse}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </span>
                  <span className="text-xl">Exams</span>
                </button>
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isExamsCollapsed ? "auto" : 0,
                    opacity: isExamsCollapsed ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`overflow-hidden rounded-md mt-2 text-sm space-y-2 w-full bg-slate-800 p-4 ${
                    isExamsCollapsed ? "" : "hidden"
                  }`}
                >
                  <li className="text-gray-300 hover:bg-slate-600 focus:bg-slate-600 rounded-md">
                    <Link
                      to="allExams"
                      className="flex gap-2 items-center justify-start px-4 py-2 ml-2"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18.75 6.75V4.5A2.25 2.25 0 0 0 16.5 2.25H7.5A2.25 2.25 0 0 0 5.25 4.5v2.25m13.5 0h-13.5m13.5 0a2.25 2.25 0 0 0 2.25 2.25v9a2.25 2.25 0 0 0-2.25 2.25h-13.5A2.25 2.25 0 0 0 3 18v-9a2.25 2.25 0 0 0 2.25-2.25m-.75 0h13.5"
                          />
                        </svg>
                      </span>
                      <span className="ml-2">All Exams</span>
                    </Link>
                  </li>
                  <li className="text-gray-300 hover:bg-slate-600 focus:bg-slate-600 rounded-md">
                    <Link
                      to="createExam"
                      className="flex gap-2 items-center justify-start px-4 py-2 ml-2"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5h-9m4.5-4.5v9m9 6.75v-4.5a1.5 1.5 0 0 0-1.5-1.5h-6a1.5 1.5 0 0 0-1.5 1.5v4.5m9 0H5.25m13.5 0h-4.5m-4.5 0h-4.5m13.5 0v-2.25a1.5 1.5 0 0 0-1.5-1.5h-6a1.5 1.5 0 0 0-1.5 1.5v2.25"
                          />
                        </svg>
                      </span>
                      <span className="ml-2">Create Exam</span>
                    </Link>
                  </li>
                </motion.ul>
              </li>
            )}
          </ul>

          <div className="my-6 mt-auto ml-10 flex cursor-pointer">
            <div>
              <img
                className="h-12 w-12 rounded-full"
                src={
                  user.profilePicture ||
                  (user.info.gender === "Female" ? FemaleAvatar : MaleAvatar)
                }
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
        <header className="relative flex flex-col items-center bg-white dark:bg-gray-800 px-4 py-4 shadow sm:flex-row md:h-20">
          <div className="flex w-full flex-col justify-between transition-all sm:max-h-full sm:flex-row sm:items-center">
            <div className="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto">
              <svg
                className="absolute left-2 block h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
      <LogoutModal />
    </div>
  );
};

export default Dashboard;
