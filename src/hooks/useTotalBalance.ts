import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAccounts } from "../reducers/accountsReducer";
import { selectConfig } from "../reducers/configReducer";
import store from "../store";

// Calculates total balance based on user's default currency

const useTotalBalance = () => {
  const config = useSelector(selectConfig);
  const accounts = useSelector(selectAccounts);
  const [totalBalance, setTotalBalance] = useState(0);

  const toDefaultCurrency = () => {
    const defaultCurrencyId = store.getState().config.params.defaultCurrency;

    const defaultAccount = store
      .getState()
      .currencies.list.find((curr) => curr.id === defaultCurrencyId);

    const totalEUR = store
      .getState()
      .accounts.list.map((acc) => {
        const currency = store
          .getState()
          .currencies.list.find((curr) => curr.id === acc.id);
        return acc.balance / currency?.ratio!;
      })
      .reduce((acc, curr) => acc + curr, 0);

    const total = Number((totalEUR * defaultAccount?.ratio!).toFixed(3));

    return isNaN(total) ? 0 : total;
  };

  useEffect(() => {
    setTotalBalance(toDefaultCurrency());
  }, [accounts, config.defaultCurrency]);

  return totalBalance;
};

export default useTotalBalance;
