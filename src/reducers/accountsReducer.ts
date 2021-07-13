import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export type RequestStatus = "pending" | "fulfilled" | "rejected" | "";

export const fetchAccounts = createAsyncThunk(
  "accounts/fetchAccounts",
  async () => {
    const response = await fetch("http://localhost:4000/accounts");
    return response.json();
  }
);

export type Account = {
  id: string;
  balance: number;
};

export type Accounts = {
  list: Account[];
  status: RequestStatus;
};

const initialState: Accounts = { list: [], status: "" };

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAccounts.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchAccounts.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchAccounts.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export const selectAccounts = ({ accounts }: RootState) => accounts;

export default accountsSlice.reducer;
