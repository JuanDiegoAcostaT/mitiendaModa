import React from "react";
import { NavBarContainer, To, NavBar } from "./styles";

export default function index() {
  return (
    <NavBar>
      <NavBarContainer>
        <li>
          <To to="/">Categorias</To>
        </li>
        <li>
          <To to="/catalogue">Catalogo</To>
        </li>
        <li>
          <To to="/cart">Carrito</To>
        </li>
      </NavBarContainer>
    </NavBar>
  );
}
