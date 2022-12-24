import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  
  form{
    display: flex;
    gap: 2.5rem;

    div:nth-child(1){
      display: flex;
      flex-direction: column;
      gap: 3.375rem;
      max-width: 752px;
      width: 100%;
    }

    div{
      display: flex;
      flex-direction: column;
      max-width: 17rem;
      width: 100%;
      gap: 1rem;

      h2:nth-of-type(2){
        margin-top: 2.5rem;
      }
    }

    @media (min-width: 0) and (max-width: 768px){
      flex-direction: column;
      gap: 2.5rem;

      div:nth-child(1){
        gap: 2.5rem;
      }

      div:nth-child(2){
        max-width: none;
      }
      
      div:nth-child(5){
        max-width: none;
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
        
        select, input{
          flex: 1
        }
      }
      margin-bottom: 2.5rem;
    }

    @media (min-width: 0) and (max-width: 375px){
      div{
        gap: 2.5rem;
        h2:nth-of-type(2){
          margin-top: 0;
        }
      }
      div:nth-child(5){
        flex-direction: column;

        input{
          flex: none;
        }
      }
    }
  }
`

export const ColorsInput = styled.input`
  width: 100%;
  height: 3.5rem;
  border-radius: 8px;
  background-color: transparent;
  outline: auto;
  cursor: pointer;

  &::-webkit-color-swatch {
    border-radius: 8px;
    border: none;
  }
`