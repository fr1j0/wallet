import React, { useEffect } from "react";
import Pod from "../pod";
import { ReactComponent as ExchangeIcon } from "../../assets/icon-exchange.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icon-arrow.svg";
import {
  fetchTransactions,
  selectTransactions,
} from "../../reducers/transactionsReducer";
import { useDispatch, useSelector } from "react-redux";
import InnerPod from "../innerPod";

const Transactions = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  return (
    <Pod title="Transactions" description="Your latest operations">
      <InnerPod title="Operations" column={true}>
        {transactions.list.map((transaction, index) => (
          <div
            key={index}
            className="w-full pl-1 pr-4 text-base font-medium text-gray-700 flex justify-between py-1"
          >
            <span className="flex">
              {transaction.type === "deposit" ? (
                <>
                  <ArrowIcon className="w-5 fill-current text-gray-700 mr-2" />
                  <span>deposit</span>
                </>
              ) : (
                <>
                  <ExchangeIcon className="w-5 fill-current text-gray-700 mr-2" />
                  <span>exchange</span>
                </>
              )}
            </span>
            <span>{`${transaction.amount}${transaction.currency}`}</span>
          </div>
        ))}
      </InnerPod>
    </Pod>
  );
};

export default Transactions;
