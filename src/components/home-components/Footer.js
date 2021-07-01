import styled from 'styled-components'
import {Fragment} from 'react'
import {Grid, H3, colors, FooterLink, FooterParagraph, PrivacyLink, bp} from "../../utils/CommonStyle";

import logo from '../../assets/icons/logo-footer.svg'
import appstore from '../../assets/img/section-footer/appstore.svg'
import googlestore from '../../assets/img/section-footer/googleplay.svg'

import twitter from  '../../assets/icons/section-footer/icon-twitter.svg'
import facebook from  '../../assets/icons/section-footer/icon-fb.svg'
import linkedin from  '../../assets/icons/section-footer/LinkedIn.svg'
import {useTranslation} from "react-i18next";


const Section = styled.footer`
  height: 340px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
   @media screen and (max-width: ${bp.tablet}px){
      height: 100%;
      padding:${ props => props.pad ? '75px 0' : '0'};
  }
`
const SectionEnd = styled(Section)`
  height: 50px;
  @media screen and (max-width: ${bp.tablet}px){
      height: 90px;
      flex-direction: column;
  }
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
  @media screen and (max-width: ${bp.tablet}px){
      width: 100%;
      justify-content: center;
      align-items: center;
      
  }
  

`
const ColumnSmall = styled(Column)`
  width: 265px;
  min-height: 190px;
  height: 100%;
  @media screen and (max-width: ${bp.tablet}px){
    align-items: flex-start;
    justify-content: space-evenly;
    &:first-child{
      margin-bottom: 15px;
    }
      
      
  }
  
  
  
`
const Row = styled.div`
  display:flex;
  justify-content: space-between;
  width: ${props => props.large ? '560px' : '260px'};
  height: 239px;
  align-items: center;
  @media screen and (max-width: ${bp.tablet}px){
    width: ${props => props.large ? '100%' : '260px'};
    height: 100%;
    flex-direction: ${props => props.row ? 'row' : 'column'};
  }

`
const RowEnd = styled(Row)`
  width:100%;
  height: 50px;
  @media screen and (max-width: ${bp.tablet}px){
  }
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 300px;
  @media screen and (max-width: ${bp.tablet}px){
      flex-direction: column;
      justify-content:  space-around;
      text-align: center;
  }

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
  width: ${props => props.social ? '100px' : '200px'};
  @media screen and (max-width: ${bp.tablet}px){
  margin-bottom: ${props => props.social ? '0' : '15px'};

  }
`
const Socials = styled.img`
  width: 20px;
  height: 20px;
`
const Footer = () => {
    const {t} = useTranslation()
    return (
        <Fragment>
            <Section pad>
                <Grid align>
                    <Column large>
                        <LogoContainer>
                            <Logo src={logo} alt={'logo'}/>
                            <LogoText>
                                <Brand>Foundation</Brand>
                                <BrandSubText>Start up landing template</BrandSubText>
                            </LogoText>
                        </LogoContainer>
                        <FooterParagraph>
                            {t('footerText')}
                        </FooterParagraph>
                        <Row row>
                             <a href="https://www.apple.com/fr/ios/app-store/"><Store apple src={appstore} alt={'app store logo'}/></a>
                             <a href="https://play.google.com/store/apps?hl=fr&gl=US"><Store src={googlestore} alt={'google store logo'}/></a>
                        </Row>
                    </Column>
                    <Row large>
                        <ColumnSmall>
                            <H3>{t('footerColumnHeading1')}</H3>
                            <FooterLink>{t('footerColumnLink1')}</FooterLink>
                            <FooterLink>{t('footerColumnLink2')}</FooterLink>
                            <FooterLink>{t('footerColumnLink3')}</FooterLink>
                        </ColumnSmall>

                        <ColumnSmall>
                            <H3>{t('footerColumnHeading2')}</H3>
                            <FooterLink>{t('footerColumnLink5')}</FooterLink>
                            <FooterLink>{t('footerColumnLink6')}</FooterLink>
                            <FooterLink>{t('footerColumnLink7')}</FooterLink>
                        </ColumnSmall>
                    </Row>
                </Grid>
            </Section>
            <Line></Line>
            <SectionEnd>
                <Grid>
                    <RowEnd>
                        <PrivacyRow row>
                            <a href="/terms"><PrivacyLink>{t('footerPrivacyLink1')}</PrivacyLink></a>
                            <a href="/privacy"><PrivacyLink>{t('footerPrivacyLink2')}</PrivacyLink></a>
                            <a href="/license"><PrivacyLink>{t('footerPrivacyLink3')}</PrivacyLink></a>
                        </PrivacyRow>
                        <PrivacyRow social row>
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
