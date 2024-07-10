import React from 'react';
import logo from '../../assets/logo.png'

const Logo = ({ className }) => {
  return (
    <>
      <img src={logo} alt="app logo" className={className} />
    </>
  );
};

export default Logo;