import React from "react";
import logo from "../../assets/logog.png";

const Logo = ({ className }) => {
  return (
    <>
      <img
        src={logo}
        alt="app logo"
        style={{ width: "100%" }}
        className={className}
      />
    </>
  );
};

export default Logo;
