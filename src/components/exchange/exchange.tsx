import React from "react";
import Pod from "../pod";
import { ReactComponent as ArrowIcon } from "../../assets/icon-arrow.svg";

const Exchange = () => {
  return (
    <Pod title="Exchange" description="Trade currencies">
      <div className="w-full rounded-2xl py-3 px-4 bg-blue-200 shadow-inner">
        <div className="w-full text-sm mb-3">From</div>
        <div className="w-full text-4xl font-bold text-gray-600 flex justify-between">
          <input
            type="number"
            min="1"
            max="100000"
            className="appearance-none bg-transparent border-none shadow-none w-4/5 py-2 pr-3 text-gray-700 leading-tight focus:outline-none"
            placeholder="0.0"
          />
          <select
            name="currency"
            className="text-lg bg-transparent focus:outline-none"
          >
            <option value="" disabled selected>
              currency
            </option>
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
            <option value="aed">AED</option>
            <option value="chf">CHF</option>
          </select>
        </div>
      </div>
      <div className="w-full flex justify-center my-4">
        <ArrowIcon />
      </div>
      <div className="w-full rounded-2xl py-3 px-4 bg-blue-200 shadow-inner">
        <div className="w-full text-sm mb-3">To</div>
        <div className="w-full text-4xl font-bold text-gray-600 flex justify-between">
          <input
            type="number"
            min="1"
            max="100000"
            className="appearance-none bg-transparent border-none shadow-none w-4/5 py-2 pr-3 text-gray-700 leading-tight focus:outline-none"
            placeholder="0.0"
          />
          <select
            name="currency"
            className="text-lg bg-transparent focus:outline-none"
          >
            <option value="" disabled selected>
              currency
            </option>
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
            <option value="aed">AED</option>
            <option value="chf">CHF</option>
          </select>
        </div>
      </div>
    </Pod>
  );
};

export default Exchange;
