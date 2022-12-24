import { CardContainer } from "./styles"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { obsidian } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useEffect, useState } from "react";

interface CardProps{
  textCard?: string,
  color: string,
  textHighLight: boolean,
  language?: string
}

export const Card = ({textCard, color = '#FF00FF', textHighLight = false, language = 'HTML'}: CardProps) => {
  const [text, setText] = useState('')

  useEffect(() => {
    if(textCard)
      setText(textCard)
  },[])

  return (
    <CardContainer colorCard={color}>
      {!textHighLight ?
        <textarea value={text} onChange={(e) => setText(e.target.value)}/> :
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