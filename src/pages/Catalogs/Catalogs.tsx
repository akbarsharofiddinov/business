import React, { useEffect } from "react";

import { Link, Outlet, useParams } from "react-router-dom";
import { useAppSelector } from "@/store/hooks/hooks";

const Catalogs: React.FC = () => {
  const { catalogSlug } = useParams();

  const categories = useAppSelector((state) => state.category.categories);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!catalogSlug ? (
        <section className="section-catalogs catalog-page">
          <div className="container">
            <div className="paths">
              <Link to={"/"}>Bosh sahifa</Link>/
              <Link to={"/catalogs"}>Katalog</Link>
            </div>

            <div className="section-inner">
              <div className="section-title">
                <h3 className="title">Katalog</h3>
              </div>
              <div className="catalogs">
                {categories?.length
                  ? categories.map((category, index) => (
                      <div className="catalog" key={index}>
                        {/* <a href={`catalogs/${category.slug}`}></a> */}
                        <Link to={`${category.slug}`}></Link>
                        <img
                          src={`https://bizneskatalog.webclub.uz/images/categories/${category.photo}`}
                          alt=""
                        />
                        <p className="catalog-name">{category.name_kr}</p>
                      </div>
                    ))
                  : ""}
              </div>
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
