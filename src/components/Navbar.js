import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <nav>
            <li>
            <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
            <NavLink exact to="/names">List Employees</NavLink>
            </li>
            <li>
            <NavLink exact to="/names/add">Add Employee</NavLink>
            </li>
        </nav>
    )
}

export default Navbar;