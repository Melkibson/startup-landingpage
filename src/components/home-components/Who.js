import styled from "styled-components";
import {colors, Grid, H3, PgMedium, bp} from "../../utils/CommonStyle";
import {useTranslation} from "react-i18next";

const Section = styled.section`
  width: 100%;
  height: 255px;
  background: ${colors.paleGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${bp.tablet}px){
    height: 428px;
      justify-content: space-evenly;

  }
`
const Column = styled.div`
  display:flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: ${bp.tablet}px){
    height: 100%;
    justify-content: center;
    width: 100%;
  }
`
const Heading = styled(H3)`
  color: ${colors.darkViolet};
  margin-bottom: 20px;
`
const Text = styled.div`
  ${PgMedium};
`
const Who = () => {
    const {t} = useTranslation()
    return(
        <Section>
            <Grid align>
                <Column>
                    <Heading>{t('whoHeading1')}</Heading>
                    <Text>{t('whoText1')}</Text>
                </Column>
                <Column>
                    <Heading>{t('whoHeading2')}</Heading>
                    <Text>{t('whoText2')}</Text>
                </Column>
            </Grid>
        </Section>
    )
}

export default Who;
