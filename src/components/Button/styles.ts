import styled from "styled-components";

export const buttonColor = {
  dark: ['--button-dark', '--button-dark-hover', '--button-dark-active', '--white'],
  light: ['--blue-300', '--blue-200', '--blue-100', '--black']
} as const

interface ButtonInterface{
  statusColor: keyof typeof buttonColor
}

export const ButtonContainer = styled.button<ButtonInterface>`
  padding: 1rem;
  border-radius: 8px;
  background-color: ${props => props.theme[buttonColor[props.statusColor][0]]};
  color: ${props => props.theme[buttonColor[props.statusColor][3]]};
  cursor: pointer;

  &:hover{
    background-color: ${props => props.theme[buttonColor[props.statusColor][1]]};
  }
  &:active{
    background-color: ${props => props.theme[buttonColor[props.statusColor][2]]};
  }
  
`