import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components";
import {
  About,
  CatalogDetails,
  Catalogs,
  Comments,
  Home,
  ProductDetails,
} from "@/pages";
import axios from "axios";
import { useAppDispatch } from "./store/hooks/hooks";
import { setCompany } from "@/store/companySlice/companySlice";
import { setCategories } from "./store/categorySlice/categorySlice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  async function getCompany() {
    try {
      const response = await axios.get(
        "https://bizneskatalog.webclub.uz/api/companies/kushmag"
      );
      if (response.status === 200) {
        dispatch(setCompany(response.data.company));
        dispatch(setCategories(response.data.category));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "comments",
          element: <Comments />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "catalogs",
          element: <Catalogs />,
          children: [
            {
              path: ":catalogSlug",
              element: <CatalogDetails />,
              children: [
                {
                  path: ":productSlug",
                  element: <ProductDetails />,
                },
              ],
            },
          ],
        },
        {
          path: "product-details/:productSlug",
          element: <ProductDetails />,
        },
      ],
    },
  ]);

  useEffect(() => {
    getCompany();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
