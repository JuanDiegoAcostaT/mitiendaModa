import React from "react";
import { Link } from "@reach/router";
import { ErrorContainer } from "./styles";
import { Helmet } from "react-helmet";

export default function index() {
  return (
    <>
      <Helmet>
        <title>Mi Tienda | 404</title>
      </Helmet>
      <ErrorContainer>
        <h2>Uppps..algo ha salido mal</h2>
        <h3>
          Por favor vuelve al menú inicial.<Link to="/">Aquí</Link>{" "}
        </h3>
      </ErrorContainer>
    </>
  );
}
