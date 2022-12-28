import { SelectHTMLAttributes } from "react"
import { SelectContainer } from "./styles"

interface OptionProps{
  texto: string
  valor: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLElement>{
  options: OptionProps[]
}

export const Select = ({options, ...props}: SelectProps) => {
  return (
    <SelectContainer {...props}>
      {options.map((item, index) => (
        <option key={index} value={item.valor}>{item.texto}</option>
      ))}
    </SelectContainer>
  )
}