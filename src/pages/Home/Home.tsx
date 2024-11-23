import React, { useEffect } from "react";
import { Banner, Catalogs, Comments, Gallery, Statistics } from "@/components";
import axios from "axios";

import { setCompany, setFeedback } from "@/store/companySlice/companySlice";
import { setCategories } from "@/store/categorySlice/categorySlice";
import { useAppDispatch } from "@/store/hooks/hooks";
import { useParams } from "react-router-dom";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { companySlug } = useParams();

  async function getCompany() {
    try {
      const response = await axios.get(
        `https://bizneskatalog.webclub.uz/api/companies/${companySlug}`
      );
      if (response.status === 200) {
        dispatch(setCompany(response.data.company));
        dispatch(setCategories(response.data.category));
        dispatch(setFeedback(response.data.feedback));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCompany();
  }, []);

  return (
    <>
      <Banner />
      <Statistics />
      <Catalogs />
      <Comments />
      <Gallery />
    </>
  );
};

export default Home;
