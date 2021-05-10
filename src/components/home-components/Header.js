import styled from 'styled-components'
import {Fragment, useEffect, useRef, useState} from 'react'
import logo from '../../assets/icons/logo.svg';
import burger from '../../assets/icons/burger.svg';
import arrow from '../../assets/icons/section-nav/arrow.svg'
import illu from '../../assets/img/section-header/header-illu.svg'

import {
    colors,
    Grid,
    NavLink,
    Button,
    FooterLink,
    H1,
    PgBig,
    bp,
    PgRegular,
    NavLinkDropHeading,
    ColumnGrid
} from '../../utils/CommonStyle';

const Section = styled.header`
  width: 100%;
  height: 710px;
  background: ${colors.paleOrange};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${bp.tablet}px){
    height: 100%;
      padding-bottom: 75px;

  }
`

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
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
   @media screen and (max-width: ${bp.tablet}px){
    display: none;
  }
`

const DropDownLink = styled.div`
  @media screen and (min-width: ${bp.desktop}px){
    box-shadow: #00000015 0px 1px 30px 0px;

    display: flex;
    justify-content:space-between;
    height: 250px;
    max-width: 615px;
    background: ${colors.white};
    padding: 30px;
    position: absolute;
    right: 21%;
    top: 80px;
    z-index: 0;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    ${props => props.clicked}{
      opacity: 100%;
      z-index: 9999;
    }
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
const DropDownColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 45%;
  justify-content: space-evenly;
`
const NavColumn = styled.div`
  flex-direction: column;
   // ${NavRow} {
   //   &:hover + ${DropDownLink} {
   //      {
   //        opacity: 100%;
   //      }
   //   }
   // }

`

const DropDownText = styled.div`
  ${PgRegular};
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
  font-family: Work-Sans-Bold;
  font-size: 20px;
`
const BrandSubText = styled(FooterLink)`
  cursor: none;
`
const Column = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  width: 700px;
  @media screen and (max-width: ${bp.tablet}px){
      width: 100%;
      align-items: center;
      height: ${props => props.illu ? '420px' :'560px'};
  }
`

const HeadingSubText = styled.div`
  ${PgBig};
  width: 490px;
   @media screen and (max-width: ${bp.tablet}px){
      width: 100%;
  }

`
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  width: 350px;
  justify-content: space-between;
   @media screen and (max-width: ${bp.tablet}px){
      flex-direction: column;
      height: 110px;
      width: 100%;
  }
`
const Illu = styled.img`
  width: 600px;
  @media screen and (max-width: ${bp.tablet}px){
    width: 100%;
    height: 100%;
  }
  // @media screen and (max-width: ${bp.mobile}px){
  //   width: 300px;
  // }
`
let displayed = false;

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
  }
`
const Header = () => {
    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState(false);


    return(

        <Section>
                <Nav>
                    <Grid row align>
                    <LogoContainer>
                        <Logo src={logo}/>
                        <LogoText>
                            <Brand>Foundation</Brand>
                            <BrandSubText>Startup landing template</BrandSubText>
                        </LogoText>
                    </LogoContainer>
                        <BurgerMenu  onClick={() =>{
                            setShow(!show);
                        }}>
                            <BurgerIcon src={burger}/>
                        </BurgerMenu>
                    <Links>
                        <NavLink show={show}>Home</NavLink>
                        <NavLink show={show}>Stories</NavLink>
                        <NavColumn>
                            <NavRow onClick={()=>{setClicked(!clicked)}}><NavLinkLast clicked={clicked}>Library</NavLinkLast><Arrow alt=""><use href={arrow + "#arrow"}></use></Arrow></NavRow>
                            <DropDownLink clicked={clicked}>
                                <DropDownColumn>
                                    <NavLinkDropHeading>Acquire Users</NavLinkDropHeading>
                                    <DropDownText>Work with the tools and services you use.</DropDownText>
                                    <NavLinkDropHeading>Book Appointments</NavLinkDropHeading>
                                    <DropDownText>We offer measures like 2FA to ensure the safety.</DropDownText>
                                </DropDownColumn>
                                <DropDownColumn>
                                    <NavLinkDropHeading>Engage Customers</NavLinkDropHeading>
                                    <DropDownText>Get started with our simple snippet of JavaScript.</DropDownText>
                                    <NavLinkDropHeading>Generate Leads</NavLinkDropHeading>
                                    <DropDownText>Become a better designer by learning this courses.</DropDownText>
                                </DropDownColumn>
                            </DropDownLink>
                        </NavColumn>
                        <Button bgblue>Get Started</Button>
                    </Links>
                    </Grid>
                    <ResponsiveNav show={show}>
                        <Grid>
                            <NavLink>Home</NavLink>
                            <NavLink>Stories</NavLink>
                            <NavLink>Library</NavLink>
                        </Grid>
                    </ResponsiveNav>
                </Nav>

            <Grid>
                <Column>
                    <H1>Build stunning websites & apps.</H1>
                    <HeadingSubText>Create live segments and target the right people for messages based on their behaviors.</HeadingSubText>
                    <ButtonContainer>
                        <Button bgblue>Get Started</Button>
                        <Button>Learn More</Button>
                    </ButtonContainer>
                </Column>
                <Column illu>
                    <Illu src={illu} alt={''}/>
                </Column>


            </Grid>
        </Section>

    )
}
export default Header
