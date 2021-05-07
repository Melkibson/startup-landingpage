import styled from 'styled-components'
import {Grid, PgBig, Button, H2, H3, colors, PgRegular} from "../../utils/CommonStyle";

import arrow from '../../assets/icons/arrow2.svg'

const Section = styled.section`
  display: flex;
  width: 100%;
  height: 920px;
  align-items: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 670px;
  
`
const Column = styled.div`
  display: flex;
  width: 560px;
  height: 300px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`
const Row = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
  align-items: center;
 `
const HeadingSubText = styled.div`
  ${PgBig}
`
const CTAButton = styled(Button)`
  width: 250px;
`
const JobColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 750px;
  height: 285px;
`
const JobTitle = styled(H3)`
`
const JobLocation = styled.span`
  ${PgRegular};
  opacity: 60%;

  
`

const JobItem = styled.div`
display: flex;
cursor:pointer;
justify-content: space-between;
align-items: center;
  width: 100%;
  height: 80px;
  border: 1px solid ${colors.paleGrey};
  border-radius: 8px;
  padding: 0 25px;
  &:hover {
    background: ${colors.blueGreen};
    box-shadow: #00000035 0px 1px 20px 0px;
    border: 0;
    ${JobTitle}{
      color: ${colors.white};
    }
    ${JobLocation} {
    color: ${colors.white};
    opacity: 100%;
    }
    ${JobTitle} {
    color: ${colors.white};
    }
  }
`

const Arrow = styled.img`
  // &:hover + ${JobItem} {
  //   fill: ${colors.white};
  // }
`
const Jobs = () => {
    return(
        <Section>
            <Grid center>
                <Container>
                    <Column>
                        <H2>We’re hiring</H2>
                        <HeadingSubText>
                            We’re a team of lifelong learners. We’re equal parts left and right brained.
                        </HeadingSubText>
                        <CTAButton bgblue>More about Company</CTAButton>
                    </Column>
                    <JobColumn>
                        <JobItem>
                            <JobTitle>Front-End Developer</JobTitle>
                            <Row>
                                <JobLocation>Los Angeles / Remote</JobLocation>
                                <Arrow src={arrow} alt="Arrow"/>
                            </Row>
                        </JobItem>
                        <JobItem>
                            <JobTitle>Community Manager</JobTitle>
                            <Row>
                                <JobLocation>New York / Full-Time</JobLocation>
                                <Arrow src={arrow} alt="Arrow"/>
                            </Row>
                        </JobItem>
                        <JobItem>
                            <JobTitle>UX/UI Designer</JobTitle>
                            <Row>
                                <JobLocation>New York / Full-Time</JobLocation>
                                <Arrow src={arrow} alt="Arrow"/>
                            </Row>
                        </JobItem>
                    </JobColumn>
                </Container>
            </Grid>
        </Section>
    )
}

export default Jobs
