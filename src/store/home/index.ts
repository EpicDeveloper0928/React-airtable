import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { STATUSES } from "constant/redux";
import { IColumnType, IData } from "types/table";
import { getMainData } from "./actions";
import { MainState } from "./types";

const PREFIX = "main";

const initialState: MainState = {
  status: STATUSES.INITIAL,
  data: undefined,
};

const setData = (state: MainState, data: IColumnType<IData>[]) => {
  state.data = data;
};

const mainSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    addColumn: (
      state,
      {
        payload,
      }: {
        payload: {
          current: IColumnType<IData>;
          new: IColumnType<IData>;
          position: string;
        };
      }
    ) => {
      console.log(payload);

      const selectedIndex =
        state.data?.findIndex((item) => item.id === payload.current.id) ?? 0;
      state.data?.splice(
        payload.position === "left" ? selectedIndex : selectedIndex + 1,
        0,
        { ...payload.new }
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getMainData.fulfilled.type,
      (state: MainState, action: PayloadAction<IColumnType<IData>[]>) => {
        state.status = STATUSES.FULFILLED;
        setData(state, action.payload);
      }
    );
  },
});

export const { addColumn } = mainSlice.actions;

export default mainSlice.reducer;
