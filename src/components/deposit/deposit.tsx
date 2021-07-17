import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  depositCurrency,
  selectDepositStatus,
} from "../../reducers/accountsReducer";
import CurrencySelect from "../currencySelect";
import Pod from "../pod";
import Spinner from "../spinner";

const Deposit = () => {
  const dispatch = useDispatch();
  const [depositing, setDepositing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const currencyRef = useRef<HTMLSelectElement>(null);
  const depositStatus = useSelector(selectDepositStatus);

  useEffect(() => {
    if (depositStatus === "pending") {
      setDepositing(true);
    } else {
      setDepositing(false);
    }
    if (depositStatus === "fulfilled" && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [depositStatus]);

  const doDeposit = async () => {
    const amount: number = Number(inputRef?.current!.value);
    const currency = (currencyRef.current as HTMLSelectElement).value;
    await dispatch(depositCurrency({ amount, currency }));
  };

  return (
    <Pod title="Deposit" description="Select currency and payment method">
      <div className="w-full rounded-2xl py-3 px-4 bg-blue-100 bg-opacity-50 shadow-innerpod">
        <div className="w-full text-sm mb-3">Amount</div>
        <div className="w-full text-4xl font-bold text-gray-600 flex justify-between">
          <input
            ref={inputRef}
            type="number"
            className="appearance-none bg-transparent border-none shadow-none w-4/5 py-2 pr-3 text-gray-700 leading-tight focus:outline-none"
            placeholder="0.0"
          />
          <CurrencySelect refEl={currencyRef} />
        </div>
      </div>
      <button
        className="flex items-center justify-center w-full mt-6 bg-purple-700 text-sm text-white p-4 rounded-2xl font-semibold"
        onClick={doDeposit}
      >
        {depositing && <Spinner />}
        Deposit
      </button>
    </Pod>
  );
};

export default Deposit;
