import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'


export const Nav = styled.nav`
    margin-left: -15px;
    margin-right: -15px;
    margin-top: -10px;
    background-color: #000;
    height: 70px;
    display: flex;
    justify-content: flex-end;
    padding: 0 1rem;
    z-index: 10;
    
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%
    cursor: pointer;
    position: absolute;
    left: 1%;
    &.active {
        color: #fff;
    }
    
`
    
export const NavBtn = styled.nav`
    
      display: flex;
      align-items: center;
      margin-right: 24px;
      font-family: verdana;
      @media screen and (max-width: 768px) {
        display: none;
      }
`
    
export const NavBtnLink = styled(Link)`
        color: #fff;
        font-family: verdana;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding:  0 1rem;
        height:: 100%
        cursor: pointer;

        &.active {
            color: #fff;
        }
      &:hover {
        transition: all 0.2s ease-in-out;
        color: #C0C0C0;
      }
`