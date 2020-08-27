import React from "react";
import { CategoriesContainer } from "./styles";

import Section from "../Section/index";

export default function index({ sections }) {
  return (
    <CategoriesContainer>
      {sections.map(({ name, image, products }) => (
        <Section name={name} image={image} products={products} />
      ))}
    </CategoriesContainer>
  );
}
