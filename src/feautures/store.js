import categoriesSlice from "./categories/categoriesSlice"
import productsSlice from "./products/productsSlice"

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
  },
  devTools: true,
});