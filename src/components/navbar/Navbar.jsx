import React from "react";
import logo from "../../assets/logo.png";
import { SlideTabsExample } from "./slideTabExample/SlideTabs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-evenly lg:justify-between mx-auto p-4">
        <a
          href="https://vayuratha.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={logo}
            className="h-10 w-28 bg-white rounded-lg lg:h-14 lg:w-auto"
            alt="Flowbite Logo"
            width={150}
          ></img>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to={"/support"}>
            <button
              type="button"
              className="text-black bg-white border border-black hover:bg-black hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2 sm:py-3 text-center dark:bg-white dark:hover:yellow-400 dark:hover:text-white dark:border dark:hover:border-white dark:focus:ring-yellow-800"
            >
              Get started
            </button>
          </Link>
          
        </div>
        {/* <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        > */}
          <SlideTabsExample />
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
