import React from "react";
import { Link } from "react-router-dom";

function Dropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-3 text-center items-center bg-blue-500"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4" exact to="/">
        Home
      </Link>
      <Link className="p-4" exact to="/names">
        List Employees
      </Link>
      <Link className="p-4" exact to="/names/add">
        Add Employee
      </Link>
    </div>
  );
}

export default Dropdown;
