import React from "react";
import CurrencySelect from "../currencySelect";
import Pod from "../pod";

const Deposit = () => {
  const handleCurrencyChange = (currency: string) => {
    console.log("currenct", currency);
    // dispatch(updateConfig({ defaultCurrency: currency }));
  };

  return (
    <Pod title="Deposit" description="Select currency and payment method">
      <div className="w-full rounded-2xl py-3 px-4 bg-blue-100 bg-opacity-50 shadow-innerpod">
        <div className="w-full text-sm mb-3">Amount</div>
        <div className="w-full text-4xl font-bold text-gray-600 flex justify-between">
          <input
            type="number"
            className="appearance-none bg-transparent border-none shadow-none w-4/5 py-2 pr-3 text-gray-700 leading-tight focus:outline-none"
            placeholder="0.0"
          />
          <CurrencySelect onChange={handleCurrencyChange} />
        </div>
      </div>
      <button className="w-full mt-6 bg-purple-700 text-sm text-white p-4 rounded-2xl font-semibold">
        Deposit
      </button>
    </Pod>
  );
};

export default Deposit;
