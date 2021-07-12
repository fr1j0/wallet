import { createSlice } from "@reduxjs/toolkit";

export type Currency = { id: string; ratio: number; symbol: string };

const initialState: { value: Currency[] } = { value: [] };

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    set(state, { payload }) {
      state.value = payload;
    },
  },
});

export const { set } = currencySlice.actions;
export default currencySlice.reducer;
