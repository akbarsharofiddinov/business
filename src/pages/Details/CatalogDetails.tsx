import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import axios from "axios";

import { ProductItem, Products } from "@/components";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { setProducts } from "@/store/productSlice/productSlice";

const CatalogDetails: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<ICategory>();
  const { catalogSlug, productSlug } = useParams();

  const categories = useAppSelector((state) => state.category.categories);
  const products = useAppSelector((state) => state.product.products);

  const dispatch = useAppDispatch();

  async function getProducts() {
    try {
      const response = await axios.get(
        `https://bizneskatalog.webclub.uz/api/companies/kushmag/${catalogSlug}`
      );
      if (response.status === 200) {
        dispatch(setProducts(response.data.products.data));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (categories.length) {
      const foundCategory = categories.find(
        (category) => category.slug === catalogSlug
      );
      setCurrentCategory(foundCategory);
      getProducts();
    }
  }, [categories.length]);

  return (
    <>
      {productSlug ? (
        <Outlet />
      ) : currentCategory ? (
        <div className="section-catalogs catalog-details_page">
          <div className="container">
            <div className="paths">
              <Link to={"/"}>Bosh sahifa</Link>
              <span>/</span>
              <Link to={"/catalogs"}>Katalog</Link>
              <span>/</span>
              <Link to="#" onClick={(e) => e.preventDefault()}>
                {currentCategory.name_uz}
              </Link>
            </div>

            <div className="section-inner">
              <div className="section-title">
                <h3 className="title">{currentCategory.name_uz}</h3>
              </div>

              {products ? (
                <Products>
                  {products.map((product, index) => (
                    <ProductItem data={product} key={index} />
                  ))}
                </Products>
              ) : (
                <h1>No Products</h1>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CatalogDetails;
