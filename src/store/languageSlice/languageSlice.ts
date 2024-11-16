import { createSlice } from "@reduxjs/toolkit";

interface IState {
  language: string;
}

const initialState: IState = {
  language: "uz",
};

export const languageSlice = createSlice({
  name: "languageSlice",
  initialState,
  reducers: {},
});

export const {} = languageSlice.actions;

export default languageSlice.reducer;
