import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RequestStatus } from "./accountsReducer";
import { RootState } from "./rootReducer";

export type TransactionType = "deposit" | "exchange";

export type Transaction = {
  type: TransactionType;
  amount: number;
  currency: string;
};

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const transactions = await fetch(`http://localhost:4000/transactions`);
    return await transactions.json();
  }
);

export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async ({
    type,
    amount,
    currency,
  }: {
    type: TransactionType;
    amount: number;
    currency: string;
  }) => {
    const transaction: Transaction = { type, amount, currency };
    const response = await fetch(`http://localhost:4000/transactions`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(transaction),
    });
    return response.json();
  }
);

const initialState: { list: Transaction[]; status: RequestStatus } = {
  list: [],
  status: "",
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTransaction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(addTransaction.fulfilled, (state, action) => {
      state.list.push({ ...action.meta.arg });
      state.status = "fulfilled";
    });
    builder.addCase(addTransaction.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(fetchTransactions.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchTransactions.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchTransactions.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export const selectTransactions = (state: RootState) => state.transactions;

export default transactionsSlice.reducer;
