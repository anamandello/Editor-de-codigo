import styled from "styled-components";

export const TextAreaContainer = styled.textarea`
  resize: none;
    padding: 1rem 0.875rem;
    background: rgba(${props => props.theme['--black-rgb']}, 0.16);
    width: 100%;
    border-radius: 8px;
    color: ${props => props.theme['--white']};
    opacity: 0.64;

    &::placeholder{
      color: ${props => props.theme['--white']};
      opacity: 0.64;
    }

    &:hover, &:focus{
      background: rgba(${props => props.theme['--black-rgb']}, 0.24);
    }
`