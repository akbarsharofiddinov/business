import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  compnay: ICompany;
}

const initialState: IState = {
  compnay: {
    id: 0,
    address: "",
    categories: [
      {
        company_id: 0,
        id: 0,
        name_kr: "",
        name_ru: "",
        name_uz: "",
        photo: "",
        slug: "",
        products: []
      },
    ],
    description_kr: "",
    description_ru: "",
    description_uz: "",
    instagram: "",
    logo: "",
    name: "",
    slug: "",
    telegram: "",
    telephones: "",
  },
};

export const companySlice = createSlice({
  name: "companySlice",
  initialState,
  reducers: {
    setCompany: (state, { payload }: PayloadAction<ICompany>) => {
      state.compnay = payload;
    },
  },
});

export const { setCompany } = companySlice.actions;

export default companySlice.reducer;
