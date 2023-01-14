import React from "react";
import './Navbar.css'
import { useState } from "react";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="  w-full bg-white bg-black-900 shadow backdrop-filter backdrop-blur-lg  bg-opacity-100">
      <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-green-400">
                Envy<span className="text-primary">Safe</span>
              </h1>
              {/* <img className="h-20 w-20 self-center" src="./images/img1.svg" alt="" /> */}
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {/* navbar == true -> display the nav links and so cross icon is shown to close them */}
                {navbar ? (
                  <img
                    h-2
                    src="./images/i2.svg"
                    alt="hamburger-1"
                  ></img>
                ) : (
                  <img src="./images/i3.svg" alt="hamburger-2"></img>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            // className={navbar ? "hidden" : "block"}
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 mb-3 md:flex md:space-x-6 md:space-y-0 ">
              <li className="p-2 space-x-8 text-gray-600 h-10  rounded-md hover:text-black hover:font-bold">
                <a href="/">Home</a>
              </li>
              <li className="p-2 text-gray-600 h-10 hover:text-black hover:font-bold">
                <a href="/">Features</a>
              </li>
              <li className="p-2 space-x-8 text-gray-600  h-10 hover:text-black  hover:font-bold">
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a
                  href="/"
                  className="p-2 space-x-8 text-gray-600  h-10 hover:text-black  hover:font-bold"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="inline-block rounded-md  px-6 outline-1 py-1.5 text-base font-semibold leading-7 text-black shadow-sm ring-1 ring-green-600 bg-white hover:bg-green-600 hover:text-white drop-shadow-sm hover:ring-white"
                >
                  Sign Up
                </a>
              </li>
                
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
