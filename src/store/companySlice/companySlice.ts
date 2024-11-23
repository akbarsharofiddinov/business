import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  company: ICompany;
  allCompanies: ICompany[];
  feedback: IFeedback[];
}

const initialState: IState = {
  company: {
    id: 0,
    address: "",
    categories: [],
    banner_image: "",
    banner_text_kr: "",
    banner_text_ru: "",
    banner_text_uz: "",
    description_kr: "",
    description_ru: "",
    description_uz: "",
    instagram: "",
    youtube: "",
    facebook: "",
    logo: "",
    name: "",
    slug: "",
    telegram: "",
    telephones: "",
  },
  allCompanies: [],
  feedback: [],
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

    setFeedback: (state, { payload }: PayloadAction<IFeedback[]>) => {
      state.feedback = payload;
    },
  },
});

export const { setCompany, setAllCompany, setFeedback } = companySlice.actions;

export default companySlice.reducer;
