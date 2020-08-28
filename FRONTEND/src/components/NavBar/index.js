import React from "react";
import useUser from "../../hooks/useUser";
import { Nav, Link, NavContainer, Circle } from "./styles";
import { MdHome } from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineBook } from "react-icons/ai";

export default function index() {
  const { cartItem } = useUser();

  return (
    <Nav>
      <NavContainer>
        <Link to="/">
          <MdHome />
          Categorias
        </Link>
        <Link to="/catalogue/1">
          {" "}
          <AiOutlineBook />
          Catalogo
        </Link>
        <Link to="/cart">
          <AiOutlineShoppingCart />
          <Circle>
            <span
              style={{
                paddingLeft: "2px",
                margin: "0",
              }}
            >
              {cartItem.length}
            </span>
          </Circle>
          Carrito
        </Link>
      </NavContainer>
    </Nav>
  );
}
