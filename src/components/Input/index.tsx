import { InputHTMLAttributes } from "react"
import { InputContainer } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholderInput: string
}

export const Input = ({placeholderInput, ...props}: InputProps) => {
  return (
    <InputContainer placeholder={placeholderInput} {...props}/>
  )
}