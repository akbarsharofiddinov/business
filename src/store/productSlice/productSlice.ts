import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  products: IProduct[];
}

const initialState: IState = {
  products: [],
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProducts: (state, { payload }: PayloadAction<IProduct[]>) => {
      state.products = payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
