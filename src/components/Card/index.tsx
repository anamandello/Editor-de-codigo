import { CardContainer } from "./styles"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { obsidian } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { TextareaHTMLAttributes, useEffect, useState } from "react";

interface CardProps extends TextareaHTMLAttributes<HTMLElement>{
  color: string,
  textHighLight: boolean,
  language: string
}

export const Card = ({color = '#FF00FF', textHighLight = false, language, ...props }: CardProps) => {
  const [text, setText] = useState('')

  useEffect(() => {
    const { value } = {...props}
    if(typeof(value) === 'string') {
      setText(value)
    }
  }, [{...props}])


  return (
    <CardContainer colorCard={color}>
      {!textHighLight ?
        <textarea {...props}/> :
        <SyntaxHighlighter 
          language={language} 
          children={text} 
          style={obsidian} 
          customStyle={{borderRadius: '8px', background: 'black', padding: '1rem', height: '30vh', width: '100%'}}
        />
      }
    </CardContainer>
  )
}