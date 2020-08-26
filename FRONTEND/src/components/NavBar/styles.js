import styled from "@emotion/styled";
import { Link as LinkRouter } from "@reach/router";
import { fadeIn } from '../../animations/animation'

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
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 25%;
`

export const Link = styled(LinkRouter)`
  align-items: center;
  color: white;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &[aria-current] {
    color: #000;
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
