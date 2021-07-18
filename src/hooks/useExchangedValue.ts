import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrencies } from "../reducers/currencyReducer";

// Calculates currency exchange

const useExchangedValue = () => {
  const currencies = useSelector(selectCurrencies);
  const [exchange, setExchange] = useState(0);

  const calculateExchange = (
    fromValue: number,
    fromCurrencyId: string,
    toCurrencyId: string
  ) => {
    const fromCurrency = currencies.find(
      (currency) => currency.id === fromCurrencyId
    );
    const toCurrency = currencies.find(
      (currency) => currency.id === toCurrencyId
    );
    const fromEUR = fromValue / fromCurrency?.ratio!;
    setExchange(Number((fromEUR * toCurrency?.ratio!).toFixed(2)));
  };

  return { exchange, calculateExchange };
};

export default useExchangedValue;
