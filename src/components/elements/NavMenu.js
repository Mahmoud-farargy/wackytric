import React from 'react'
import styled from 'styled-components'
import { useScrollTo } from '../../Hooks';
import MenuButton from '../elements/Button';

const StyledMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    
    @media (max-width: 64em){
    //1024px
        position: fixed;
        top: ${props => props.theme.navHeight};
        left:0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height:  ${props => `calc(100vh - ${props.theme.navHeight})`};
        z-index: 50;
        background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.85)`};
        justify-content:center;
        flex-direction:column;
        backdrop-filter: blur(2px);
        transition: all 0.3s ease;
        transform: ${props => props.isCollapsed ? 'translateY(0)': 'translateY(1000%)'};
        touch-action: none;
    }
`;

const StyledNavItem = styled.li`
    margin: 0 1rem;
    color: ${props => props.theme.text};
    cursor: pointer;
    &::after {
        content: ' ';
        display: block;
        width: 0%;
        height: 2px;
        background: ${props => props.theme.text};
        transition: width 0.3s ease;
    }
    &:hover::after {
        width: 100%;
    }
    @media (max-width: 64em){
        margin: 1rem 0;

        &::after{
            display: none;
        }
    }
`;
function NavMenu({isCollapsed, setCollapseState}) {
    const [elementId] = useScrollTo();
    const scrollToElement = (elId) => {
        if(!elId){
            return;
        }
        elementId(elId)
        setCollapseState(false);
    }
  return (
    <StyledMenu isCollapsed={isCollapsed}>
        <StyledNavItem onClick={()=> scrollToElement("intro")}>Home</StyledNavItem>
        <StyledNavItem onClick={()=> scrollToElement("about")}>About</StyledNavItem>
        <StyledNavItem onClick={()=> scrollToElement("roadmap")}>Roadmap</StyledNavItem>
        <StyledNavItem onClick={()=> scrollToElement("showcase")}>Showcase</StyledNavItem>
        <StyledNavItem onClick={()=> scrollToElement("team")}>Team</StyledNavItem>
        <StyledNavItem onClick={()=> scrollToElement("faq")}>FAQ</StyledNavItem>
        <StyledNavItem >
            <div className="mobile">
                <MenuButton text="Connect Wallet" link="#"/>
            </div>  
        </StyledNavItem>

    </StyledMenu>
  )
}

export default NavMenu