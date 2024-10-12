import React from "react";
import images from "../../constant/images";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitAlt, FaLaravel, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export const About = () => {
  return (
    <div
      id="about"
      className="mt-[100px] flex flex-col gap-y-[5vh] text-white p-10">
      {/* About */}
      <div className="flex flex-col lg:flex-row items-center px-[5vw] lg:px-[8vw] justify-between gap-10">
        {/* Text Section */}
        <div className="flex flex-col gap-y-4 w-full lg:w-[40vw]">
          <h1 className="text-4xl lg:text-6xl">About Me</h1>
          <p className="text-lg lg:text-2xl">
            Hi I’m Walid Cadi, a dedicated full-stack web developer with a
            strong focus on building efficient and intuitive web applications. I
            have expertise in both front-end and back-end technologies, allowing
            me to develop seamless user experiences from design to deployment.
            I’m always eager to embrace new challenges and continually expand my
            skill set to stay ahead in the fast-evolving tech landscape.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-auto">
          <img className="w-full lg:w-auto" src={images.dall} alt="" />
        </div>
      </div>

      {/* Skill */}
      <div className="flex flex-col items-center gap-y-7">
        <h1 className="text-3xl lg:text-4xl font-bold">Skills</h1>
        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-x-10">
          <div className="bg-transparent border-2 border-white p-5 lg:p-7 w-[40vw] sm:w-[20vw] lg:w-[12vw] rounded-xl flex flex-col items-center gap-y-2 ">
            <div className="flex flex-col items-center hover:scale-110 duration-300">
              <IoLogoJavascript className="text-white text-6xl lg:text-7xl" />
              <h1 className="text-white text-lg lg:text-xl cursor-default font-semibold">
                JavaScript
              </h1>
            </div>
          </div>

          <div className="bg-transparent border-2 border-white p-5 lg:p-7 w-[40vw] sm:w-[20vw] lg:w-[12vw] rounded-xl flex flex-col items-center gap-y-2 ">
            <div className="flex flex-col items-center hover:scale-110 duration-300">
              <FaReact className="text-white text-6xl lg:text-7xl" />
              <h1 className="text-white text-lg lg:text-xl cursor-default font-semibold">
                React
              </h1>
            </div>
          </div>

          <div className="bg-transparent border-2 border-white p-5 lg:p-7 w-[40vw] sm:w-[20vw] lg:w-[12vw] rounded-xl flex flex-col items-center gap-y-2 ">
            <div className="flex flex-col items-center hover:scale-110 duration-300">
              <FaLaravel className="text-white text-6xl lg:text-7xl" />
              <h1 className="text-white text-lg lg:text-xl cursor-default font-semibold">
                Laravel
              </h1>
            </div>
          </div>

          <div className="bg-transparent border-2 border-white p-5 lg:p-7 w-[40vw] sm:w-[20vw] lg:w-[12vw] rounded-xl flex flex-col items-center gap-y-2 ">
            <div className="flex flex-col items-center hover:scale-110 duration-300">
              <RiTailwindCssFill className="text-white text-6xl lg:text-7xl" />
              <h1 className="text-white text-lg lg:text-xl cursor-default font-semibold">
                Tailwind CSS
              </h1>
            </div>
          </div>
          <div className="bg-transparent border-2 border-white p-5 lg:p-7 w-[40vw] sm:w-[20vw] lg:w-[12vw] rounded-xl flex flex-col items-center gap-y-2 ">
            <div className="flex flex-col items-center hover:scale-110 duration-300">
              <FaGitAlt className="text-white text-6xl lg:text-7xl" />
              <h1 className="text-white text-lg lg:text-xl cursor-default font-semibold">
                Git
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
