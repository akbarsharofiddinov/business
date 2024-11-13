import React from "react";
import { IoFilterOutline } from "react-icons/io5";
interface IProps {
  children: React.ReactNode[];
}

const Products: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <div className="filtering-box">
        <p className="results">
          Natija: <span>{children.length}</span> ta
        </p>
        <button className="filter-btn">
          <IoFilterOutline /> Saralash
        </button>
      </div>
      <div className="products">{children}</div>
    </>
  );
};

export default Products;
