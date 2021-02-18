import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="up bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="up lg:text-9xl md:text-7xl sm:text-7xl sm:text-5xl text-3xl font-black mb-14">
        EMPLOY-CO
      </h1>
      <h1 className="up lg:text-7xl md:text-5xl sm:text-5xl sm:text-5xl text-3xl font-medium mb-14">
        EMPLOYEE DIRECTORY
      </h1>

      <Link to="/about" className="up py-4 px-10 text-white bg-blue-500 rounded-full lg:text-3xl md:text-2xl sm:text-xl hover:bg-blue-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center...">
        find an employee
      </Link>
    </div>
  );
}

export default Hero;
