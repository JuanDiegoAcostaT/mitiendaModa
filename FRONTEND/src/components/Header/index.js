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
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </>
  );

  return (
    <HeaderContainer>
      <Title>Mi Tienda</Title>
      <SignNav>
        <Match path="/:(catalogue|cart|)/:(login|register)">
          {(props) => (props.match ? null : content)}
        </Match>
      </SignNav>
    </HeaderContainer>
  );
}
