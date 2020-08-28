import React from "react";
import { ProductsContainer, Info } from "./styles";

import ProductsImages from "../ProductsImage/index";
import Add from "../Add/index";

const index = ({ products }) => {
  return (
    <ProductsContainer>
      {products.map(({ images, price, id, name, reference }) => (
        <div key={id} className="">
          <ProductsImages images={images} />
          <Info>
            <span>{name}.......$ {price}</span>
            <span></span>
            <Add id={`${name}.......${price}`} />
          </Info>
        </div>
      ))}
    </ProductsContainer>
  );
};

export default index;
