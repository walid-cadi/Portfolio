import React from "react";
import images from "../../constant/images";

export const NavBar = () => {
  return (
    <>
      <div className="bg-transparent p-8 fixed top-0 w-full">
        <img className="w-28 cursor-pointer" src={images.logo} alt="" />
      </div>
    </>
  );
};
