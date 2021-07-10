import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/icon-home.svg";
import { ReactComponent as DepositIcon } from "../../assets/icon-deposit.svg";
import { ReactComponent as ExchangeIcon } from "../../assets/icon-exchange.svg";
import { ReactComponent as TransactionsIcon } from "../../assets/icon-transactions.svg";

const Sidebar = () => {
  return (
    <nav className="hidden md:block fixed h-full w-14 pt-16">
      <ul className="flex flex-col overflow-hidden border-r-2 border-wallet-border h-full pt-4">
        <li className="group hover:bg-gray-100 h-12 w-full">
          <NavLink
            exact
            to="/"
            className="w-full h-full flex items-center justify-center"
            activeClassName="bg-gray-300 bg-opacity-50"
            title="home"
          >
            <HomeIcon className="fill-current text-gray-500" />
          </NavLink>
        </li>
        <li className="group hover:bg-gray-100 h-12 w-full">
          <NavLink
            to="/deposit"
            className="w-full h-full flex items-center justify-center"
            activeClassName="bg-gray-300 bg-opacity-50"
            title="deposit"
          >
            <DepositIcon className="w-5 fill-current text-gray-500" />
          </NavLink>
        </li>
        <li className="group hover:bg-gray-100 h-12 w-full">
          <NavLink
            to="/exchange"
            className="w-full h-full flex items-center justify-center"
            activeClassName="bg-gray-300 bg-opacity-50"
            title="exchange"
          >
            <ExchangeIcon className="fill-current text-gray-500" />
          </NavLink>
        </li>
        <li className="group hover:bg-gray-100 h-12 w-full">
          <NavLink
            to="/transactions"
            className="w-full h-full flex items-center justify-center"
            activeClassName="bg-gray-300 bg-opacity-50"
            title="transactions"
          >
            <TransactionsIcon className="fill-current text-gray-500" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
