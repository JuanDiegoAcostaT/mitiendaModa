import React from "react";
import useProducts from "../../Hooks/useProducts";
import LoadingSpinner from "../../components/Spinner/index";
import { Helmet } from "react-helmet";

import ProductsList from "../../components/ProductsList";

export default function index({ id }) {
  const { products, isLoading } = useProducts({ id });
  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Mi Tienda | 404</title>
        </Helmet>{" "}
        <LoadingSpinner />;
      </>
    );
  } else {
    return (
      <div>
        <ProductsList products={products} />
      </div>
    );
  }
}
