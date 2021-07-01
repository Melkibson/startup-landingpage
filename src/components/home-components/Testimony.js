import styled from 'styled-components'
import {PgBig, PgSmall, PgBigBold, colors, bp, ColumnGrid,} from '../../utils/CommonStyle'
import {useState, useRef} from 'react'
import useInterval from "../../utils/Hooks";

import dot from '../../assets/icons/section-testimony/dot.svg'
import {useTranslation} from "react-i18next";
const Section = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid ${colors.paleGrey};
  @media screen and (max-width: ${bp.tablet}px){
    height: 100%;
    padding: 75px 0;

  }
`
const Grid = styled(ColumnGrid)`
  overflow: hidden;
  width: 820px;
  padding: 0;
`
const SliderRow = styled.div`
  display: flex;
  width: fit-content;
  transition: all 0.75s ease-in-out;
  top: 0;
  right: 0;
  //  @media screen and (max-width: ${bp.mobile}px){
  //   height: 100%;
  // }
`
const Column = styled.div`
  display: flex;
  min-width: 100%;
  height: 300px;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  @media screen and (max-width: ${bp.tablet}px){
     width: 100%;
     height: 100%;
     margin-bottom: 15px;
     text-align: left;
  }
 
`
const Row = styled.div`
  display: flex;
  width: 50px;
  height: 10px;
  justify-content: space-between;
  @media screen and (max-width: ${bp.tablet}px){
  margin-bottom: 15px;

  }
`
const Title = styled.span`
  ${PgBigBold};
  color: ${colors.blueGreen};
  @media screen and (max-width: ${bp.tablet}px){
  margin-bottom: 30px;

  }

  
`
const Quote = styled.div`
  ${PgBig};
  @media screen and (max-width: ${bp.tablet}px){
  margin-bottom: 30px;
  }
`
const Item = styled.span`
  ${PgSmall};
  color: ${colors.darkViolet};
  opacity: 60%;
`
const Name = styled.span`
  ${PgSmall};
  font-family: Work-Sans-Bold, sans-serif;
  margin-bottom: 7px;
`
const Desc = styled.div`
  display: flex;
  flex-direction: column;
`
const Dot = styled.svg`
    &:first-child{
      fill: ${props => props.slide === 100 ? colors.blueGreen : colors.paleGrey};
    }
    &:nth-child(2){
      fill: ${props => props.slide === 200 ? colors.blueGreen : colors.paleGrey};
    }
    &:last-child{
      fill: ${props => props.slide === 0 ? colors.blueGreen : colors.paleGrey};
    }
`

const Testimony = () => {
    const [slide, setSlide] = useState(0);
    const ref = useRef(['', '']);
    useInterval(() =>{
        if(slide < 200) {
            setSlide(slide => slide + 100);
        }  else  {
            setSlide(0);
        }
        let slider = ref.current;
        slider.style.transform = `translateX(-${slide}%)`;

    }, 5000)

    const {t} = useTranslation()
    return(
        <Section>
            <Grid>
                <Title>{t('testimonyHeading')}</Title>
                <SliderRow ref={ref}>
                    <Column>
                        <Quote>“{t('testimonyContent')}”
                        </Quote>
                        <Desc>
                            <Name>{t('testimonyAuthor')}</Name>
                            <Item>{t('testimonyDesc')}</Item>
                        </Desc>
                    </Column>
                    <Column>
                        <Quote>“{t('testimonyContent')}”
                        </Quote>
                        <Desc>
                            <Name>{t('testimonyAuthor')}</Name>
                            <Item>{t('testimonyDesc')}</Item>
                        </Desc>
                    </Column>
                    <Column>
                        <Quote>“{t('testimonyContent')}”
                        </Quote>
                        <Desc>
                            <Name>{t('testimonyAuthor')}</Name>
                            <Item>{t('testimonyDesc')}</Item>
                        </Desc>
                    </Column>
                </SliderRow>
                <Row>
                    <Dot slide={slide}><use href={dot + '#dot'}></use></Dot>
                    <Dot slide={slide}><use href={dot + '#dot'}></use></Dot>
                    <Dot slide={slide}><use href={dot + '#dot'}></use></Dot>
                </Row>
            </Grid>
        </Section>
    )
}

export default Testimony
