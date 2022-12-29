import { useEffect, useState } from "react"
import { FaComment, FaHeart } from "react-icons/fa"
import { Card } from "../../components/Card"
import { api } from "../../utils/api"
import { CardContainer, CommunityContainer, Info, InfoCard, MainInfo } from "./styles"
import { CardType } from "../../types/CardType"
import { Link } from "react-router-dom"

export const Community = () => {
  const [listCard, setListCard] = useState<CardType[]>([])

  async function buscaLista(){
    const lista = await api.get('/code')
    setListCard(lista.data)
  }

  useEffect(() => {
    buscaLista()
  }, [])

  return(
    <CommunityContainer>
      {listCard.map(item => (
        <CardContainer key={item.id}>
        <Link to={`/${item.id}`}>
          <Card color={item.color} value={item.body} textHighLight language={item.language}/>
        </Link>  
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
              <span>
                <img src={item.author.img} />
                {item.author.name}
              </span>
            </Info>
          </InfoCard>
        </CardContainer>
      ))}
    </CommunityContainer>
  )
}