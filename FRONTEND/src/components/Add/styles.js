import styled from "@emotion/styled";

export const Add = styled.button`
  margin: 10px 0;
  transition: all 0.3s ease;
  border: none;
  border-radius: 5px;
  width: 150px;
  color: var(--white-color);
  height: 50px;
  background-color: ${(props) => props.bgColor};
  &:hover {
    background-color: ${(props) => props.bgHoverColor};
    cursor: pointer;
  }
`;
