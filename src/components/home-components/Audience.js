import React from 'react'
import styled from 'styled-components'
import {Grid, H3, H2, Button, PgBig, colors} from '../../utils/CommonStyle'

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
`
const Column = styled.div`
  display: flex;
  width: 560px;
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
`
const RowSteps = styled(Row)`
  width: 100%;
  min-height: 520px;
  justify-content: space-between;
  align-items: center;
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
  &:hover{
    background: ${colors.pink};
  }
`
const IlluContainer = styled.div`
  width: 190px;
  height: auto;
`
const Illu = styled.img`
  
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
                        <H3>Developers</H3>
                    </Item>
                    <Item>
                        <Illu src={polaroid} alt={''}/>
                        <H3>Entertainment</H3>
                    </Item>
                    <Item>
                        <Illu src={dumbbell} alt={''}/>
                        <H3>Athletes</H3>
                    </Item>
                    <Item>
                        <Illu src={canvas} alt={''}/>
                        <H3>Creators</H3>
                    </Item>
                </RowSteps>
            </Grid>
        </Section>
    )
}
export default Audience
