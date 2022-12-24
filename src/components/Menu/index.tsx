import { MenuContainer, Nav } from "./styles"
import { FaCode, FaUsers } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { TextTitle } from "../TextTitle";

export const Menu = () => {
  return (
    <MenuContainer>
      <TextTitle textTitle="menu"/>
      <Nav>
        <ul>
          <li>
            <NavLink to={'/'}>
              <div>
                <FaCode/> 
              </div>
              <span>Editor de código</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/community'}>
              <div>
                <FaUsers/> 
              </div>
              <span>Comunidade</span>
            </NavLink>
          </li>
        </ul>
      </Nav>
    </MenuContainer>
  )
}