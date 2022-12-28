import { useEffect, useState } from "react"
import { FaComment, FaHeart } from "react-icons/fa"
import { Card } from "../../components/Card"
import { api } from "../../utils/api"
import { CardContainer, CommunityContainer, Info, InfoCard, MainInfo } from "./styles"
import { CardType } from "../../types/CardType"
import { Link } from "react-router-dom"

export const Community = () => {
  const [listCard, setListCard] = useState<CardType[]>([])
  const [id, setId] = useState()

  async function buscaLista(){
    const lista = await api.get('/code')
    setListCard(lista.data)
  }

  useEffect(() => {
    buscaLista()
  }, [])

  return(
    <CommunityContainer>
      {listCard.map((item, index) => (
      <Link to={`/${item.id}`} key={index}>
        <CardContainer>
          <Card color={item.color} value={item.body} textHighLight language={item.language}/>
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
      </Link>  
      ))}
    </CommunityContainer>
  )
}