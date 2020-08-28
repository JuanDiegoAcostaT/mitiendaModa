import React from "react";
import { Link } from "@reach/router";
import { CatalogueItem } from "./styles";
import { Helmet } from "react-helmet";

export default function index({ image, id, name }) {
  return (
    <>
      <Helmet>
        <title>Mi Tienda | {name}</title>
      </Helmet>
      <CatalogueItem>
        <Link to={`product/${id}`}>
          <img  src={`https://api.tissini.app/${image}`} />
        </Link>
      </CatalogueItem>
    </>
  );
}
