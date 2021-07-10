import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full h-16 font-bold border-b-2 bg-white flex items-center pl-16 pr-4 py-4">
      <div className="">
        <span className="text-gray-700">dino</span>
        <span className="text-gray-300">wallet</span>
      </div>
    </header>
  );
};

export default Header;
