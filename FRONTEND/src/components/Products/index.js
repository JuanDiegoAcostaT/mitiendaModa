import React from "react";
import { ProductsComponent ,ProducstContainer } from "./styles";

export default function index({ products = [] }) {
  return (
    <ProducstContainer>
      {products.map((product) => (
        <ProductsComponent key={product.id}>
          <img
            width="150px"
            src={`https://api.tissini.app/${product.image.url}`}
            alt=""
          />
          <p>{product.name}</p>
          <p>{product.categories.category}</p>
          <p>{product.price}</p>
        </ProductsComponent>
      ))}
    </ProducstContainer>
  );
}
