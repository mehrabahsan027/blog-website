import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import Social from "./Social";
// import { motion } from "framer-motion";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/blogs", label: "Blogs" },
 

 
  { path: "/contact", label: "Contact" },
];

function NavItems({ handleMenu }) {
  return (
    <ul className="flex flex-col  md:flex-row items-center text-lg md:space-x-8 gap-8 ">
      {navItems.map((items, index) => {
        return (
          <li
            onClick={handleMenu}
            className="hover:text-red-500 hover:scale-110 duration-150 font-medium"
            key={index}
          >
            <NavLink
              to={items.path}
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-semibold dark:text-yellow-600"
                  : ""
              }
            >
              {items.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

function Navbar({ toggleDarkMode, darkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header
      className={` bg-slate-50 dark:bg-black sticky top-0 left-0  
    transition-all duration-300 ease-in-out shadow-md dark:shadow-yellow-200
    
    `}
    >
      <nav className="container mx-auto flex justify-between items-center py-7 px-4 ">
        {/* Logo */}
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          className="w-full"
        >
          <Link
            to="/"
            className=" text-2xl font-semibold dark:text-yellow-500  "
          >
            Logo
          </Link>
        </div>

        {/*Hamburger Mobile For Menu */}
        <div
          onClick={handleMenu}
          className="text-xl md:hidden hover:bg-slate-100 p-1 rounded-md cursor-pointer hover:text-stone-700"
        >
          {isMenuOpen ? null : <FaBars />}
        </div>

        {/*desktop menu items  */}
        <div className="hidden md:flex w-full   justify-center">
          <NavItems />
        </div>

        <div className="w-full flex justify-end">
          <button
            className="text-2xl "
            onClick={() => toggleDarkMode(!darkMode)}
          >
            {darkMode ? <IoSunnyOutline className="text-yellow-200"/> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Menu Items */}

        <div
          className={`md:hidden fixed top-0 left-0 bg-black bg-opacity-80 w-full h-screen text-white flex flex-col justify-center items-center space-y-8 duration-300
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
            
            
            `}
        >
          <div
            onClick={handleMenu}
            className="cursor-pointer absolute mx-auto top-10"
          >
            <IoClose className="w-10 h-10" />
          </div>
          <NavItems handleMenu={handleMenu} />

          <Social/>


        </div>
      </nav>
    </header>
  );
}

export default Navbar;
