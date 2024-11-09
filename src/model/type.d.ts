interface IProduct {
  name_uz: string;
  name_ru: string;
  name_kr: string;
  description_uz: string;
  description_ru: string;
  description_kr: string;
  slug: string;
  price: null;
  unit: null;
  photos: string[];
}

interface ICategory {
  company_id: number;
  id: number;
  name_kr: string;
  name_ru: string;
  name_uz: string;
  photo: string;
  slug: string;
  products: IProduct[];
}

interface ICompany {
  id: number;
  name: string;
  logo: string;
  slug: string;
  description_uz: string;
  description_kr: string;
  description_ru: string;
  telephones: string;
  telegram: string;
  instagram: string;
  address: string;
  categories: ICategory[];
}
