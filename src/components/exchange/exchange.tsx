import React from "react";
import Pod from "../pod";
import { ReactComponent as ArrowIcon } from "../../assets/icon-arrow.svg";
import CurrencySelect from "../currencySelect";

const Exchange = () => {
  const handleCurrencyChangeFrom = (currency: string) => {
    // dispatch(updateConfig({ defaultCurrency: currency }));
  };

  const handleCurrencyChangeTo = (currency: string) => {
    // dispatch(updateConfig({ defaultCurrency: currency }));
  };

  return (
    <Pod title="Exchange" description="Trade currencies">
      <div className="w-full rounded-2xl py-3 px-4 bg-blue-100 bg-opacity-50 shadow-innerpod">
        <div className="w-full text-sm mb-3">From</div>
        <div className="w-full text-4xl font-bold text-gray-600 flex justify-between">
          <input
            type="number"
            className="appearance-none bg-transparent border-none shadow-none w-4/5 py-2 pr-3 text-gray-700 leading-tight focus:outline-none"
            placeholder="0.0"
          />
          <CurrencySelect onChange={handleCurrencyChangeFrom} />
        </div>
      </div>
      <div className="w-full flex justify-center my-2">
        <ArrowIcon />
      </div>
      <div className="w-full rounded-2xl py-3 px-4 bg-blue-100 bg-opacity-50 shadow-innerpod">
        <div className="w-full text-sm mb-3">To</div>
        <div className="w-full text-4xl font-bold text-gray-600 flex justify-between">
          <input
            type="number"
            className="appearance-none bg-transparent border-none shadow-none w-4/5 py-2 pr-3 text-gray-700 leading-tight focus:outline-none"
            placeholder="0.0"
          />
          <CurrencySelect onChange={handleCurrencyChangeTo} />
        </div>
      </div>
    </Pod>
  );
};

export default Exchange;
