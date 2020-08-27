import React from "react";
import useCategories from '../../Hooks/useCategories'

import Catalogue from "../../components/Catalogue/index";

export default function index() {
  const { categories } = useCategories();

  return (
    <>
      <Catalogue categories={categories} />
    </>
  );
}
