import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  data: IProduct;
  catalogSlug?: string;
}

const ProductItem: React.FC<IProps> = ({ data, catalogSlug }) => {
  return (
    <>
      <div className="product-item">
        <div className="img-box">
          <img
            src={`https://bizneskatalog.webclub.uz/images/products/${data.photos[0]}`}
            alt=""
          />
        </div>
        <div className="body">
          <p className="name">{data.name_uz.slice(0, 30) + "..."}</p>
          <div className="price">
            <p>Narxi:</p>
            <p>{data.price} so‘m</p>
          </div>
          {catalogSlug ? (
            <a
              href={`/catalogs/${catalogSlug}/${data.slug}`}
              className="product-details"
            >
              Batafsil
            </a>
          ) : (
            <Link to={`${data.slug}`} className="product-details">
              Batafsil
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
