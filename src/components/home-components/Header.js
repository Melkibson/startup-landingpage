import styled from 'styled-components'
import logo from '../../assets/icons/logo.svg';
import arrow from '../../assets/icons/section-nav/arrow.svg'
import illu from '../../assets/img/section-header/header-illu.svg'

import {colors, Grid, NavLink, Button, FooterLink, H1, PgBig, bp, PgRegular, NavLinkDropHeading} from '../../utils/CommonStyle';

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
  justify-content: space-between;
  margin-top: 40px;
   @media screen and (max-width: ${bp.tablet}px){
      margin-top: 0px;
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
  display: none;
  @media screen and (min-width: ${bp.desktop}px){
    display: flex;
    justify-content:space-between;
    height: 250px;
    max-width: 615px;
    background: ${colors.white};
    padding: 30px;
    position: absolute;
    right: 21%;
    top: 120px;
    z-index: 99;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    opacity: 0;
  }
`
const NavLinkLast = styled(NavLink)`
  display: flex;
  margin-right: 10px;
  }
`
const NavRow = styled.span`
  display: flex;
  justify-content: space-between;
    margin-right: 50px;
    &:hover{
     
}
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
   ${NavRow} {
     &:hover + ${DropDownLink} {
        {
          opacity: 100%;
        }
     }
   }

`

const DropDownText = styled.div`
  ${PgRegular};
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 300px;

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
  max-width: 700px;
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
  max-width: 600px;
  // @media screen and (max-width: ${bp.tablet}px){
  //   width: 500px;
  // }
  // @media screen and (max-width: ${bp.mobile}px){
  //   width: 300px;
  // }
`
const Header = () => {
    return(
        <Section>
            <Grid>
                <Nav>
                    <LogoContainer>
                        <Logo src={logo}/>
                        <LogoText>
                            <Brand>Foundation</Brand>
                            <BrandSubText>Startup landing template</BrandSubText>
                        </LogoText>
                    </LogoContainer>
                    <Links>
                        <NavLink>Home</NavLink>
                        <NavLink>Stories</NavLink>
                        <NavColumn>
                            <NavRow><NavLinkLast>Library</NavLinkLast><img src={arrow} alt=""/></NavRow>
                            <DropDownLink>
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

                </Nav>
            </Grid>
            <Grid row>
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
