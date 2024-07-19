import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useLogout, useAuthContent } from '../../hooks';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { FaBars, FaTimes, FaUserCircle, FaSlidersH, FaBell, FaTachometerAlt, FaUsers } from 'react-icons/fa';
import { Tooltip,Dropdown } from '../Elememts';
import { HiUserCircle, HiLogout } from 'react-icons/hi'; // Import icons as needed
import FemaleAvatar from '../../assets/female_avatar.svg'
import MaleAvatar from '../../assets/male_avatar.svg'


const NavBar = () => {
  const { user } = useAuthContent();
  const { handleModalOpen, LogoutModal } = useLogout();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems = [
    { label: 'Profile', href: 'profile', icon: HiUserCircle },
    { label: 'Settings', href: '#', icon: FaSlidersH },
    { label: 'Logout', href: '#', icon: HiLogout, onClick: handleModalOpen, color: 'red' }
];
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-emerald-600 p-4 text-white flex justify-between items-center">
        <div className="flex items-center md:w-full space-x-4">
          <Link to="/Dashboard" className="text-xl font-bold flex items-center space-x-2">
            <FaUsers />
            <span>SchoolSmarts</span>
          </Link>
          <div className="hidden md:flex space-x-4 mx-10">
            <Link to="/Dashboard" className="flex items-center space-x-2 hover:text-gray-200">
              <FaTachometerAlt />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Tooltip text='Notifications'>
            <Link
              to="#"
              className="flex items-center space-x-2 hover:text-gray-200 relative"
            >
              <FaBell className="w-5 h-5" />
              <span className="absolute top-0 -right-3 -mt-3 -mr-7 bg-red-600 border-2 border-white text-white text-xs rounded-full px-2 font-bold">
                0
              </span>
              {/* <span>Notifications</span> */}
            </Link>
          </Tooltip>
          {/* <button onClick={handleModalOpen} className="hidden md:inline bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
            Logout
          </button> */}
          <Dropdown label={user.info.firstName} menuItems={menuItems} />

          <button onClick={toggleMobileMenu} className='md:hidden'>
            {isMobileMenuOpen ? <FaTimes className="text-white h-5 w-5" /> : <FaBars className="text-white h-5 w-5" />}
          </button>
        </div>
        


        <div
          className={`transition-transform duration-300 ease-in-out transform md:hidden ${isMobileMenuOpen ? 'translate-y-0 top-14' : '-translate-y-full top-0'
            } bg-emerald-600 p-4 text-white absolute  left-0 right-0 z-50`}
        >
          <Link to="/Dashboard" className="py-2 flex items-center space-x-2" onClick={toggleMobileMenu}>
            <FaTachometerAlt />
            <span>Dashboard</span>
          </Link>
          
          {/* <button
            onClick={handleModalOpen}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded w-full mt-2 flex items-center justify-center space-x-2"
          >
            <span>Logout</span>
          </button> */}


        </div>
      </nav>



      <div className="h-screen overflow-hidden">
        <main className="h-screen bg-gray-200 overflow-y-auto px-4 py-10">
          <Outlet />
        </main>
      </div>

      <LogoutModal/>

    </>
  );
};

export default NavBar;
