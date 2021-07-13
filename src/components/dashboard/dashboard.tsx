import React, { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccounts, selectAccounts } from "../../reducers/accountsReducer";
import {
  fetchConfig,
  selectConfig,
  updateConfig,
} from "../../reducers/configReducer";
import { RootState } from "../../reducers/rootReducer";
import Pod from "../pod";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [defaultCurrency, setDefaultCurrency] = useState("");
  const accounts = useSelector(selectAccounts);
  const config = useSelector(selectConfig);
  const currencies = useSelector((state: RootState) => state.currencies.value);

  useEffect(() => {
    setDefaultCurrency(config.defaultCurrency);
  }, [config.defaultCurrency]);

  useEffect(() => {
    dispatch(fetchConfig());
    dispatch(fetchAccounts());
  }, []);

  const handleDefaultCurrencyChange = (
    e: SyntheticEvent<HTMLSelectElement, Event>
  ) => {
    const newDefaultCurrency = (e.target as HTMLSelectElement).value;
    dispatch(updateConfig({ defaultCurrency: newDefaultCurrency }));
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
          <span className="flex items-center">
            <span className="text-sm font-normal">default:</span>
            <select
              name="currency"
              className="text-sm bg-transparent focus:outline-none"
              value={defaultCurrency}
              onChange={handleDefaultCurrencyChange}
            >
              {currencies.map((currency, index) => (
                <option key={index} value={currency.id}>
                  {currency.id}
                </option>
              ))}
            </select>
          </span>
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
