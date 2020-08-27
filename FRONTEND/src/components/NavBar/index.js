import React from "react";
import { Nav, Link, NavContainer } from "./styles";

export default function index() {
  return (
    <Nav>
      <NavContainer>
        <Link to="/">Categorias</Link>
        <Link to="/catalogue">Catalogo</Link>
        <Link to="/cart">Carrito</Link>
      </NavContainer>
    </Nav>
  );
}
