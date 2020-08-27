import React from "react";
import { ProductsContainer } from "./styles";

import ProductsImages from "../ProductsImage/index";

const index = ({ products }) => {
  return (
    <ProductsContainer>
      {products.map(({ images, price }) => (
        <div className="">
          <ProductsImages images={images} />
          <span>{price}</span>
        </div>
      ))}
    </ProductsContainer>
  );
};

export default index;
