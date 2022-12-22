import styled from "styled-components";

const borderColor = {
  yellow: '--yellow',
  blue: '--blue-300',
  red: '--red',
  green: '--green'
} as const

interface StatusProps {
  statusColor: keyof typeof borderColor
}

export const CardContainer = styled.div<StatusProps>`
  background-color: ${props => props.theme[borderColor[props.statusColor]]};
  padding: 2rem;
  border-radius: 8px;

  textarea{
    border-radius: 8px;
    background-color: ${props => props.theme['--black']};
    color: ${props => props.theme['--white']};
    padding: 1rem;
    resize: none;
    width: 100%;
    height: 30vh;
    
    &::-webkit-scrollbar-track {
      border-radius: 8px;
      background-color: ${props => props.theme['--white']};
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: ${props => props.theme['--dark-blue']};
    }
  }
  
`