import styled from "styled-components";

export const AppStyle = styled.div`
  display: flex;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  
  @media (max-width: 768px) {
    flex-direction: column ;
    -ms-transform: translate(-50%, -25%);
    transform: translate(-50%, -25%);
  }
`;