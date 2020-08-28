import React from "react";
import { LinkStyled, Button } from "./styles";

const ButtonComponent = ({ children, href }) => {
  return href ? (
    <LinkStyled to={href}>{children}</LinkStyled>
  ) : (
    <Button type="submit">{children}</Button>
  );
};

export default ButtonComponent;
