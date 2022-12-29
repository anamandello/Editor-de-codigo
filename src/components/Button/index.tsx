import { ButtonContainer } from "./styles"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  text: string
  modo: 'dark' | 'light'
}

export const Button = ({text, modo = 'light', ...props}: ButtonProps) => {
  return(
    <ButtonContainer statusColor={modo} {...props}>{text}</ButtonContainer>
  )
}