import categoriesSlice from "./categories/categoriesSlice"

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
  },
  devTools: true,
});