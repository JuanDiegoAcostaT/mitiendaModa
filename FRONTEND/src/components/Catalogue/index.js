import React from "react";
import { CatalogueContainer } from "./styles";

import CatalogueItem from "../CatalogueItem/index";

export default function index({ categories }) {
  return (
    <CatalogueContainer>
      <h2>
        Selecciona tu Categoria Favorita y mira los productos que ofrecemos.
      </h2>
      {categories.map(({ id, image, name }) => (
        <CatalogueItem id={id} key={id} image={image} name={name} />
      ))}
    </CatalogueContainer>
  );
}
