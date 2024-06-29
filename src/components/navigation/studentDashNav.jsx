import React from 'react';
import { Link, Outlet } from 'react-router-dom'


const NavBar = () => {
  // const history = useHistory();

  // const handleLogout = () => {
  //   // Clear user authentication and redirect to login page
  //   localStorage.removeItem('userToken');
  //   history.push('/login');
  // };

  return (
    <>
      <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/Students" className="text-xl font-bold">
            ExamApp
          </Link>
          <Link to="/Students" className="hover:text-gray-200">
            Dashboard
          </Link>
          <Link to="" className="hover:text-gray-200">
            Profile
          </Link>
          <Link to="" className="hover:text-gray-200">
            Notifications
          </Link>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
          Logout
        </button>
      </nav>

      <div className="h-screen overflow-hidden">
        <main className='h-full overflow-y-auto px-4 py-10'>
          <Outlet />

        </main>
      </div>
    </>
  );
};

export default NavBar;
