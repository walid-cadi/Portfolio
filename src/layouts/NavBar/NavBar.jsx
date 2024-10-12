import React from "react";
import images from "../../constant/images";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

export const NavBar = () => {
  return (
    <>
      {/* <div className="bg-transparent flex items-center justify-between p-8 fixed top-0 w-full">
        <Link to="/">
          <img className="w-28" src={images.logo} alt="" />
        </Link>
        <div className="flex items-center gap-x-10 text-white text-xl font-semibold">
          <Link to="" className="hover:text-[#8E05C2]">
            About
          </Link>
          <Link to="" className="hover:text-[#8E05C2]">
            Projects
          </Link>
          <Link to="" className="hover:text-[#8E05C2]">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-x-3">
          <Link to="path">
            <FaLinkedin className="text-white text-4xl hover:text-[#8E05C2]" />
          </Link>
          <Link to="path">
            <FaGithub className="text-white text-4xl hover:text-[#8E05C2]" />
          </Link>
        </div>
      </div> */}
      <div className="bg-[#100416] flex items-center justify-between p-8 fixed top-0 w-full">
        <Link to="/">
          <img className="w-28" src={images.logo} alt="" />
        </Link>

        <div className="hidden md:flex items-center gap-x-10 text-white text-xl font-semibold">
          <a href="#about" className="hover:text-[#8E05C2]">
            About
          </a>
          <a href="#projects" className="hover:text-[#8E05C2]">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#8E05C2]">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-x-3">
          <a href="">
            <FaLinkedin className="text-white text-4xl hover:text-[#8E05C2]" />
          </a>
          <a href="">
            <FaGithub className="text-white text-4xl hover:text-[#8E05C2]" />
          </a>
        </div>

        <div className="flex md:hidden items-center">
          <button id="mobile-menu-button">
            <IoIosMenu className="w-8 h-8 text-white" />
          </button>
        </div>

        <div
          id="mobile-menu"
          className="hidden md:hidden absolute top-16 left-0 w-full bg-transparent">
          <div className="flex flex-col items-center gap-y-5 text-white text-xl font-semibold">
            <Link to="" className="hover:text-[#8E05C2]">
              About
            </Link>
            <Link to="" className="hover:text-[#8E05C2]">
              Projects
            </Link>
            <Link to="" className="hover:text-[#8E05C2]">
              Contact
            </Link>
            <div className="flex items-center gap-x-3 mt-4">
              <Link to="path">
                <FaLinkedin className="text-white text-4xl hover:text-[#8E05C2]" />
              </Link>
              <Link to="path">
                <FaGithub className="text-white text-4xl hover:text-[#8E05C2]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
