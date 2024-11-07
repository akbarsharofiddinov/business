import React from "react";

interface IProps {
  data: IProduct;
}

const ProductItem: React.FC<IProps> = ({ data }) => {
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
          <a href={`/product-details/${data.id}`} className="product-details">
            Batafsil
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
