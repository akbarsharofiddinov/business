import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components";
import {
  About,
  CatalogDetails,
  Catalogs,
  Comments,
  Companies,
  Home,
  ProductDetails,
} from "@/pages";

import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Companies />,
      children: [
        {
          path: ":companySlug",
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
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
