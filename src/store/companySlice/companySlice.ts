import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  company: ICompany;
  allCompanies: ICompany[];
}

const initialState: IState = {
  company: {
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
        products: [],
      },
    ],
    banner_image: "",
    banner_text_kr: "",
    banner_text_ru: "",
    banner_text_uz: "",
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
  allCompanies: [],
};

export const companySlice = createSlice({
  name: "companySlice",
  initialState,
  reducers: {
    setCompany: (state, { payload }: PayloadAction<ICompany>) => {
      state.company = payload;
    },

    setAllCompany: (state, { payload }: PayloadAction<ICompany[]>) => {
      state.allCompanies = payload;
    },
  },
});

export const { setCompany, setAllCompany } = companySlice.actions;

export default companySlice.reducer;
