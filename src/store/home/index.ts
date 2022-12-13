import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUSES } from "constant/redux";
import { getColumsData } from "./actions";
import { MainState } from "./types";

const PREFIX = "main";

const initialState: MainState = {
  status: STATUSES.INITIAL,
  data: null,
};

const setData = (state: MainState, data: any) => {
  state.data = data;
};

const mainSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getColumsData.fulfilled.type,
      (state: any, action: PayloadAction<any>) => {
        state.status = STATUSES.FULFILLED;
        setData(state, action.payload);
      }
    );
  },
});

export default mainSlice.reducer;
