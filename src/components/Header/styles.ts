import styled from 'styled-components'

export const HeaderContainer = styled.header`
  margin: 2rem;
  display: flex;

  @media (min-width: 0) and (max-width: 768px){
    gap: 2.5rem;
  }
`

export const LogoAlura = styled.div`
  display: flex;
  align-items: center;
  max-width: 19.5rem;
  width: 100%;

  @media (min-width: 0) and (max-width: 768px){
    width: auto;
  }
`

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  img:nth-child(2){
    display: none;
  }

  img:nth-child(3){
    display: none;
  }

  @media (min-width: 0) and (max-width: 768px){
    gap: 2.5rem;
    img:nth-child(3){
      display: block;
    }
  }

  @media (min-width: 0) and (max-width: 375px){
    justify-content: flex-end;
    gap: 0.5rem;

    img:nth-child(2){
      display: block;
    }
    
    input{
      display: none;
    }
  }
`

export const PerfilContainer = styled.div`
  padding: 0.75rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (min-width: 0) and (max-width: 768px){
    display: none;
  }
`