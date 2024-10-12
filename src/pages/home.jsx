import React from "react";
import { NavBar } from "../layouts/NavBar/NavBar";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";

export const Home = () => {
  return (
    // bg-gradient-to-r from-[#000000] via-[#3E065F]  to-[#700B97]
    <div className="min-h-screen bg-[#100416] flex flex-col gap-[7vh] ">
      <NavBar />
      <About />
      <Contact />
    </div>
  );
};
