import React from "react";
import useProducts from "../../Hooks/useProducts";

import ProductsList from "../../components/ProductsList";

export default function index({ id }) {
  const { products, isLoading } = useProducts({ id });
  return (
    <>
      <ProductsList products={products} />
    </>
  );
}
