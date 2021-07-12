import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Account } from "../../reducers/accountsReducer";
import { Config } from "../../reducers/configReducer";
import { RootState } from "../../reducers/rootReducer";
import Pod from "../pod";

const Dashboard = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [config, setConfig] = useState<Config | null>(null);

  const currencies = useSelector((state: RootState) => state.currencies.value);

  useEffect(() => {
    const fetchAccounts = async () => {
      const res = await fetch("http://localhost:4000/accounts");
      const fetchedAccounts = await res.json();
      setAccounts(fetchedAccounts);
    };
    fetchAccounts();
  }, []);

  useEffect(() => {
    const fetchConfig = async () => {
      const res = await fetch("http://localhost:4000/config");
      const fetchedConfig = await res.json();
      setConfig(fetchedConfig);
    };
    fetchConfig();
  }, []);

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
              className="text-sm bg-transparent focus:outline-none"
            >
              {currencies.map((currency, index) => (
                <option
                  key={index}
                  value={currency.id}
                  selected={
                    currency.id === (config ? config.defaultCurrency : "")
                  }
                >
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
          {accounts.map((account, index) => {
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
