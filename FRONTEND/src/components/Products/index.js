import React from "react";
import { ProductsComponent, ProducstContainer } from "./styles";
import Add from "../Add/index";

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
          <Add id={`${product.name}.......${product.price}`} />
          <p>{product.name}</p>
          <p>{product.categories.category}</p>
          <p>$ {product.price}</p>
        </ProductsComponent>
      ))}
    </ProducstContainer>
  );
}
