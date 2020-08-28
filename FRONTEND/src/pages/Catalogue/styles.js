import styled from "@emotion/styled";
import { Link as LinkRouter } from "@reach/router";

export const Link = styled(LinkRouter)`
  text-decoration: none;
  padding: 10px;
  &:hover {
    color: var(--contrast-color);
  }
`;

export const Nav = styled.nav`
  padding-top: 100px;
  text-align: center;
`;
