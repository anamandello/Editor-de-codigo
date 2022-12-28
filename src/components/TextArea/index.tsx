import { InputHTMLAttributes, TextareaHTMLAttributes } from "react"
import { TextAreaContainer } from "./styles"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLElement> {
  placeholderInput: string
}

export const TextArea = ({placeholderInput, ...props}: TextAreaProps) => {
  return (
    <TextAreaContainer placeholder={placeholderInput} {...props}/>
  )
}