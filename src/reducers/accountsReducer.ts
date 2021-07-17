import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export type RequestStatus = "pending" | "fulfilled" | "rejected" | "";

export const fetchAccounts = createAsyncThunk(
  "accounts/fetchAccounts",
  async () => {
    const response = await fetch("http://localhost:4000/accounts");
    return response.json();
  }
);

export const depositCurrency = createAsyncThunk<
  void,
  { amount: number; currency: string }
>(
  "accounts/deposit",
  async ({ amount, currency }: { amount: number; currency: string }) => {
    const account = await fetch(`http://localhost:4000/accounts/${currency}`);
    const accountContent = await account.json();
    const newBalance = {
      ...accountContent,
      balance: accountContent.balance + amount,
    };

    const response = await fetch(`http://localhost:4000/accounts/${currency}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(newBalance),
    });
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
    builder.addMatcher(
      isAnyOf(fetchAccounts.pending, depositCurrency.pending),
      (state, action) => {
        state.status = "pending";
      }
    );
    builder.addMatcher(
      isAnyOf(fetchAccounts.fulfilled),
      (state, { payload }) => {
        state.list = payload;
        state.status = "fulfilled";
      }
    );
    builder.addMatcher(
      isAnyOf(depositCurrency.fulfilled),
      (state, { payload }) => {
        state.status = "fulfilled";
      }
    );
    builder.addMatcher(
      isAnyOf(fetchAccounts.rejected, depositCurrency.rejected),
      (state, action) => {
        state.status = "rejected";
      }
    );
  },
});

export const selectAccounts = ({ accounts }: RootState) => accounts;
export const selectDepositStatus = ({ accounts }: RootState) => accounts.status;

export default accountsSlice.reducer;
