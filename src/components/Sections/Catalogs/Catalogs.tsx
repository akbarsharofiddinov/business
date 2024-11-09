import { useAppSelector } from "@/store/hooks/hooks";
import React from "react";
import { Link } from "react-router-dom";

const Catalogs: React.FC = () => {
  const categories = useAppSelector((state) => state.category.categories);

  return (
    <>
      <section className="section-catalogs">
        <div className="container">
          <div className="section-title">
            <h3 className="title">Katalog</h3>
          </div>
          <div className="section-inner">
            <div className="catalogs">
              {categories?.length
                ? categories.map((category, index) => (
                    <div className="catalog" key={index}>
                      {/* <a href={`catalogs/${category.slug}`}></a> */}
                      <Link to={`catalogs/${category.slug}`}></Link>
                      <img
                        src={`https://bizneskatalog.webclub.uz/images/categories/${category.photo}`}
                        alt=""
                      />
                      <p className="catalog-name">{category.name_kr}</p>
                    </div>
                  ))
                : ""}
              {/* <div className="catalog">
                <img src={catalog} alt="" />
                <p className="catalog-name">Ichki eshiklar</p>
              </div>
              <div className="catalog">
                <img src={catalog} alt="" />
                <p className="catalog-name">Ichki eshiklar</p>
              </div>
              <div className="catalog">
                <img src={catalog} alt="" />
                <p className="catalog-name">Ichki eshiklar</p>
              </div>
              <div className="catalog">
                <img src={catalog} alt="" />
                <p className="catalog-name">Ichki eshiklar</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalogs;
