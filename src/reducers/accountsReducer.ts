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

export const withdrawCurrency = createAsyncThunk<
  void,
  { amount: number; currency: string }
>(
  "accounts/deposit",
  async ({ amount, currency }: { amount: number; currency: string }) => {
    const account = await fetch(`http://localhost:4000/accounts/${currency}`);
    const accountContent = await account.json();
    const newBalance = {
      ...accountContent,
      balance: accountContent.balance - amount,
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

export const exchangeCurrency = createAsyncThunk(
  "accounts/exchangeCurrency",
  async (
    {
      amountFrom,
      amountTo,
      fromCurrency,
      toCurrency,
    }: {
      amountFrom: number;
      amountTo: number;
      fromCurrency: string;
      toCurrency: string;
    },
    { dispatch }
  ) => {
    dispatch(withdrawCurrency({ amount: amountFrom, currency: fromCurrency }));
    dispatch(depositCurrency({ amount: amountTo, currency: toCurrency }));
  }
);

export type Account = {
  id: string;
  balance: number;
};

export type Accounts = {
  list: Account[];
  status: RequestStatus;
  exchangeStatus: RequestStatus;
};

const initialState: Accounts = { list: [], status: "", exchangeStatus: "" };

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
    builder.addMatcher(isAnyOf(exchangeCurrency.pending), (state, action) => {
      state.exchangeStatus = "pending";
    });
    builder.addMatcher(isAnyOf(exchangeCurrency.fulfilled), (state, action) => {
      state.exchangeStatus = "fulfilled";
    });
    builder.addMatcher(isAnyOf(exchangeCurrency.rejected), (state, action) => {
      state.exchangeStatus = "rejected";
    });
  },
});

export const selectAccounts = ({ accounts }: RootState) => accounts;
export const selectDepositStatus = ({ accounts }: RootState) => accounts.status;
export const selectExchangeStatus = ({ accounts }: RootState) =>
  accounts.exchangeStatus;

export default accountsSlice.reducer;
