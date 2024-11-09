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
  },
});

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;
