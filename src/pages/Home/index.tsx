import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { Input } from "../../components/Input"
import { Select } from "../../components/Select"
import { TextArea } from "../../components/TextArea"
import { TextTitle } from "../../components/TextTitle"
import { ColorsInput, HomeContainer } from "./styles"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CardType } from "../../types/CardType"
import { api } from "../../utils/api"

export const Home = () => {
  const [color, setColor] = useState('#000')
  const [highLight, setHighLight] = useState(false)
  const [comment, setComment] = useState<CardType>({
    author: {
      img: '',
      name: '',
    },
    body: '',
    color: '#000',
    comments: 0,
    description: '',
    language: '',
    like: 0,
    title: ''
  })
  const { id } = useParams()

  function handleHighLight(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault()
    setHighLight(!highLight)
  }

  async function getComment(){
    const commentById = await api.get(`/code/${id}`)
    setComment(commentById.data)
  }
  
  useEffect(() => {
    if(id){
      getComment()
    }
  }, [])

  function handleValuesForm(e: React.ChangeEvent<HTMLInputElement>){
    const { value, name } = e.target

    setComment({
      ...comment,
      [name]: value
    })
  }

  return (
    <HomeContainer>
      <form action="">
        <div>
          <Card color={color} textHighLight={highLight} name="body" value={comment.body} onChange={handleValuesForm}/>
          <Button text='Visualizar com o highlight' modo="dark" onClick={handleHighLight}/>
        </div>
        <div>
          <TextTitle textTitle="Seu projeto"/>
          <Input name="title" value={comment.title} onChange={handleValuesForm} type="text" placeholderInput="Nome do seu projeto"/>
          <TextArea placeholderInput="Descrição do seu projeto"/>
          <TextTitle textTitle="Personalização"/>
          <div>
            <Select options={[
                {texto:"JavaScript", valor:"JavaScript"},
                {texto:"HTML", valor:"HTML"},
                {texto:"CSS", valor:"CSS"}
              ]}/>
            <ColorsInput type="color" onBlur={(e) => setColor(e.target.value)}/>
          </div>
          <Button text="Salvar projeto" modo="light"/>
        </div>
      </form>
    </HomeContainer>
  )
}