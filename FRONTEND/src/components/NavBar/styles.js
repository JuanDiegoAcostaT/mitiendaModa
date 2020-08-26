import styled from "@emotion/styled";
import { Link } from "@reach/router";

export const NavBarContainer = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const NavBar = styled.div`
  background-color: var(--contrast-color);
  padding: 0 35%;
`;

export const To = styled(Link)`
  text-decoration: none;
  color: var(--white-color);
`;
