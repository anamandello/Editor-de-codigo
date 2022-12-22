import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { Input } from "../../components/Input"
import { InputColor } from "./InputColor"
import { Select } from "../../components/Select"
import { TextArea } from "../../components/TextArea"
import { TituloText } from "../../components/TituloText"
import { HomeContainer } from "./styles"

export const Home = () => {
  return (
    <HomeContainer>
      <form action="">
        <div>
          <Card />
          <Button text='Visualizar com o highlight' modo="dark"/>
        </div>
        <div>
          <TituloText textTitulo="Seu projeto"/>
          <Input type="text" placeholderInput="Nome do seu projeto"/>
          <TextArea placeholderInput="Descrição do seu projeto"/>
          <TituloText textTitulo="Personalização"/>
          <div>
            <Select options={[
                {texto:"JavaScript", valor:"JS"},
                {texto:"HTML", valor:"HTML"},
                {texto:"CSS", valor:"CSS"}
              ]}/>
            <InputColor />
          </div>
          <Button text="Salvar projeto" modo="light"/>
        </div>
      </form>
    </HomeContainer>
  )
}