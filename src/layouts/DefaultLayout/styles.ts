import styled from "styled-components";

export const MenuAndBody = styled.div`
  display: flex;
  margin-top: 0.5rem;
  padding: 0 2rem;

  @media (min-width: 0) and (max-width: 768px){
    aside{
      display: none;
    }
  }

  @media (min-width: 0) and (max-width: 375px){
    padding: 0 1rem;
  }
`