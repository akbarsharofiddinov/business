import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  products: IProduct[];
  allProducts: IProduct[];
}

const initialState: IState = {
  products: [],
  allProducts: [],
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProducts: (state, { payload }: PayloadAction<IProduct[]>) => {
      state.products = payload;
    },

    setAllProducts: (state, { payload }: PayloadAction<IProduct[]>) => {
      state.allProducts = state.allProducts.concat(payload);
    },
  },
});

export const { setProducts, setAllProducts } = productSlice.actions;

export default productSlice.reducer;
