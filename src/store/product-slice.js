import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const product = {
  id: null,
  name: null,
  price: null,
  description: null,
  category: null,
  image: null,
  ratingScore: null,
  ratingCount: null,
};

const initialProductState = [product];

const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {
    loadProducts(state, action) {
      {
        state.product.id = action.payload.id;
        state.product.name = action.payload.name;
        state.product.price = action.payload.price;
        state.product.description = action.payload.description;
        state.product.category = action.payload.category;
        state.product.image = action.payload.image;
        state.product.ratingScore = action.payload.ratingScore;
        state.product.ratingCount = action.payload.ratingCount;
      }
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      {
        state.product.id = action.payload.product.id;
        state.product.name = action.payload.product.name;
        state.product.price = action.payload.product.price;
        state.product.description = action.payload.product.description;
        state.product.category = action.payload.product.category;
        state.product.image = action.payload.product.image;
        state.product.ratingScore = action.payload.product.ratingScore;
        state.product.ratingCount = action.payload.product.ratingCount;
      }
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
