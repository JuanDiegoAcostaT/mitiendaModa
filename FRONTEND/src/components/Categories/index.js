import React from "react";
import { CategoriesContainer, Categories } from "./styles";

import Section from "../Section/index";

export default function index({ sections }) {
  return (
    <CategoriesContainer>
      {sections.map(({ name, image, products }, index) => (
        <Categories key={index} >
          <Section name={name} image={image} products={products} />
          <hr />
        </Categories>
      ))}
    </CategoriesContainer>
  );
}
