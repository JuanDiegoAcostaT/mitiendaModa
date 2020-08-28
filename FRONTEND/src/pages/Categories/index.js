import React from "react";
import useSections from "../../Hooks/useSections";
import { CategoriesContainer } from "./styles";
import { Helmet } from "react-helmet";

import Categories from "../../components/Categories/index";
import LoadingSpinner from "../../components/Spinner/index";

export default function index() {
  const { sections, loading } = useSections();

  if (loading) {
    return (
      <>
        <LoadingSpinner />;
        <Helmet>
          <title>Cargando....</title>
        </Helmet>
      </>
    );
  } else {
    return (
      <>
        <Helmet>
          <title>Mi Tienda | Catalogo</title>
        </Helmet>
        <CategoriesContainer>
          <Categories sections={sections} />
        </CategoriesContainer>
      </>
    );
  }
}
