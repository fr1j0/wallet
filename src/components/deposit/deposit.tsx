import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  depositCurrency,
  selectDepositStatus,
} from "../../reducers/accountsReducer";
import { addTransaction } from "../../reducers/transactionsReducer";
import Button from "../button";
import CurrencySelect from "../currencySelect";
import InnerPod from "../innerPod";
import Pod from "../pod";

// Deposit page content

const Deposit = () => {
  const dispatch = useDispatch();
  const [depositing, setDepositing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const currencyRef = useRef<HTMLSelectElement>(null);
  const depositStatus = useSelector(selectDepositStatus);

  useEffect(() => {
    setDepositing(depositStatus === "pending");
    if (depositStatus === "fulfilled" && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [depositStatus]);

  const doDeposit = () => {
    const amount: number = Number(inputRef?.current!.value);
    const currency = (currencyRef.current as HTMLSelectElement).value;
    if (amount === 0) return;
    dispatch(depositCurrency({ amount, currency }));
    dispatch(addTransaction({ type: "deposit", amount, currency }));
  };

  return (
    <Pod title="Deposit" description="Select currency and payment method">
      <InnerPod title="Amount">
        <input
          ref={inputRef}
          type="number"
          className="appearance-none bg-transparent border-none shadow-none w-4/5 py-2 pr-3 text-gray-700 leading-tight focus:outline-none"
          placeholder="0.0"
        />
        <CurrencySelect refEl={currencyRef} />
      </InnerPod>
      <Button onClick={doDeposit} loading={depositing}>
        Deposit
      </Button>
    </Pod>
  );
};

export default Deposit;
