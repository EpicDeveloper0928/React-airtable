import { createAsyncThunk } from "@reduxjs/toolkit";

export const getColumsData = createAsyncThunk("main/getTableData", async () => {
  await new Promise(() => {
    return [];
  });
});
