import React from "react";
import { CatalogueContainer } from "./styles";

import CatalogueItem from "../CatalogueItem/index";

export default function index({ categories }) {
  return (
    <CatalogueContainer>
      {categories.map(({ id, image }) => (
        <CatalogueItem id={id} image={image} />
      ))}
    </CatalogueContainer>
  );
}
