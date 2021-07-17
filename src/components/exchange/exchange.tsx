import React, { useEffect, useRef, useState } from "react";
import Pod from "../pod";
import { ReactComponent as ArrowIcon } from "../../assets/icon-arrow.svg";
import CurrencySelect from "../currencySelect";
import {
  Account,
  exchangeCurrency,
  fetchAccounts,
  selectAccounts,
  selectExchangeStatus,
} from "../../reducers/accountsReducer";
import { useDispatch, useSelector } from "react-redux";
import { selectConfig } from "../../reducers/configReducer";
import useExchangedValue from "../../hooks/useExchangedValue";
import Spinner from "../spinner";
import { addTransaction } from "../../reducers/transactionsReducer";

const Exchange = () => {
  const dispatch = useDispatch();
  const inputFromRef = useRef<HTMLInputElement>(null);
  const inputToRef = useRef<HTMLInputElement>(null);
  const currencyFromRef = useRef<HTMLSelectElement>(null);
  const currencyToRef = useRef<HTMLSelectElement>(null);
  const accounts = useSelector(selectAccounts);
  const defaultCurrency = useSelector(selectConfig).defaultCurrency;
  const [fromAccount, setFromAccount] = useState<Account | null>(null);
  const [toAccount, setToAccount] = useState<Account | null>(null);
  const [fromValue, setFromValue] = useState<string>("");
  const [exchanging, setExchanging] = useState(false);
  const { exchange, calculateExchange } = useExchangedValue();
  const exchangeStatus = useSelector(selectExchangeStatus);

  useEffect(() => {
    dispatch(fetchAccounts());
    handleFromInputChange();
  }, []);

  useEffect(() => {
    handleSelectFromChange(defaultCurrency);
    handleSelectToChange(defaultCurrency);
  }, [defaultCurrency]);

  useEffect(() => {
    if (exchangeStatus === "pending") {
      setExchanging(true);
    } else {
      setExchanging(false);
    }
    if (exchangeStatus === "fulfilled") {
      setFromValue("");
      calculateExchange(0, fromAccount?.id!, fromAccount?.id!);
    }
  }, [exchangeStatus]);

  const handleSelectFromChange = (currency: string) => {
    if (inputFromRef.current) inputFromRef.current.value = "";
    const account = accounts.list.find((account) => account.id === currency)!;
    setFromAccount(account);
    setFromValue("");
    if (account) calculateExchange(0, account.id, account.id);
  };

  const handleSelectToChange = (currency: string) => {
    if (inputToRef.current) inputToRef.current.value = "";
    const account = accounts.list.find((account) => account.id === currency)!;
    setToAccount(account);
    if (fromAccount && account)
      calculateExchange(Number(fromValue), fromAccount?.id!, account.id);
  };

  const handleFromInputChange = () => {
    const fromCurrency = (currencyFromRef.current as HTMLSelectElement).value;
    const fromAccount = accounts.list.find(
      (account) => account.id === fromCurrency
    );
    const value = Number((inputFromRef.current as HTMLInputElement).value);
    if (value <= fromAccount?.balance!) {
      setFromValue(value > 0 ? value.toString() : "");
    }
    calculateExchange(value, fromAccount?.id!, toAccount?.id!);
  };

  const doExchange = () => {
    const amount = Number(fromValue);
    dispatch(
      exchangeCurrency({
        amountFrom: amount,
        amountTo: exchange,
        fromCurrency: fromAccount?.id!,
        toCurrency: toAccount?.id!,
      })
    );
    dispatch(
      addTransaction({ type: "exchange", amount, currency: fromAccount?.id! })
    );
  };

  return (
    <Pod title="Exchange" description="Trade currencies">
      <div className="w-full rounded-2xl py-3 px-4 bg-blue-100 bg-opacity-50 shadow-innerpod">
        <div className="w-full text-sm mb-3">From</div>
        <div className="w-full text-4xl font-bold text-gray-600 flex justify-between">
          <input
            ref={inputFromRef}
            type="number"
            className="appearance-none bg-transparent border-none shadow-none w-4/5 py-2 pr-3 text-gray-700 leading-tight focus:outline-none"
            placeholder={fromAccount?.balance.toString()}
            value={fromValue}
            onChange={handleFromInputChange}
          />
          <CurrencySelect
            refEl={currencyFromRef}
            onChange={handleSelectFromChange}
          />
        </div>
      </div>
      <div className="w-full flex justify-center my-2">
        <ArrowIcon />
      </div>
      <div className="w-full rounded-2xl py-3 px-4 bg-blue-100 bg-opacity-50 shadow-innerpod">
        <div className="w-full text-sm mb-3">To</div>
        <div className="w-full text-4xl font-bold text-gray-600 flex justify-between">
          <input
            ref={inputToRef}
            type="number"
            className="appearance-none bg-transparent border-none shadow-none w-4/5 py-2 pr-3 text-gray-700 leading-tight focus:outline-none"
            value={exchange.toString()}
            disabled
          />
          <CurrencySelect
            refEl={currencyToRef}
            onChange={handleSelectToChange}
          />
        </div>
      </div>
      <button
        className="flex items-center justify-center w-full mt-6 bg-purple-700 text-sm text-white p-4 rounded-2xl font-semibold"
        onClick={doExchange}
      >
        {exchanging && <Spinner />}
        Exchange
      </button>
    </Pod>
  );
};

export default Exchange;
