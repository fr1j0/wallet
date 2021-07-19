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
        return currency?.ratio! < 1
          ? acc.balance * currency?.ratio!
          : acc.balance / currency?.ratio!;
      })
      .reduce((acc, curr) => acc + curr, 0);

    const total = Number(
      (defaultAccount?.ratio! < 1
        ? totalEUR / defaultAccount?.ratio!
        : totalEUR * defaultAccount?.ratio!
      ).toFixed(3)
    );

    return isNaN(total) ? 0 : total;
  };

  useEffect(() => {
    setTotalBalance(toDefaultCurrency());
  }, [accounts, config.defaultCurrency]);

  return totalBalance;
};

export default useTotalBalance;
