import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { Input } from "../../components/Input"
import { Select } from "../../components/Select"
import { TextArea } from "../../components/TextArea"
import { TextTitle } from "../../components/TextTitle"
import { ColorsInput, HomeContainer } from "./styles"
import { useState } from "react"

export const Home = () => {
  const [color, setColor] = useState('#000')
  const [highLight, setHighLight] = useState(false)

  function handleHighLight(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault()
    setHighLight(!highLight)
  }

  return (
    <HomeContainer>
      <form action="">
        <div>
          <Card color={color} textHighLight={highLight}/>
          <Button text='Visualizar com o highlight' modo="dark" onClick={handleHighLight}/>
        </div>
        <div>
          <TextTitle textTitle="Seu projeto"/>
          <Input type="text" placeholderInput="Nome do seu projeto"/>
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