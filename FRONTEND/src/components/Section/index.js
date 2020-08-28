import React from "react";
import { SectionContainer } from './styles'
import Products from "../Products/index";

export default function index({ image, products = [] }) {
  return (
    <SectionContainer>
      <img width="100%" src={`https://api.tissini.app/${image}`} alt="" />
      <Products products={products} />
    </SectionContainer>
  );
}
