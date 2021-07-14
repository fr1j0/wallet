import React, { SyntheticEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectConfig } from "../../reducers/configReducer";
import { selectCurrencies } from "../../reducers/currencyReducer";

type Props = {
  onChange: (currency: string) => void;
};

const CurrencySelect = ({ onChange }: Props) => {
  const config = useSelector(selectConfig);
  const currencies = useSelector(selectCurrencies);
  const [defaultCurrency, setDefaultCurrency] = useState("");

  useEffect(() => {
    if (config.defaultCurrency) {
      setDefaultCurrency(config.defaultCurrency);
    }
  }, [config]);

  const handleOnchange = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
    const currency = (e.target as HTMLSelectElement).value;
    onChange(currency);
    setDefaultCurrency(currency);
  };

  return (
    <span className="flex items-center">
      <span className="text-sm font-normal">default:</span>
      <select
        name="currency"
        className="text-sm bg-transparent focus:outline-none"
        value={defaultCurrency}
        onChange={handleOnchange}
      >
        {currencies.map((currency, index) => (
          <option key={index} value={currency.id}>
            {currency.id}
          </option>
        ))}
      </select>
    </span>
  );
};

export default CurrencySelect;
