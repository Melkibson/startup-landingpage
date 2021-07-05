import {bp, Button, colors, FooterLink, Grid, NavLink} from "../../utils/CommonStyle";
import logo from "../../assets/icons/logo.svg";
import burger from "../../assets/icons/burger.svg";
import arrow from "../../assets/icons/section-nav/arrow.svg";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {useState} from 'react'
import Dropdown from "./nav-components/Dropdown";
import TradButtonRes from "./TradButtonRes";

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
   @media screen and (max-width: ${bp.tablet}px){
      margin-top: 0px;
      background: ${colors.white};
      z-index: 99;
  }
`
const BurgerMenu = styled.div`
display: none;
  z-index: 999;
@media screen and (max-width: ${bp.tablet}px){
    cursor: pointer;
    width: 65px;
    height: 65px;
    border-left: 1px solid ${colors.paleGrey};
    border-right: 1px solid ${colors.paleGrey};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const BurgerIcon = styled.img`
display: none;
@media screen and (max-width: ${bp.tablet}px){
display: block;
    height: 15px;
    width: 20px;
  }
`
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
   @media screen and (max-width: ${bp.tablet}px){
    display: none;
  }
`
const NavLinkLast = styled(NavLink)`
  display: flex;
  margin-right: 10px;
  ${props => props.clicked}{
    font-family: 'Work-Sans-Bold', sans-serif;
  }

  
`
const Arrow = styled.svg`
  width: 8px;
  height: 5px;
`
const NavRow = styled.span`
  display: flex;
  justify-content: space-between;
    margin-right: 50px;
    align-items: center;
    
    
`
const NavColumn = styled.div`
  flex-direction: column;

`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 300px;
  z-index: 999;
  @media screen and (max-width: ${bp.tablet}px){
      width: 100%;

  }
  

`
const Logo = styled.img`
  width: 60px;
`
const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: ${bp.tablet}px){
    display: none;
  }
`
const Brand = styled.span`
  font-family: Work-Sans-Bold, serif;
  font-size: 20px;
`
const BrandSubText = styled(FooterLink)`
  cursor: none;
`
const ResponsiveNav = styled.div`
display: none;
transform: translateY(-100%);
transition: all 0.75s ease-in-out;
@media screen and (max-width: ${bp.tablet}px){
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: 200px;
  transform: ${props => props.show ? 'translateY(0%)' : 'translateY(-100%)'};
  opacity: ${props => props.show ? '100%' : '0'};
  top: 60px;
  left: 0;
  z-index: 3;
  background: #FFFFFF;
  border-top: 1px solid ${colors.paleGrey};

`

const Navigation = () => {
    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState(true);
    const { t } = useTranslation();

    return(
        <Nav>
            <Grid row align>
                <LogoContainer>
                    <Logo src={logo}/>
                    <TradButtonRes/>
                    <LogoText>
                        <Brand>Brand</Brand>
                        <BrandSubText>Startup landing template</BrandSubText>
                    </LogoText>

                </LogoContainer>
                <BurgerMenu  onClick={() =>{
                    setShow(!show);
                }}>
                    <BurgerIcon src={burger}/>
                </BurgerMenu>
                <Links>
                    <NavLink show={show}>{t('home')}</NavLink>
                    <NavLink show={show}>{t('stories')}</NavLink>
                    <NavColumn>
                        <NavRow onClick={()=>{setClicked(!clicked)}}><NavLinkLast clicked={clicked}>{t('library')}</NavLinkLast><Arrow alt=""><use href={arrow + "#arrow"}></use></Arrow></NavRow>
                        <Dropdown clicked={clicked}/>
                    </NavColumn>
                    <Button bgblue>{t('buttonStart')}</Button>
                </Links>
            </Grid>
            <ResponsiveNav show={show}>
                <Grid>
                    <NavLink>{t('home')}</NavLink>
                    <NavLink>{t('stories')}</NavLink>
                    <NavLink>{t('library')}</NavLink>
                </Grid>
            </ResponsiveNav>
        </Nav>
    )

}

export default Navigation
