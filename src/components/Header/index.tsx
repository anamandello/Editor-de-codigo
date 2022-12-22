import { HeaderContainer, LogoAlura, PerfilContainer, Search } from "./styles"
import Logo from '../../assets/Logo.svg'
import IconMenu from '../../assets/IconMenu.svg'
import IconSearch from '../../assets/IconSearch.svg'
import FotoPerfil from '../../assets/FotoPerfil.png'
import { NavLink } from "react-router-dom"
import { Input } from "../Input"

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoAlura>
       <NavLink to={'/'}><img src={Logo} alt="Logo AluraDEV" /></NavLink>
      </LogoAlura>
      <Search>
        <Input type="text" placeholderInput="Busque por algo"/>
        <img src={IconSearch} alt="Barra de pesquisa" />
        <PerfilContainer>
          <img src={FotoPerfil} alt="" />
          <span>Harry</span>
        </PerfilContainer>
        <img src={IconMenu} alt="Menu Lateral" />
      </Search>
    </HeaderContainer>
  )
}