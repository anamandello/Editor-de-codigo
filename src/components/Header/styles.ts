import styled from 'styled-components'

interface SearchProps {
  open: boolean
}

export const HeaderContainer = styled.header`
  margin: 2rem;
  display: flex;

  @media (min-width: 0) and (max-width: 768px){
    gap: 2.5rem;
  }
`

export const LogoAlura = styled.div<SearchProps>`
  display: flex;
  align-items: center;
  max-width: 19.5rem;
  width: 100%;

  @media (min-width: 0) and (max-width: 768px){
    width: auto;
  }

  @media (max-width: 375px){
    display: ${props => props.open ? 'none' : 'block'};
  }
`

export const Info = styled.div<SearchProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 0) and (max-width: 768px){
    justify-content: flex-end;
    gap: 1rem;

    div:nth-child(2){
      display: none;
    }
  }
`

export const Search = styled.div<SearchProps>`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  img{
    display: none;
  }

  @media (max-width: 375px){
    width: auto;
    img{
      display: block;
    }

    input{
      display: ${props => props.open ? 'block' : 'none'};
    }
  }
`