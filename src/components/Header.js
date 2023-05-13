import React, { useState } from 'react'
import styled from 'styled-components';
import Logo from './elements/Logo';
import NavMenu from './elements/NavMenu';
import MenuButton from './elements/Button';
const StyleddHeader = styled.header`
  width: 100vw;
  background-color: ${props => props.theme.body};

  @media (max-width: 64em){
    position: ${props => props.isCollapsed ? 'fixed' : 'static'};
    z-index: ${props => props.isCollapsed ? props.theme.zIndexHeader : '0'};
  }
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  height: ${props =>  props.theme.navHeight};
  margin: 0 auto;
`;

const BurgerMenu = styled.span`
width: ${props => props.isCollapsed ? '2rem' : '1.5rem'};
height: 2px;
background-color: ${props => props.theme.text};
position: absolute;
top: 50%;
left: 50%;
transform: ${props => props.isCollapsed ? 'translate(-50%, -50%) rotate(90deg)' : 'translate(-50%, -50%) rotate(0)'};
justify-content: center;
align-items: center;
transition: all 0.3s ease;
cursor: pointer;

&::before, &::after{
  content: ' ';
  position: absolute;
  height: 2px;
  width: ${props => props.isCollapsed ? '1rem' : '1.5rem'};
  right:${props => props.isCollapsed ? '-2px' : '0'};
  background-color: ${props => props.theme.text};
  transition: all 0.3s ease;
}
&::after{
  top: ${props => props.isCollapsed ? '0.3rem' : '0.5rem'};
  transform: ${props => props.isCollapsed ? 'rotate(-40deg)' : 'rotate(0)'};
}
&::before{
  bottom: ${props => props.isCollapsed ? '0.3rem' : '0.5rem'};
  transform: ${props => props.isCollapsed ? 'rotate(40deg)' : 'rotate(0)'};
}

`;

const BurgerBtnContainer = styled.div`
  position: absolute;
  z-index: 5;
  width: 44px;
  height: 46px;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  @media (max-width: 64em){
    //1024px
    display: flex;
  }
`;
function Header() {
  const [isCollapsed, setCollapseState] = useState(false);
  return (
    <StyleddHeader isCollapsed={isCollapsed}>
      <Navbar>
        {/* logo */}
        <Logo />
        <BurgerBtnContainer onClick={() => setCollapseState((prevState) => !prevState)}>
          <BurgerMenu isCollapsed={isCollapsed} >
            {/* &nbsp; */}
          </BurgerMenu>
        </BurgerBtnContainer>

        {/* nav menu */}
        <NavMenu isCollapsed={isCollapsed} setCollapseState={(newState) => setCollapseState(newState)}/>
        {/* menu button */}
        <div className="desktop">
          <MenuButton text="Connect Wallet" link="#"/>
        </div>
      </Navbar>
    </StyleddHeader>
  )
}
export default Header;