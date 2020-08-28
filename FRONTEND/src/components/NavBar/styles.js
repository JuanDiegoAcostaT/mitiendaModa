import styled from "@emotion/styled";
import { Link as LinkRouter } from "@reach/router";
import { fadeIn } from "../../animations/animation";

export const Circle = styled.div`
  width: 15px;
  height: 15px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background-color: var(--main-color);
  margin: 0 10px;
  font-size : 10px;
`;

export const Nav = styled.nav`
  align-items: center;
  background: var(--contrast-color);
  bottom: 0;
  left: 0;
  margin: 0 auto;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
  -webkit-box-shadow: 0px 10px 72px 19px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 72px 19px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 72px 19px rgba(0, 0, 0, 0.75);
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 25%;
`;

export const Link = styled(LinkRouter)`
  align-items: center;
  color: white;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &[aria-current] {
    &:after {
      ${fadeIn({ time: "0.5s" })};
      content: "·";
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }
`;
