import styled from 'styled-components'
import {Grid, PgMedium, Button, H2, H3, colors, PgRegular, PrivacyLink} from "../../utils/CommonStyle";

import illu from '../../assets/img/section-trial/illu.svg'
const Section = styled.div`
  width: 100%;
  height: 440px;
  display: flex;
  background: ${colors.paleGrey};
  justify-content: center;
  
`
const Column = styled.div`
  width: 560px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const Text = styled.div`
  ${PgMedium}
`
const EmailInput = styled.input`
  width: 385px;
  height: 48px;
  border: 1px solid ${colors.paleGrey};
  padding-left: 15px;

  ::placeholder{
      ${PgRegular};
  }
`
const Illu = styled.img`
  width: 386px;
  height: auto;
`
const Trial = () => {
    return(
        <Section>
            <Grid row center between>
                <Illu src={illu} alt={''}/>
                <Column>
                    <H2>Start your free trial.</H2>
                    <Text>Get notified about company updates, news and blog posts. We hate spam.</Text>
                    <Row>
                        <EmailInput type={'email'} placeholder={'Enter your email'}/>
                        <Button bgblue>Get Started</Button>
                    </Row>
                    <Row>
                        <PrivacyLink><span>Free 14-day trial</span> · <span>Easy setup</span> · <span>Cancel any time. Check out </span><span>Terms of Use.</span></PrivacyLink>
                    </Row>
                </Column>

            </Grid>
        </Section>
    )
}

export default Trial
