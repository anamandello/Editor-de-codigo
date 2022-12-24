import { useState } from "react"
import { FaComment, FaHeart } from "react-icons/fa"
import { Card } from "../../components/Card"
import { CardContainer, CommunityContainer, Info, InfoCard, MainInfo } from "./styles"

interface CardProps {
  language: string
  color: string
  title: string
  body: string
  description: string
  like: number
  comments: number
  author: {
    name: string
    img: string
  }
}

export const Community = () => {
  const [listCard, setListCard] = useState<CardProps[]>([
    {
      language: 'Javascript',
      color: '#FF00FF',
      title: 'Título do projeto',
      body: 'const number = 1 + 2',
      description: 'Essa é a descrição do meu projeto.',
      like: 5,
      comments: 3,
      author: {
        name: 'Ana',
        img: 'rota'
      }
    },{
      language: 'Javascript',
      color: '#FF00FF',
      title: 'Título do projeto',
      body: 'const number = 1 + 2',
      description: 'Essa é a descrição do meu projeto.',
      like: 5,
      comments: 3,
      author: {
        name: 'Ana',
        img: 'rota'
      }
    },{
      language: 'Javascript',
      color: '#FF00FF',
      title: 'Título do projeto',
      body: 'const number = 1 + 2',
      description: 'Essa é a descrição do meu projeto.',
      like: 5,
      comments: 3,
      author: {
        name: 'Ana',
        img: 'rota'
      }
    },{
      language: 'javascript',
      color: '#FF00FF',
      title: 'Título do projeto',
      body: "const teste = 'ee' \nconst number = 22",
      description: 'Essa é a descrição do meu projeto.',
      like: 5,
      comments: 3,
      author: {
        name: 'Ana',
        img: 'rota'
      }
    },

  ])

  return(
    <CommunityContainer>
      {listCard.map((item, index) => (
      <CardContainer key={index}>
        <Card color={item.color} textCard={item.body} textHighLight language={item.language}/>
        <InfoCard>
          <MainInfo>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </MainInfo>
          <Info>
            <div>
              <span><FaComment /> {item.like}</span>
              <span><FaHeart /> {item.comments}</span>
            </div>
            <div>
              <img src={item.author.img} />
              <span>{item.author.name}</span>
            </div>
          </Info>
        </InfoCard>
      </CardContainer>
      ))}
    </CommunityContainer>
  )
}