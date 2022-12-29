import { TextareaHTMLAttributes } from "react"
import { TextAreaContainer } from "./styles"

export const TextArea = ({...props}: TextareaHTMLAttributes<HTMLElement>) => {
  return (
    <TextAreaContainer {...props}/>
  )
}