import React from "react";
import { HeaderContainer, SignNav, NavItem, Title } from "./styles";

export default function index() {
  return (
    <HeaderContainer>
      <Title>Mi Tienda</Title>
      <SignNav>
        <NavItem>Login</NavItem>
        <NavItem>Register</NavItem>
      </SignNav>
    </HeaderContainer>
  );
}
