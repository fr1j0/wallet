import { combineReducers } from "@reduxjs/toolkit";
import accountsReducer from "./accountsReducer";
import configReducer from "./configReducer";
import currencyReducer from "./currencyReducer";
import transactionsReducer from "./transactionsReducer";

const rootReducer = combineReducers({
  accounts: accountsReducer,
  currencies: currencyReducer,
  config: configReducer,
  transactions: transactionsReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
