import React from "react";
import useCategories from "../../Hooks/useCategories";
import { Link, Nav } from "./styles";
import Catalogue from "../../components/Catalogue/index";
import LoadingSpinner from "../../components/Spinner/index";
import { Helmet } from "react-helmet";

export default function index({ i }) {
  const { categories, loading } = useCategories({ i });

  return (
    <>
      <Helmet>
        <title>Mi Tienda | Catalogo</title>
      </Helmet>
      <Nav>
        <Link to="/catalogue/1">Trends</Link>
        <Link to="/catalogue/2">Joyas</Link>
        <Link to="/catalogue/4">Muebles</Link>
        <Link to="/catalogue/5">Jeans</Link>
        <Link to="/catalogue/6">Fajas</Link>
        <Link to="/catalogue/8">Ropa Interior</Link>
        <Link to="/catalogue/10">Sport</Link>
      </Nav>
      {loading ? (
        <>
          <LoadingSpinner />{" "}
          <Helmet>
            <title>Cargando......</title>
          </Helmet>{" "}
        </>
      ) : (
        <Catalogue categories={categories} />
      )}
    </>
  );
}
