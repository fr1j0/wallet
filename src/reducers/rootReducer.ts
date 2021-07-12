import { combineReducers } from "@reduxjs/toolkit";
import accountsReducer from "./accountsReducer";
import configReducer from "./configReducer";
import currencyReducer from "./currencyReducer";

const rootReducer = combineReducers({
  accounts: accountsReducer,
  currencies: currencyReducer,
  config: configReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
