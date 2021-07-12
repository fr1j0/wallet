import { createSlice } from "@reduxjs/toolkit";

export type Account = {
  [key: string]: number;
};

const initialState: Account[] = [];

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    increment(state) {
      state.push({ asd: 1 });
    },
  },
});

export const { increment } = accountsSlice.actions;
export default accountsSlice.reducer;
