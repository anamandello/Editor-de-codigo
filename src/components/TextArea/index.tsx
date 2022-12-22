import { TextAreaContainer } from "./styles"

interface InputProps {
  placeholderInput: string
}

export const TextArea = ({placeholderInput}: InputProps) => {
  return (
    <TextAreaContainer placeholder={placeholderInput}/>
  )
}