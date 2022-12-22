import { CardContainer } from "./styles"

interface CardProps{
  textCard?: string
}

export const Card = ({textCard}: CardProps) => {
  return (
    <CardContainer statusColor="blue">
      <textarea value={textCard}/>
    </CardContainer>
  )
}