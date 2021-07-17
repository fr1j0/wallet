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
import { addTransaction } from "../../reducers/transactionsReducer";
import InnerPod from "../innerPod";
import Button from "../button";

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
    const account = accounts.list.find(
      (account) => account.id === defaultCurrency
    )!;
    setFromAccount(account);
  }, [accounts]);

  useEffect(() => {
    handleSelectFromChange(defaultCurrency);
    handleSelectToChange(defaultCurrency);
  }, [defaultCurrency]);

  useEffect(() => {
    setExchanging(exchangeStatus === "pending");
    if (exchangeStatus === "fulfilled") {
      setFromValue("");
      calculateExchange(0, fromAccount?.id!, fromAccount?.id!);
      dispatch(fetchAccounts());
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
    if (amount === 0) return;
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
      <InnerPod title="From">
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
      </InnerPod>
      <div className="w-full flex justify-center my-2">
        <ArrowIcon />
      </div>
      <InnerPod title="To">
        <input
          ref={inputToRef}
          type="number"
          className="appearance-none bg-transparent border-none shadow-none w-4/5 py-2 pr-3 text-gray-700 leading-tight focus:outline-none"
          value={exchange.toString()}
          disabled
        />
        <CurrencySelect refEl={currencyToRef} onChange={handleSelectToChange} />
      </InnerPod>
      <Button onClick={doExchange} loading={exchanging}>
        Exchange
      </Button>
    </Pod>
  );
};

export default Exchange;
