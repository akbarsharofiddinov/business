import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  categories: ICategory[];
}

const initialState: IState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategories: (state, { payload }: PayloadAction<ICategory[]>) => {
      state.categories = payload;
    },

    setProducts: (
      state,
      { payload }: PayloadAction<{ categoryId: number; products: IProduct[] }>
    ) => {
      const filteredCategories = state.categories.filter((category) =>
        category.id === payload.categoryId
          ? (category.products = payload.products)
          : category
      );

      state.categories = filteredCategories;
    },
  },
});

export const { setCategories, setProducts } = categorySlice.actions;

export default categorySlice.reducer;
