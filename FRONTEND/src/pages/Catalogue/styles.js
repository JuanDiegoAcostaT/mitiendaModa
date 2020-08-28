import styled from "@emotion/styled";
import { Link as LinkRouter } from "@reach/router";

export const Link = styled(LinkRouter)`
  text-decoration: none;
  padding : 10px;
  &:hover {
    color: var(--contrast-color);
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding: 20% 5% 5% 5%;
  text-align: center;
`;
