import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { Menu } from "../../components/Menu"
import { MenuAndBody } from "./styles"

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <MenuAndBody>
        <Menu />
        <Outlet />
      </MenuAndBody>
    </>
    
  )
}