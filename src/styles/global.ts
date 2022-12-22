import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    font-family: 'Inter', sans-serif;
    margin: 0;
    border: 0;
    box-sizing:border-box;
    font-size: 1rem;
  }

  :focus{
    outline: 0;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme['--dark-blue']};
    color: ${props => props.theme['--white']};
    max-width: 90rem;
    width: 100%;
    margin: auto;
  }

  body, input, textarea, button{
    font-weight: 400;
    font-size: 1rem;
  }

`