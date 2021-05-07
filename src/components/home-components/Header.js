import styled from 'styled-components'
import logo from '../../assets/icons/logo.svg';
import arrow from '../../assets/icons/section-nav/arrow.svg'
import illu from '../../assets/img/section-header/header-illu.svg'

import {colors, Grid, NavLink, Button, FooterLink, H1, PgBig} from '../../utils/CommonStyle';

const Section = styled.header`
  width: 100%;
  height: 710px;
  background: ${colors.paleOrange};
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between
`
const NavLinkLast = styled(NavLink)`
  justify-content: space-between;
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
`
const Brand = styled.span`
  font-family: Work-Sans-Bold;
  font-size: 20px;
`
const BrandSubText = styled(FooterLink)`
`
const Column = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 700px;
`

const HeadingSubText = styled.div`
  ${PgBig};
  max-width: 490px;

`
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 350px;
  justify-content: space-between;
`
const Illu = styled.img`
  width: 600px;
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
                        <NavLink><a href="#">Home</a></NavLink>
                        <NavLink><a href="#">Stories</a></NavLink>
                        <NavLinkLast><a href="#">Library</a><img src={arrow}/></NavLinkLast>
                        <Button bgblue><a href="#">Get Started</a></Button>
                    </Links>
                </Nav>
            </Grid>
            <Grid row>
                <Column>
                    <H1>Build stunning websites & apps.</H1>
                    <HeadingSubText>Create live segments and target the right people for messages based on their behaviors.</HeadingSubText>
                    <ButtonContainer>
                        <Button bgblue><a href="#">Get Started</a></Button>
                        <Button><a href="#">Learn More</a></Button>
                    </ButtonContainer>
                </Column>
                <Column>
                    <Illu src={illu}/>
                </Column>


            </Grid>
        </Section>
    )
}
export default Header
