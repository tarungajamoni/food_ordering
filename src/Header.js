import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between px-4 py-2 border border-solid border-yellow-500 text-2xl text-red-500 font-semibold">
      <div className="h-20 w-20">
        <img src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg" />
      </div>
      <div className="flex ">
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
