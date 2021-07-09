import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/icon-home.svg";
import { ReactComponent as ExchangeIcon } from "../../assets/icon-exchange.svg";
import { ReactComponent as TransactionsIcon } from "../../assets/icon-transactions.svg";

const Sidebar = () => {
  return (
    <nav className="fixed h-full w-14 pt-16">
      <ul className="flex flex-col overflow-hidden space-y-2 border-r-2 h-full">
        <li className="hover:bg-gray-500 h-14 w-full">
          <NavLink
            exact
            to="/"
            className="w-full h-full flex items-center justify-center"
            activeClassName="border-l-4"
            title="home"
          >
            <HomeIcon />
          </NavLink>
        </li>
        <li className="hover:bg-gray-500 h-14 w-full">
          <NavLink
            to="/exchange"
            className="w-full h-full flex items-center justify-center"
            activeClassName="border-l-4"
            title="exchange"
          >
            <ExchangeIcon />
          </NavLink>
        </li>
        <li className="hover:bg-gray-500 h-14 w-full">
          <NavLink
            to="/transactions"
            className="w-full h-full flex items-center justify-center"
            activeClassName="border-l-4"
            title="transactions"
          >
            <TransactionsIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
