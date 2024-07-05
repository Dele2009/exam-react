import React from 'react';

const Logo = () => {
    return (
        <div className="relative flex items-center justify-center h-24 w-24">
          <div className="absolute top-0 left-0 h-12 w-12 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute top-0 right-0 h-12 w-12 bg-pink-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-0 left-0 h-12 w-12 bg-indigo-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 right-0 h-12 w-12 bg-white rounded-full animate-ping"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            {/* <div className="text-2xl font-bold text-green-500">
              School
            </div>
            <div className="text-2xl font-bold text-pink-500">
              Smarts
            </div> */}
          </div>
        </div>
      );
};

export default Logo;