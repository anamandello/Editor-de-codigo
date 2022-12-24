import { Menu } from "../../Menu"
import { BurgerContainer, LateralMenu } from "./styles"
import IconMenu from '../../../assets/IconMenu.svg'
import IconClose from '../../../assets/IconClose.svg'
import { useState } from "react"
import { Profile } from "../Profile"

export const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <BurgerContainer onClick={() => setOpen(!open)}>
      {!open ? <img src={IconMenu} alt="Menu Lateral" /> :<img src={IconClose} alt="Fechar Menu Lateral" />}
      <LateralMenu open={open}>
        <Menu />
        <div></div>
        <Profile />
      </LateralMenu>
    </BurgerContainer>
  )
}