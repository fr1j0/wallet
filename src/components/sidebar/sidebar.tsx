import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/icon-home.svg";
import { ReactComponent as DepositIcon } from "../../assets/icon-deposit.svg";
import { ReactComponent as ExchangeIcon } from "../../assets/icon-exchange.svg";
import { ReactComponent as TransactionsIcon } from "../../assets/icon-transactions.svg";

const Sidebar = () => {
  return (
    <nav className="navigation-bar hidden md:block fixed h-full w-16 pt-16 z-10">
      <ul className="flex flex-col overflow-hidden border-r-2 border-wallet-border h-full pt-4 bg-white">
        <li className="hover:bg-gray-100 h-12">
          <NavLink
            exact
            to="/"
            className="h-full flex items-center justify-center border-transparent border-l-4"
            activeClassName="bg-gray-100 border-purple-700"
            title="home"
          >
            <HomeIcon className="fill-current text-gray-700" />
          </NavLink>
        </li>
        <li className="hover:bg-gray-100 h-12">
          <NavLink
            to="/deposit"
            className="h-full flex items-center justify-center border-transparent border-l-4"
            activeClassName="bg-gray-100 border-purple-700"
            title="deposit"
          >
            <DepositIcon className="w-5 fill-current text-gray-700" />
          </NavLink>
        </li>
        <li className="hover:bg-gray-100 h-12">
          <NavLink
            to="/exchange"
            className="h-full flex items-center justify-center border-transparent border-l-4"
            activeClassName="bg-gray-100 border-purple-700"
            title="exchange"
          >
            <ExchangeIcon className="fill-current text-gray-700" />
          </NavLink>
        </li>
        <li className="hover:bg-gray-100 h-12">
          <NavLink
            to="/transactions"
            className="h-full flex items-center justify-center border-transparent border-l-4"
            activeClassName="bg-gray-100 border-purple-700"
            title="transactions"
          >
            <TransactionsIcon className="fill-current text-gray-700" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
