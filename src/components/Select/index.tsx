import { SelectContainer } from "./styles"

interface OptionProps{
  texto: string
  valor: string
}

interface SelectProps{
  options: OptionProps[]
}

export const Select = ({options}: SelectProps) => {
  return (
    <SelectContainer>
      {options.map((item, index) => (
        <option key={index} value={item.valor}>{item.texto}</option>
      ))}
    </SelectContainer>
  )
}