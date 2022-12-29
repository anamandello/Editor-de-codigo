import { ProfileContainer } from "./styles"
import FotoPerfil from '../../../assets/FotoPerfil.png'

export const Profile = () => {
  return (
    <ProfileContainer>
      <img src={FotoPerfil} alt="" />
      <span>Ana</span>
    </ProfileContainer>
  )
}