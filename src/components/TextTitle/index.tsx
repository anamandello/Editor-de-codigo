import { Title } from "./styles"

interface TextTitleProps{
  textTitle: string
}

export const TextTitle = ({textTitle}: TextTitleProps) => {
  return (
    <Title>
      {textTitle}
    </Title>
  )
}