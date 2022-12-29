import styled from "styled-components";

export const CommunityContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  width: 100%;
  gap: 1.5rem;

  a{
    text-decoration: none;
    color: ${props => props.theme['--white']};
  }

  @media (max-width: 768px){
    grid-template-columns: 1fr;
  }

  margin-bottom: 6rem;
`

export const CardContainer = styled.section`
  width: 100%;
  background-color: rgba(${props => props.theme['--black-rgb']}, 0.16);
  border-radius: 8px;
`

export const MainInfo = styled.div`
  padding: 1.5rem;
`

export const InfoCard = styled.div`
  
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3{
    font-weight: bold;
    font-size: 1.3125rem;
    line-height: 2rem;
  }

  p{
    font-weight: 400;
    font-size: 16px;
    opacity: 0.8;
    line-height: 1.5rem;
  }

  &:hover{
    div:nth-child(2){
      display: flex;
    }
  }
`

export const Info = styled.div`
  display: none;
  justify-content: space-between;
  padding: 0 1.5rem 1.5rem;

  div{
    display: flex;
    align-items: center;
  }

  span{
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem;
    border-radius: 16px;
    
    svg{
      cursor: pointer;
    }

    &:hover{
      background: rgba(${props => props.theme['--white-rgb']}, 0.16);
    }
  }

`
