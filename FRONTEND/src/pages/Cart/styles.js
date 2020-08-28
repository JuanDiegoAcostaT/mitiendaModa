import styled from "@emotion/styled";

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15% 10% ;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10% 14% ;
`;

export const Button = styled.button`
  background-color: var(--main-color);
  padding : 5px 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  color: var(--white-color);
  &:hover{
    cursor: pointer;
    padding : 8px 13px;
  }
`;
