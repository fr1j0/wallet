import React from "react";
import { ReactComponent as HamburgerIcon } from "../../assets/icon-hamburger.svg";
import { ReactComponent as KoalaIcon } from "../../assets/koala.svg";

const Header = () => {
  const handleNavClick = () => {
    const navBar = document.querySelector(".navigation-bar");
    navBar?.classList.toggle("hidden");
    navBar?.classList.toggle("md:block");
  };

  return (
    <header className="fixed w-full h-16 font-bold border-b-2 border-wallet-border bg-white flex items-center pl-4 pr-4 py-4 z-20">
      <button className="block md:hidden" aria-label="menu">
        <HamburgerIcon onClick={handleNavClick} />
      </button>
      <div className="ml-6 md:ml-12 flex items-end">
        <KoalaIcon className="w-8 h-8 mr-2" />
        <span className="text-blue-900">panda</span>
        <span className="text-gray-700">wallet</span>
      </div>
    </header>
  );
};

export default Header;
