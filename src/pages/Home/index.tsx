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
  const [highLight, setHighLight] = useState(false)
  const [comment, setComment] = useState<CardType>({
    author: {
      img: '',
      name: '',
    },
    body: '',
    color: '#000000',
    comments: 0,
    description: '',
    language: 'javascript',
    like: 0,
    title: ''
    })
  const { id } = useParams()
  const [erro, setErro] = useState('')

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
    }else{
      setComment({
      author: {
        img: '',
        name: '',
      },
      body: '',
      color: '#000',
      comments: 0,
      description: '',
      language: 'javascript',
      like: 0,
      title: ''
      })
    }
  }, [id])

  function handleValuesForm(e: React.ChangeEvent<HTMLInputElement>){
    const { value, name } = e.target

    setComment({
      ...comment,
      [name]: value
    })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(erro === ''){
      if(id){
        try{
          const result = api.patch(`/code/${id}`, comment )
          console.log(result)
          alert('Código editado com sucesso!')
        }catch(erro){
          alert(erro)
        }
      }
      else{
        try{
          const result = api.post(`/code`, comment )
          console.log(result)
          alert('Código adicionado com sucesso!')
        }catch(erro){
          alert(erro)
        }
      }
    }
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <Card color={comment.color} textHighLight={highLight} language={comment.language} name="body" value={comment.body} onChange={handleValuesForm} required minLength={10}/>
          <Button text='Visualizar com o highlight' modo="dark" onClick={handleHighLight}/>
        </div>
        <div>
          <TextTitle textTitle="Seu projeto"/>
          <Input name="title" value={comment.title} onChange={handleValuesForm} type="text" placeholder="Nome do seu projeto" required minLength={3}/>
          <TextArea name="description" value={comment.description} onChange={handleValuesForm} placeholder="Descrição do seu projeto" required minLength={5}/>
          <TextTitle textTitle="Personalização"/>
          <div>
            <Select options={[
                {texto:"JavaScript", valor:"javascript"},
                {texto:"HTML", valor:"HTML"},
                {texto:"CSS", valor:"CSS"}
              ]} name="language"  value={comment.language} onChange={handleValuesForm}/>
            <ColorsInput name="color" value={comment.color} onChange={handleValuesForm} type="color"/>
          </div>
          <Button text="Salvar projeto" modo="light" type="submit" value="submit"/>
        </div>
        <div>{erro}</div>
      </form>
    </HomeContainer>
  )
}