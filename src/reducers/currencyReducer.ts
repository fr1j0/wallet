import { createSlice } from "@reduxjs/toolkit";

export type Currency = {
  [key: string]: number;
};

const initialState: Currency[] = [];

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    increment(state) {
      state.push({ asd: 1 });
    },
  },
});

export const { increment } = currencySlice.actions;
export default currencySlice.reducer;
