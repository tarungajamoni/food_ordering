import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="flex bg-gray-100 h-20 justify-between px-4 shadow-md text-lg text-red-500 font-semibold">
      <div className="h-20 w-20">
        <img src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex gap-10 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
