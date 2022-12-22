import styled from "styled-components";

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