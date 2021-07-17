import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTotalBalance from "../../hooks/useTotalBalance";
import { fetchAccounts, selectAccounts } from "../../reducers/accountsReducer";
import { updateConfig } from "../../reducers/configReducer";
import { selectCurrencies } from "../../reducers/currencyReducer";
import CurrencySelect from "../currencySelect";
import InnerPod from "../innerPod";
import Pod from "../pod";

const Dashboard = () => {
  const dispatch = useDispatch();
  const accounts = useSelector(selectAccounts);
  const currencies = useSelector(selectCurrencies);
  const totalBalance = useTotalBalance();

  useEffect(() => {
    dispatch(fetchAccounts());
  }, []);

  const handleCurrencyChange = (currency: string) => {
    dispatch(updateConfig({ defaultCurrency: currency }));
  };

  const getCurrencySymbol = (currencyId: string): string => {
    const currency = currencies.find((currency) => currency.id === currencyId);
    return currency ? currency.symbol : "";
  };

  return (
    <Pod title="Dashboard" description="Accounts">
      <InnerPod title="Total balance">
        <input
          disabled
          type="number"
          className="appearance-none bg-transparent border-none shadow-none w-4/5 py-2 pr-3 text-gray-700 leading-tight focus:outline-none"
          placeholder="0.0"
          value={totalBalance}
        />
        <CurrencySelect onChange={handleCurrencyChange} />
      </InnerPod>
      <div className="w-full flex justify-center my-4"></div>
      <InnerPod title="Accounts">
        <div className="w-full max-h-40 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {accounts.list.map((account, index) => {
            return (
              <div
                key={index}
                className="w-full pr-4 text-lg font-medium text-gray-600 flex justify-between"
              >
                <span>{account.id}</span>
                <span>{getCurrencySymbol(account.id) + account.balance}</span>
              </div>
            );
          })}
        </div>
      </InnerPod>
    </Pod>
  );
};

export default Dashboard;
