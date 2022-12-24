import styled from "styled-components";

interface BurgerProps {
  open: boolean
}

export const BurgerContainer = styled.nav`
  display: flex;
  align-items: center;

  img{
    cursor: pointer;
  }  

  @media (min-width: 769px){
    display: none;
  }
`

export const LateralMenu = styled.aside<BurgerProps>`
  display: ${props => props.open ? 'flex' : 'none'};
  flex-direction: column;
  gap: 1.5rem;
  position: absolute;
  top: 100px;
  right: 0;
  padding: 1.5rem;
  border-radius: 8px;
  background: rgba(${props => props.theme['--white-rgb']}, 0.16);
  h2{
    display: none;
  }
  div:nth-child(2){
    background-color: rgba(${props => props.theme['--white-rgb']}, 0.16);
    height: 0.1px;
  }
  div:nth-child(2){
    display: flex;
  }

`