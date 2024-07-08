import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="w-full h-16 bg-black font-semibold text-gray-600 flex justify-end items-center px-4 fixed">
      <div className="flex space-x-4 text-lg">
        <NavLink 
          to="/" 
          className={({ isActive }) =>
            `text-gray-600 ${isActive ? "text-orange-600" : ""} ${isActive?"hover:text-orange-600" : "hover:text-orange-800"}`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/chess" 
          className={({ isActive }) =>
            `text-gray-600 ${isActive ? "text-orange-600" : ""} ${isActive?"hover:text-orange-600" : "hover:text-orange-800"}`
          }
        >
          Chess
        </NavLink>
        <NavLink 
          to="/profile" 
          className={({ isActive }) =>
            `text-gray-600 ${isActive ? "text-orange-600" : ""} ${isActive?"hover:text-orange-600" : "hover:text-orange-800"}`
          }
        >
          Profile
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
