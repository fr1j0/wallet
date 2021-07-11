import React from "react";
import Pod from "../pod";
import { ReactComponent as ExchangeIcon } from "../../assets/icon-exchange.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icon-arrow.svg";

const Transactions = () => {
  return (
    <Pod title="Transactions" description="Your latest operations">
      <div className="w-full rounded-2xl py-3 px-4 pb-6 bg-blue-100 bg-opacity-50 shadow-innerpod">
        <div className="w-full text-base mb-3">Operations</div>
        <div className="w-full max-h-40 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-blue-50 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          <div className="w-full pl-1 pr-4 text-base font-medium text-gray-700 flex justify-between py-1">
            <span className="flex">
              <ExchangeIcon className="w-5 fill-current text-gray-700 mr-2" />{" "}
              EUR - USD
            </span>
            <span>€500,34</span>
          </div>
          <div className="w-full pl-1 pr-4 text-base font-medium text-gray-700 flex justify-between py-1">
            <span className="flex">
              <ArrowIcon className="w-5 fill-current text-gray-700 mr-2" /> USD
            </span>
            <span>$10,41</span>
          </div>
          <div className="w-full pl-1 pr-4 text-base font-medium text-gray-700 flex justify-between py-1">
            <span>AED</span>
            <span>AED97,10</span>
          </div>
          <div className="w-full pl-1 pr-4 text-base font-medium text-gray-700 flex justify-between py-1">
            <span>CHF</span>
            <span>CHF300,41</span>
          </div>
          <div className="w-full pl-1 pr-4 text-base font-medium text-gray-700 flex justify-between py-1">
            <span>CHF</span>
            <span>CHF300,41</span>
          </div>
          <div className="w-full pl-1 pr-4 text-base font-medium text-gray-700 flex justify-between py-1">
            <span>CHF</span>
            <span>CHF300,41</span>
          </div>
          <div className="w-full pl-1 pr-4 text-base font-medium text-gray-700 flex justify-between py-1">
            <span>CHF</span>
            <span>CHF300,41</span>
          </div>
          <div className="w-full pl-1 pr-4 text-base font-medium text-gray-700 flex justify-between py-1">
            <span>CHF</span>
            <span>CHF300,41</span>
          </div>
        </div>
      </div>
    </Pod>
  );
};

export default Transactions;
