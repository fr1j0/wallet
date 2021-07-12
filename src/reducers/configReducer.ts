import { createSlice } from "@reduxjs/toolkit";

export type Config = {
  defaultCurrency: string;
};

const initialState: Config = {
  defaultCurrency: "EUR",
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
