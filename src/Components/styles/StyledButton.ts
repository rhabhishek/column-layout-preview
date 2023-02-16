import styled from "styled-components";

export const StyledButton = styled.button`
  background: hsl(0, 0%, 95%);
  color: ${(props) => props.color};
  border-radius: 15px;
  border: 2px solid ${(props) => props.color};
  padding: 10px;  
  cursor: pointer;
  margin: 3rem 25% 0;
  
  &:hover &:active {
    background: ${(props) => props.color};
    color: hsl(0, 0%, 95%);
    border: 2px solid hsl(0, 0%, 95%);
  }
`;