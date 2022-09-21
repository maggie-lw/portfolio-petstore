import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import productReducer from "./product-slice";

const makeStore = () => configureStore({
  reducer: { product: productReducer }
});

export const wrapper = createWrapper(makeStore);
