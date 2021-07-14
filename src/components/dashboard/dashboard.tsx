import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccounts, selectAccounts } from "../../reducers/accountsReducer";
import { updateConfig } from "../../reducers/configReducer";
import CurrencySelect from "../currencySelect";
import Pod from "../pod";

const Dashboard = () => {
  const dispatch = useDispatch();
  const accounts = useSelector(selectAccounts);

  useEffect(() => {
    dispatch(fetchAccounts());
  }, []);

  const handleCurrencyChange = (currency: string) => {
    dispatch(updateConfig({ defaultCurrency: currency }));
  };

  return (
    <Pod title="Dashboard" description="Accounts">
      <div className="w-full rounded-2xl py-3 px-4 bg-blue-100 bg-opacity-50 shadow-innerpod">
        <div className="w-full text-sm mb-3">Current balance</div>
        <div className="w-full text-4xl font-bold text-gray-600 flex justify-between">
          <input
            disabled
            type="number"
            className="appearance-none bg-transparent border-none shadow-none w-4/5 py-2 pr-3 text-gray-700 leading-tight focus:outline-none"
            placeholder="0.0"
            // value={totalBalance}
          />
          <CurrencySelect onChange={handleCurrencyChange} />
        </div>
      </div>
      <div className="w-full flex justify-center my-4"></div>
      <div className="w-full rounded-2xl py-3 pl-4 bg-blue-100 bg-opacity-50 shadow-innerpod">
        <div className="w-full text-sm mb-3">Accounts</div>
        <div className="w-full max-h-40 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {accounts.list.map((account, index) => {
            return (
              <div
                key={index}
                className="w-full pr-4 text-lg font-medium text-gray-600 flex justify-between"
              >
                <span>{account.id}</span>
                <span>{account.balance}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Pod>
  );
};

export default Dashboard;
