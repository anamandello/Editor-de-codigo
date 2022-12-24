import styled from "styled-components";

export const InputContainer = styled.input`
    padding: 1rem 0.875rem;
    background: rgba(${props => props.theme['--white-rgb']}, 0.16);
    max-width: 752px;
    width: 100%;
    border-radius: 8px;
    color: ${props => props.theme['--white']};
    opacity: 0.64;

    &::placeholder{
      color: ${props => props.theme['--white']};
      opacity: 0.64;
    }

    &:hover, &:focus{
      background: rgba(${props => props.theme['--white-rgb']}, 0.24);
    }
`