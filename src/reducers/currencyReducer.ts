import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RequestStatus } from "./accountsReducer";
import { RootState } from "./rootReducer";

export const fetchCurrencies = createAsyncThunk(
  "currency/fetchCurrencies",
  async () => {
    const response = await fetch("http://localhost:4000/currency");
    return response.json();
  }
);

export type Currency = { id: string; ratio: number; symbol: string };

const initialState: { list: Currency[]; status: RequestStatus } = {
  list: [],
  status: "",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchCurrencies.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchCurrencies.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export const selectCurrencies = (state: RootState) => state.currencies.list;

export default currencySlice.reducer;
