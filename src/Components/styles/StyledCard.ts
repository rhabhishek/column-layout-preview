import styled from "styled-components";


export const StyledCard = styled.div<{bgColor: string}>`
  background: ${(props) => props.bgColor};
  padding: 30px;
  color: hsla(0, 0%, 100%, 0.75);
  width: 225px;

  :first-child {
    border-radius: 5px 0 0 5px;
  }

  :last-child {
    border-radius: 0 5px 5px 0;
  }

  h1 {
    font-family: 'Big Shoulders Display', cursive;
    text-transform: uppercase;
    color: hsl(0, 0%, 95%);
  }

  img {
    width: 25%;
  }
  
  @media(max-width: 768px) {
    :first-child {
      border-radius: 5px 5px 0 0;
    }

    :last-child {
      border-radius: 0 0 5px 5px;
    }
  }
`;