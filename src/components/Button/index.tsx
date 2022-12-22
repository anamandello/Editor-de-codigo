import { Botao } from "./styles"

interface ButtonProps{
  text: string
  modo: 'dark' | 'light'
}

export const Button = ({text, modo = 'light'}: ButtonProps) => {
  return(
    <Botao statusColor={modo}>{text}</Botao>
  )
}