import { HeaderContainer, LogoAlura, Info, Search } from "./styles"
import Logo from '../../assets/Logo.svg'
import { NavLink } from "react-router-dom"
import { Burger } from "./Burger"
import IconSearch from '../../assets/IconSearch.svg'
import IconClose from '../../assets/IconClose.svg'
import { Input } from "../Input"
import { useState } from "react"
import { Profile } from "./Profile"

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <HeaderContainer>
      <LogoAlura open={open}>
       <NavLink to={'/'}><img src={Logo} alt="Logo AluraDEV" /></NavLink>
      </LogoAlura>
      <Info open={open}>
        <Search open={open}>
          <Input type="text" placeholder="Busque por algo"/>
          {!open ? <img src={IconSearch} alt="Barra de Oesquisa" onClick={() => setOpen(!open)}/> :
          <img src={IconClose} alt="Fechar Barra de Pesquisa" onClick={() => setOpen(!open)}/>}
        </Search>
        <Profile />
        {!open && <Burger />}
      </Info>
    </HeaderContainer>
  )
}