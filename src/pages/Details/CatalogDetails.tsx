import { ProductItem, Products } from "@/components";
import { setProducts } from "@/store/categorySlice/categorySlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CatalogDetails: React.FC = () => {
  const [stateProducts, setStateProducts] = useState<IProduct[]>([]);
  const [currentCategory, setCurrentCategory] = useState<ICategory>();
  const { catalogSlug } = useParams();

  const categories = useAppSelector((state) => state.category.categories);

  const dispatch = useAppDispatch();

  async function getProducts() {
    try {
      const response = await axios.get(
        `https://bizneskatalog.webclub.uz/api/companies/kushmag/${catalogSlug}`
      );
      if (response.status === 200) {
        setStateProducts(response.data.data.categories.products);
        dispatch(setProducts(response.data.data.categories.products));
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
      {currentCategory ? (
        <div className="section-catalogs catalog-details_page">
          <div className="container">
            <div className="paths">
              <a href="/">Bosh sahifa</a>
              <span>/</span>
              <a href="/catalogs">Katalog</a>
              <span>/</span>
              <a href="#" onClick={(e) => e.preventDefault()}>
                {currentCategory.name_uz}
              </a>
            </div>

            <div className="section-inner">
              <div className="section-title">
                <h3 className="title">{currentCategory.name_uz}</h3>
              </div>

              {stateProducts ? (
                <Products>
                  {stateProducts.map((product, index) => (
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
