import styled from "styled-components";

export const SelectContainer = styled.select`
    padding: 1rem 0.875rem;
    background: rgba(${props => props.theme['--white-rgb']}, 0.16);
    border-radius: 8px;
    color: ${props => props.theme['--white']};
    opacity: 0.64;
    cursor: pointer;

    &::placeholder{
      color: ${props => props.theme['--white']};
      opacity: 0.64;
    }

    &:hover, &:focus{
      background: rgba(${props => props.theme['--white-rgb']}, 0.24);
    }

    option {
      background-color: ${props => props.theme['--dark-grey']};
    }


`