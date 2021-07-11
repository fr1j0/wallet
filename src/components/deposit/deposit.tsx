import React from "react";
import Pod from "../pod";

const Deposit = () => {
  return (
    <Pod title="Deposit" description="Select currency and payment method">
      <div className="w-full rounded-2xl py-3 px-4 bg-blue-100 bg-opacity-50 shadow-innerpod">
        <div className="w-full text-sm mb-3">Amount</div>
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
            className="text-sm bg-transparent focus:outline-none"
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
      <button className="w-full mt-6 bg-purple-700 text-sm text-white p-4 rounded-2xl font-semibold">
        Deposit
      </button>
    </Pod>
  );
};

export default Deposit;
