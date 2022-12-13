import { configureStore } from "@reduxjs/toolkit";

import mainReducer from "./home";

const store = configureStore({
  reducer: {
    manage: mainReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
