import styled from 'styled-components'
import {Fragment} from 'react'
import {Grid, H2, H3, colors, FooterLink, FooterParagraph, PrivacyLink} from "../../utils/CommonStyle";

import logo from '../../assets/icons/logo-footer.svg'
import appstore from '../../assets/img/section-footer/appstore.svg'
import googlestore from '../../assets/img/section-footer/googleplay.svg'

import twitter from  '../../assets/icons/section-footer/icon-twitter.svg'
import facebook from  '../../assets/icons/section-footer/icon-fb.svg'
import linkedin from  '../../assets/icons/section-footer/LinkedIn.svg'


const Section = styled.footer`
  height: 340px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SectionEnd = styled(Section)`
  height: 50px;
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${colors.paleGrey};
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height:${props => props.large ? '279px' : '229px'};
  width: 360px;
  justify-content: space-evenly;

`
const ColumnSmall = styled(Column)`
  width: 265px;
  height: 100%;
`
const Row = styled.div`
  display:flex;
  justify-content: space-between;
  width: ${props => props.large ? '560px' : '260px'};
  height: 239px;
  align-items: center;

`
const RowEnd = styled(Row)`
  width:100%;
  height: 50px;
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
  height: 60px;
`
const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Brand = styled.span`
  font-family: Work-Sans-Bold, sans-serif;
  font-size: 20px;
`
const BrandSubText = styled(FooterLink)`
  cursor: none;
`
const Store = styled.img`
    width: ${props => props.apple ? '135px' : '116px'};
    height: 40px;
    transition: all 0.3s ease-in-out;
    &:hover{
       transform: scale(1.05);
    }
`
const PrivacyRow = styled(RowEnd)`
  width: ${props => props.social ? '100px' : '185px'};
`
const Socials = styled.img`
  width: 20px;
  height: 20px;
`
const Footer = () => {
    return (
        <Fragment>
            <Section>
                <Grid row between>
                    <Column large>
                        <LogoContainer>
                            <Logo src={logo} alt={'logo'}/>
                            <LogoText>
                                <Brand>Foundation</Brand>
                                <BrandSubText>Start up landing template</BrandSubText>
                            </LogoText>
                        </LogoContainer>
                        <FooterParagraph>
                            Foundation is a website template for startups and small teams. It helps to build a website in no time.
                        </FooterParagraph>
                        <Row>
                             <a href="https://www.apple.com/fr/ios/app-store/"><Store apple src={appstore} alt={'app store logo'}/></a>
                             <a href="https://play.google.com/store/apps?hl=fr&gl=US"><Store src={googlestore} alt={'google store logo'}/></a>
                        </Row>
                    </Column>
                    <Row large>
                        <ColumnSmall>
                            <H3>Product</H3>
                            <FooterLink>Acquire Users</FooterLink>
                            <FooterLink>Content Marketing</FooterLink>
                            <FooterLink>Website Templates</FooterLink>
                            <FooterLink>Customer Management</FooterLink>
                        </ColumnSmall>

                        <ColumnSmall>
                            <H3>Company</H3>
                            <FooterLink>Virtual Inbox</FooterLink>
                            <FooterLink>About Foundation</FooterLink>
                            <FooterLink>Brand Guidelines</FooterLink>
                            <FooterLink>Press Kit</FooterLink>
                            <FooterLink>Support</FooterLink>
                        </ColumnSmall>
                    </Row>
                </Grid>
            </Section>
            <Line></Line>
            <SectionEnd>
                <Grid row>
                    <RowEnd>
                        <PrivacyRow>
                            <a href="/terms"><PrivacyLink>Terms</PrivacyLink></a>
                            <a href="/privacy"><PrivacyLink>Privacy</PrivacyLink></a>
                            <a href="/license"><PrivacyLink>License</PrivacyLink></a>
                        </PrivacyRow>
                        <PrivacyRow social>
                            <a href="https://twitter.com"><Socials src={twitter} alt={'twitter logo'}/></a>
                            <a href="https://facebook.com"><Socials src={facebook} alt={'facebook logo'}/></a>
                            <a href="https://linkedin.com"><Socials src={linkedin} alt={'linkedin logo'}/></a>
                        </PrivacyRow>
                    </RowEnd>
                </Grid>
            </SectionEnd>
        </Fragment>

    )
}

export default Footer
