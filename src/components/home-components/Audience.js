import React from 'react'
import styled from 'styled-components'
import {ColumnGrid, H3, H2, Button, PgBig, colors, bp} from '../../utils/CommonStyle'

import imac from '../../assets/img/section-steps/imac.svg'
import dumbbell from '../../assets/img/section-steps/dumbbell.svg'
import polaroid from '../../assets/img/section-steps/polariod.svg'
import canvas from '../../assets/img/section-steps/canvas-stand.svg'
import {useTranslation} from "react-i18next";


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
     align-items: center;
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
    const {t} = useTranslation()
    return(
        <Section>
            <ColumnGrid>
                <Column>
                    <H3>{t('audienceHeadingSmall')}</H3>
                    <H2>{t('audienceHeading')}</H2>
                    <HeadingSubText>{t('audienceSubText')}
                    </HeadingSubText>
                </Column>
                <Row>
                    <Button bgblue>{t('buttonStart')}</Button>
                    <Button>{t('buttonLearn')}</Button>
                </Row>
                <RowSteps>
                    <Item>
                        <Illu src={imac} alt={''}/>
                        <Title>{t('cardTitle1')}</Title>
                    </Item>
                    <Item>
                        <Illu src={polaroid} alt={''}/>
                        <Title>{t('cardTitle2')}</Title>
                    </Item>
                    <Item>
                        <Illu src={dumbbell} alt={''}/>
                        <Title>{t('cardTitle3')}</Title>
                    </Item>
                    <Item>
                        <Illu src={canvas} alt={''}/>
                        <Title>{t('cardTitle4')}</Title>
                    </Item>
                </RowSteps>
            </ColumnGrid>
        </Section>
    )
}
export default Audience
