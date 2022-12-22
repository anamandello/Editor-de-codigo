import styled from "styled-components";

export const MenuContainer = styled.aside`
    max-width: 19.5rem;
    width: 100%;
`

export const Nav = styled.nav`
    ul{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0;

        li{
            list-style: none;

            a{
                display: flex;
                align-items: center;
                gap: 1rem;
                text-decoration: none;
                color: ${props => props.theme['--white']};      

                div{
                    width: 3rem;
                    height: 3rem;
                    padding: 0.75rem;
                    color: white;
                    
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 16px;
                    background-color: ${props => props.theme['--blue-300-opacity']}; 

                    svg{
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                }
                opacity: 0.56;

                &:hover, &.active{
                    opacity: 1;
                    div{
                        background-color: ${props => props.theme['--blue-300']};  
                    }
                }
            }
        }
    }
`