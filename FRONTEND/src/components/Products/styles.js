import styled from "@emotion/styled";

export const ProducstContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductsComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3%;
  margin: 3%;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: var(--main-color);
  -webkit-box-shadow: 0px 0px 37px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 37px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 37px 0px rgba(0, 0, 0, 0.75);
  color: var(--white-color)
`;
