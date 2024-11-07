import React from "react";

import { Outlet, useParams } from "react-router-dom";
import { useAppSelector } from "@/store/hooks/hooks";

const Catalogs: React.FC = () => {
  const { catalogSlug } = useParams();

  const categories = useAppSelector((state) => state.category.categories);

  return (
    <>
      {!catalogSlug ? (
        <section className="section-catalogs catalog-page">
          <div className="container">
            <div className="paths">
              <a href="/">Bosh sahifa</a>/<a href="/catalogs">Katalog</a>
            </div>

            <div className="section-inner">
              <div className="section-title">
                <h3 className="title">Katalog</h3>
              </div>
              <div className="catalogs">
                {categories?.length
                  ? categories.map((category, index) => (
                      <div className="catalog" key={index}>
                        <a href={`catalogs/${category.slug}`}></a>
                        <img
                          src={`https://bizneskatalog.webclub.uz/images/categories/${category.photo}`}
                          alt=""
                        />
                        <p className="catalog-name">{category.name_kr}</p>
                      </div>
                    ))
                  : ""}
              </div>
              {/* <div className="catalogs">
                <div className="catalog">
                  <Link to="catalog-details"></Link>
                  <img src={catalog} alt="" />
                  <p className="catalog-name">Ichki eshiklar</p>
                </div>
                <div className="catalog">
                  <Link to="catalog-details"></Link>
                  <img src={catalog} alt="" />
                  <p className="catalog-name">Ichki eshiklar</p>
                </div>
                <div className="catalog">
                  <Link to="catalog-details"></Link>
                  <img src={catalog} alt="" />
                  <p className="catalog-name">Ichki eshiklar</p>
                </div>
                <div className="catalog">
                  <Link to="catalog-details"></Link>
                  <img src={catalog} alt="" />
                  <p className="catalog-name">Ichki eshiklar</p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Catalogs;
