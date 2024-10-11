import React from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { sections } from "../constants";

import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <nav className="h-screen min-w-[60px]">
      <div className="navbar flex flex-col gap-5 border text-gray-500 fixed bg-white h-screen">
        <button className="grid place-items-center pt-5 text-2xl">
          <input id="ham" type="checkbox" />
          <label htmlFor="ham">
            <RxHamburgerMenu />
          </label>
        </button>
        <div className="flex flex-col gap-5">
          {sections.map((item, key) => (
            <Navlink item={item} key={key} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
