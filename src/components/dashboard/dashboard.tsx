import React from "react";
import Pod from "../pod";

const Dashboard = () => {
  return (
    <Pod title="Dashboard" description="Accounts">
      <div className="w-full rounded-2xl py-3 px-4 bg-blue-100 bg-opacity-50 shadow-innerpod">
        <div className="w-full text-sm mb-3">Current balance</div>
        <div className="w-full text-4xl font-bold text-gray-600 flex justify-between">
          <input
            disabled
            type="number"
            min="1"
            max="100000"
            className="appearance-none bg-transparent border-none shadow-none w-4/5 py-2 pr-3 text-gray-700 leading-tight focus:outline-none"
            placeholder="0.0"
          />
          <span className="flex items-center">
            <span className="text-sm font-normal">default:</span>
            <select
              name="currency"
              className="text-lg bg-transparent focus:outline-none"
            >
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
              <option value="aed">AED</option>
              <option value="chf">CHF</option>
            </select>
          </span>
        </div>
      </div>
      <div className="w-full rounded-2xl py-3 pl-4 bg-blue-100 bg-opacity-50 shadow-innerpod mt-8">
        <div className="w-full text-sm mb-3">Accounts</div>
        <div className="w-full max-h-40 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          <div className="w-full pr-4 text-lg font-medium text-gray-600 flex justify-between">
            <span>EUR</span>
            <span>€500,34</span>
          </div>
          <div className="w-full pr-4 text-lg font-medium text-gray-600 flex justify-between">
            <span>USD</span>
            <span>$10,41</span>
          </div>
          <div className="w-full pr-4 text-lg font-medium text-gray-600 flex justify-between">
            <span>AED</span>
            <span>AED97,10</span>
          </div>
          <div className="w-full pr-4 text-lg font-medium text-gray-600 flex justify-between">
            <span>CHF</span>
            <span>CHF300,41</span>
          </div>
        </div>
      </div>
    </Pod>
  );
};

export default Dashboard;
