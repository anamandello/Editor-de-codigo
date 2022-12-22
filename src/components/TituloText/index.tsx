import { Titulo } from "./styles"

interface TituloTextProps{
  textTitulo: string
}

export const TituloText = ({textTitulo}: TituloTextProps) => {
  return (
    <Titulo>
      {textTitulo}
    </Titulo>
  )
}