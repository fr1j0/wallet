import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { RequestStatus } from "./accountsReducer";
import { RootState } from "./rootReducer";

export const fetchConfig = createAsyncThunk("config/fetchConfig", async () => {
  const response = await fetch("http://localhost:4000/config");
  return response.json();
});

export const updateConfig = createAsyncThunk(
  "config/fetchConfig",
  async (obj: ConfigParams, { dispatch, getState }) => {
    const { config } = getState() as RootState;

    const response = await fetch("http://localhost:4000/config/", {
      method: "PATCH",
      body: JSON.stringify({ ...config.params, ...obj }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
);

type ConfigParams = { defaultCurrency: string };

export type Config = {
  params: ConfigParams;
  status: RequestStatus;
};

const initialState: Config = {
  params: { defaultCurrency: "" },
  status: "",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(fetchConfig.pending, updateConfig.pending),
      (state, action) => {
        state.status = "pending";
      }
    );
    builder.addMatcher(isAnyOf(fetchConfig.fulfilled), (state, { payload }) => {
      state.params.defaultCurrency = payload.defaultCurrency;
      state.status = "fulfilled";
    });
    builder.addMatcher(
      isAnyOf(updateConfig.fulfilled),
      (state, { payload }) => {
        state.status = "fulfilled";
      }
    );
    builder.addMatcher(
      isAnyOf(fetchConfig.rejected, updateConfig.rejected),
      (state, action) => {
        state.status = "rejected";
      }
    );
  },
});

export const selectConfig = ({ config }: RootState) => config.params;

export default configSlice.reducer;
