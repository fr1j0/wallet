import React from "react";
import Input from "../input";
import Pod from "../pod";

const Deposit = () => {
  return (
    <Pod title="Deposit" description="Select currency and payment method">
      <Input />
      <Input />
    </Pod>
  );
};

export default Deposit;
