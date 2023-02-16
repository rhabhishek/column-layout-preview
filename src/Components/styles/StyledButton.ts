import styled from "styled-components";

export const StyledButton = styled.button<{bgColor: string}>`
  background: hsl(0, 0%, 95%);
  color: ${(props) => props.bgColor};
  border-radius: 25px;
  border: 2px solid ${(props) => props.bgColor};
  padding: 10px 15px;  
  cursor: pointer;
  margin: 3rem 25% 0;
  
  &:hover &:active {
    background: ${(props) => props.bgColor};
    color: hsl(0, 0%, 95%);
    border: 2px solid hsl(0, 0%, 95%);
  }
`;