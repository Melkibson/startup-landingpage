import styled from "styled-components";
import {colors, Grid, H3, PgMedium} from "../../utils/CommonStyle";

const Section = styled.header`
  width: 100%;
  height: 255px;
  background: ${colors.paleGrey};
  display: flex;
  justify-content: center;
  align-items: center;
`
const Column = styled.div`
  display:flex;
  flex-direction: column;
  width: 50%;
`
const Heading = styled(H3)`
  color: ${colors.darkViolet};
  margin-bottom: 20px;
`
const Text = styled.div`
  ${PgMedium};
`
const Who = () => {
    return(
        <Section>
            <Grid row>
                <Column>
                    <Heading>Who is it for?</Heading>
                    <Text>Building a website for a startup that looks amazing is not a rocket science anymore.</Text>
                </Column>
                <Column>
                    <Heading>What is it about?</Heading>
                    <Text>Startups, small companies and teams, entrepreneurs and web developers.</Text>
                </Column>
            </Grid>
        </Section>
    )
}

export default Who;
