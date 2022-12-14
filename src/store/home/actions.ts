import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMainData = createAsyncThunk("main/getMainData", async () => {
  const response = await new Promise((resolve) => {
    resolve([
      {
        id: 1,
        key: "description",
        title: "Description",
        icon: "paragraph",
        width: 160,
      },
      { id: 2, key: "photo", title: "Photo", icon: "view", width: 160 },
      {
        id: 5,
        key: "attachment",
        title: "Attachment",
        icon: "file",
        width: 160,
      },
      {
        id: 3,
        key: "like",
        title: "Like",
        icon: "checkboxChecked",
        width: 160,
      },
      { id: 4, key: "option", title: "Option", icon: "grid", width: 160 },
      {
        id: 5,
        key: "gender",
        title: "Gender",
        icon: "personalCloseup",
        width: 160,
      },
    ]);
  });
  return response;
});
