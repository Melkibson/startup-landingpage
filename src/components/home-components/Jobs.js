import styled from 'styled-components'
import {ColumnGrid, PgBig, Button, H2, H3, colors, PgRegular, bp} from "../../utils/CommonStyle";

import arrow from '../../assets/icons/arrow2.svg'

const Section = styled.section`
  display: flex;
  width: 100%;
  height: 920px;
  justify-content: center;
    @media screen and (max-width: ${bp.tablet}px){
    height: 100%;
    padding: 75px 0;
   }
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
  max-width: 560px;
  height: 300px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  @media screen and (max-width: ${bp.mobile}px){
    width: 100%;

  }
`
const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${bp.tablet}px){
    flex-direction: ${props => props.column ? 'column': 'row'};
    align-items: flex-start;
  }
   
 `
const HeadingSubText = styled.div`
  ${PgBig};
  @media screen and (max-width: ${bp.tablet}px){
    margin: 30px 0;

  }
  
`
const CTAButton = styled(Button)`
  width: 250px;
  @media screen and (max-width: ${bp.mobile}px){
    width: 100%;

  }
`
const JobColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 750px;
  height: 285px;
    @media screen and (max-width: ${bp.tablet}px){
    width: 100%;
    height: 100%;
    padding: 50px 0;
    justify-content: center;
   }
`
const JobTitle = styled(H3)`
@media screen and (max-width: ${bp.tablet}px){
     max-width: 200px;
     margin-bottom: 15px;
  }
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
  transition: all 0.5s ease-in-out;
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
  @media screen and (max-width: ${bp.tablet}px){

      min-height: 100px;
      max-height: 140px;
      &:not(:last-child){
          margin-bottom: 15px;
      }
      padding:0;
      padding-left: 25px;
      
      
  }
`

const ArrowContainer = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
    @media screen and (max-width: ${bp.tablet}px){
    background: #d5d5d5;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;

}
`
const Arrow = styled.img`

`
const Jobs = () => {
    return(
        <Section>
            <ColumnGrid center>
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
                            <Row column>
                            <JobTitle>Front-End Developer</JobTitle>
                            <JobLocation>Los Angeles / Remote</JobLocation>
                            </Row>
                            <ArrowContainer>
                                <Arrow src={arrow} alt="Arrow"/>
                            </ArrowContainer>
                        </JobItem>
                        <JobItem>
                            <Row column>
                                <JobTitle>Community Manager</JobTitle>
                                <JobLocation>New York / Full-Time</JobLocation>
                            </Row>
                            <ArrowContainer>
                                <Arrow src={arrow} alt="Arrow"/>
                            </ArrowContainer>
                        </JobItem>
                        <JobItem>
                            <Row column>
                                <JobTitle>UX/UI Designer</JobTitle>
                                <JobLocation>New York / Full-Time</JobLocation>
                            </Row>
                            <ArrowContainer>
                                <Arrow src={arrow} alt="Arrow"/>
                            </ArrowContainer>
                        </JobItem>
                    </JobColumn>
                </Container>
            </ColumnGrid>
        </Section>
    )
}

export default Jobs
