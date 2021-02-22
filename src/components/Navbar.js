import React from "react";
import { Link, NavLink } from "react-router-dom";
import AutoComplete from "./AutoComplete";
import "./Navbar.css"

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono z-20"
      role="navigation"
    >
      <Link to="/" className="pl-6">
        EMPLOY-CO
      </Link>
      <div className="px-4-cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <AutoComplete className="p-4" />
      </div>
      <div className="pr-8 md:block hidden">
        <NavLink className="p-4" exact to="/">
          Home
        </NavLink>
        <NavLink className="p-4" exact to="/names">
          List Employees
        </NavLink>

        <NavLink className="p-4" exact to="/names/add">
          Add Employee
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
