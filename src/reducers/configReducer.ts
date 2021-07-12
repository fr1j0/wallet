import { createSlice } from "@reduxjs/toolkit";
import { Currency } from "./currencyReducer";

type Config = {
  defaultCurrency: Currency;
};

const initialState: Config = {
  defaultCurrency: { EUR: 1.24 },
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    // increment(state) {
    //   state.push({ asd: 1 });
    // },
  },
});

// export const { increment } = configSlice.actions;
export default configSlice.reducer;
