import styled from 'styled-components'
import {Grid, PgMedium, Button, H2, colors, PgRegular, PrivacyLink, bp} from "../../utils/CommonStyle";
import { useTranslation } from "react-i18next";

import illu from '../../assets/img/section-trial/illu.svg'
const Section = styled.div`
  width: 100%;
  height: 440px;
  display: flex;
  background: ${colors.paleGrey};
  justify-content: center;
    @media screen and (max-width: ${bp.tablet}px){
    height: 100%;
    padding: 50px 0;
   }
`
const Column = styled.div`
  max-width: 560px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: ${bp.tablet}px){
      height: 100%;
  }
`
const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
   @media screen and (max-width: ${bp.tablet}px){
      flex-direction: column;
  }
  @media screen and (max-width: ${bp.mobile}px){
      &:last-child {
          margin-top: 15px;
      }
      flex-direction: column;
  }
`
const Text = styled.div`
  ${PgMedium};
  @media screen and (max-width: ${bp.tablet}px){
      height: 100%;
      padding: 15px 0;
  }
`
const EmailInput = styled.input`
  width: 385px;
  height: 48px;
  border: 1px solid ${colors.paleGrey};
  padding-left: 15px;

  ::placeholder{
      ${PgRegular};
  }
   @media screen and (max-width: ${bp.tablet}px){
      width: 100%;
  }
   @media screen and (max-width: ${bp.tablet}px){
      margin: 15px 0;
  }
`
const Illu = styled.img`
  max-width: 386px;
  height: auto;
  @media screen and (max-width: ${bp.tablet}px){
    width: 100%;
    margin-bottom: 15px;

  }
`
const Terms = styled(PrivacyLink)`
  color: #0004bc;
  opacity: 100%;
  text-decoration: underline;
`
const Trial = () => {
    const {t} = useTranslation()

    return(
        <Section>
            <Grid align>
                <Illu src={illu} alt={''}/>
                <Column>
                    <H2>{t('trialHeading')}</H2>
                    <Text>{t('trialSubText')}</Text>
                    <Row>
                        <EmailInput type={'email'} placeholder={t('trialInputPlaceholder')}/>
                        <Button bgblue>{t('buttonStart')}</Button>
                    </Row>
                    <Row>
                        <PrivacyLink noCursor><span>{t('trialTerms')} <Terms>{t('trialTermsLink')}.</Terms></span></PrivacyLink>
                    </Row>
                </Column>

            </Grid>
        </Section>
    )
}

export default Trial
