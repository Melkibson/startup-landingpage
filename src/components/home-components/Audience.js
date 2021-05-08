import React from 'react'
import styled from 'styled-components'
import {Grid, H3, H2, Button, PgBig, colors, bp} from '../../utils/CommonStyle'

import imac from '../../assets/img/section-steps/imac.svg'
import dumbbell from '../../assets/img/section-steps/dumbbell.svg'
import polaroid from '../../assets/img/section-steps/polariod.svg'
import canvas from '../../assets/img/section-steps/canvas-stand.svg'


const Section = styled.section`
  width: 100%;
  height: 1100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: ${bp.tablet}px){
    height: 100%;
    padding-bottom: 75px;
   }
 
`
const Column = styled.div`
  display: flex;
  max-width: 560px;
  height: 360px;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
`
const HeadingSubText = styled.div`
  ${PgBig}
`
const Row = styled.div`
  display: flex;
  width: 330px;
  justify-content: space-between;
  @media screen and (max-width: ${bp.tablet}px){
     width: 100%;
     min-height: 110px;
     //justify-content: center;
     flex-direction: column;
     margin-bottom: 30px;
  }
  
`
const RowSteps = styled(Row)`
  width: 100%;
  min-height: 520px;
  justify-content: space-between;
  align-items: center;
   @media screen and ( max-width: ${bp.tablet}px) and ( min-width: ${bp.mobile}px){
    padding: 0 40px;
    flex-direction: row;
    flex-wrap: wrap;
    //justify-content: center;
   }
`
const Title = styled(H3)`
   transition: all 0.5s ease-in-out;
`
const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 265px;
  height: 300px;
  box-shadow: #00000015 0px 1px 30px 0px;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.5s ease-in-out;
  &:hover{
    background: ${colors.lightPink};
    ${H3}{
      color: ${colors.white};
    }
  }
  @media screen and (max-width: ${bp.tablet}px){
    margin: 10px 0;
  }

`

const Illu = styled.img`
    width: auto;
    height: 120px;
`

const Audience = () => {
    return(
        <Section>
            <Grid center>
                <Column>
                    <H3>Engage Visitors</H3>
                    <H2>Understand your audience</H2>
                    <HeadingSubText>Early stage company?
                    Eligible applicants get all of our products for just $49 a month.
                    </HeadingSubText>
                </Column>
                <Row>
                    <Button bgblue>Get Started</Button>
                    <Button>Learn More</Button>
                </Row>
                <RowSteps>
                    <Item>
                        <Illu src={imac} alt={''}/>
                        <Title>Developers</Title>
                    </Item>
                    <Item>
                        <Illu src={polaroid} alt={''}/>
                        <Title>Entertainment</Title>
                    </Item>
                    <Item>
                        <Illu src={dumbbell} alt={''}/>
                        <Title>Athletes</Title>
                    </Item>
                    <Item>
                        <Illu src={canvas} alt={''}/>
                        <Title>Creators</Title>
                    </Item>
                </RowSteps>
            </Grid>
        </Section>
    )
}
export default Audience
