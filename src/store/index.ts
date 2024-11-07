import { configureStore } from "@reduxjs/toolkit";
import companySlice from "./companySlice/companySlice";
import categorySlice from "./categorySlice/categorySlice";

export const store = configureStore({
  reducer: {
    company: companySlice,
    category: categorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
