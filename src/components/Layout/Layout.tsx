import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/components";

import axios from "axios";

import { setCompany, setFeedback } from "@/store/companySlice/companySlice";
import { setCategories } from "@/store/categorySlice/categorySlice";
import { useAppDispatch } from "@/store/hooks/hooks";
import { useParams } from "react-router-dom";

const Layout: React.FC = () => {
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
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
