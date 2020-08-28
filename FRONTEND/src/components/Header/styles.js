import styled from "@emotion/styled";
import { Link as LinkRouter } from "@reach/router";

export const HeaderContainer = styled.div`
  background-color: var(--main-color);
  color: var(--white-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: 0px -10px 72px 19px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -10px 72px 19px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -10px 72px 19px rgba(0, 0, 0, 0.75);
`;

export const SignNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 25px;
`;

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: white;
`;

export const Title = styled.h1`
  padding-left: 25px;
`;

export const GifButton = styled.button`
  height: 30px;
  width: 100px;
  background: white;
  border: 0;
  border-radius: 10px;
  color: var(--contrast-color);
  transition: all 0.2s ease;
  &:hover {
    background: var(--contrast-color);
    color: white;
    cursor: pointer;
  }
`;
