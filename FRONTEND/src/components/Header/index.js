import React from "react";
import { Match } from "@reach/router";
import useUser from "../../hooks/useUser";

import { HeaderContainer, SignNav, Link, Title, GifButton } from "./styles";

export default function index() {
  const { isLogged, logout } = useUser();

  const handleClick = () => {
    logout();
  };

  const content = isLogged ? (
    <GifButton onClick={handleClick}>LogOut</GifButton>
  ) : (
    <>
      <Link to="/login">Iniciar Sesión</Link>
      <Link  style={{ paddingLeft: '10px' }} to="/register">Registrarse</Link>
    </>
  );

  return (
    <HeaderContainer>
      <Title>Mi Tienda 🛒</Title>
      <SignNav>
        <Match path="/:(catalogue/|1|2|4|5|6|8|10/|cart|)/:(login|register)">
          {(props) => (props.match ? null : content)}
        </Match>
      </SignNav>
    </HeaderContainer>
  );
}
