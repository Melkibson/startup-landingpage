import  {Fragment, useState} from 'react'
import styled, {css} from 'styled-components'
import {
    ColumnGrid,
    Grid,
    colors,
    H2,
    H3,
    PgBig,
    PgRegular,
    PgRegularBold,
    PgSmall,
    PrivacyLink,
    Button,
    TextLink,
    bp
} from '../../utils/CommonStyle'

import compass from '../../assets/icons/section-features/compass.svg'
import house from '../../assets/icons/section-features/house.svg'
import files from '../../assets/icons/section-features/files.svg'
import screen from '../../assets/img/section-features/screen.png'
import profile from '../../assets/img/section-features/profile.png'
import illu1 from '../../assets/img/section-features/illu-1.svg'
import illu2 from '../../assets/img/section-features/illu-2.svg'
import {useTranslation} from "react-i18next";




const Section = styled.section`
  position: relative;
  width: 100%;
  height: 890px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.colored ? colors.paleBlue : colors.white};
  overflow-x: hidden;
  @media screen and (max-width: ${bp.tablet}px){
    height: 100%;
    padding: 75px 0;
}
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 470px;
  height: 600px;
  justify-content: space-evenly;
  @media screen and (max-width: ${bp.mobile}px){
    width: 100%;
  }
  
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
   @media screen and (max-width: ${bp.tablet}px){
     flex-direction: column;
     align-items: center;
  }
`

const TitlePink = styled(H3)`
  color: ${colors.pink};
`
const TitleBlue = styled(H3)`
  color: ${colors.seaBlue};
`
const TitleOrange = styled(H3)`
  color: ${colors.orange};
`
const Text = styled.div`
  ${PgRegular};
  

`
const TextAccordeon = styled(Text)`
  height: 60px;
  transition: all 0.5s ease-out;
  opacity: 0;
  visibility: collapse;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${colors.paleGrey};
  transition: all 0.5s ease-in-out;

`
const Title = styled(H3)`
    transition: all 0.3s ease-in-out;
`
const Icon = styled.svg`
  height: 25px;
  width: 25px;
  margin-right: 15px;
  fill: ${colors.darkViolet};
    transition: all 0.5s ease-out;

`
const HoverStyle = css`
  height: 140px;
          ${Line} {
           background:${colors.blueGreen};
           height: 3px;
          }
          ${Title} {
           color:${colors.blueGreen};
          }
          ${Text}{
            visibility: visible;
            opacity: 100%
    
          }
          ${Icon}{
            fill: ${colors.blueGreen};
        }
`
const DropColumn = styled(Column)`
    justify-content: space-evenly;
    width: 100%;
    height: 60px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        ${HoverStyle}       
    }
    
`
const DropColumnFirst = styled(DropColumn)`
@media screen and (max-width: ${bp.tablet}px){
        ${props => props.clickedFirst}{
           ${HoverStyle}
        }
    }
`
const DropColumnSec = styled(DropColumn)`
 @media screen and (max-width: ${bp.tablet}px){
        ${props => props.clickedSec}{
           ${HoverStyle}
        }
    }
`
const DropColumnLast = styled(DropColumn)`
 @media screen and (max-width: ${bp.tablet}px){
        ${props => props.clickedLast}{
           ${HoverStyle}
        }
    }
`


const TitleContainer = styled.div`
  display: flex;
`
const HeadingSubText = styled.div`
  ${PgBig};
  margin-bottom: 30px;
`



const Screen = styled.img`
  cursor: pointer;
  position: absolute;
  height: 600px;
  transform: translateX(55%);
  transition: transform 0.75s linear;
  box-shadow: #00000015 0px 1px 30px 0px;
  @media screen and (max-width: ${bp.tablet}px){
    display: none;

  }

  &:hover {
     transform: translateX(5%);
  }
`
const IlluDev = styled.img`
  max-width: 480px;
   @media screen and (max-width: ${bp.mobile}px){
    width: 100%;

  }
`
const Quote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 215px;
  background: ${colors.white};
  box-shadow: #00000015 0px 1px 30px 0px;
  padding: 0 30px;
  border-bottom: ${colors.pink} solid 4px;
`
const ProfileTag = styled.div`
  display: flex;
`
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`
const Desc = styled.div`
  display: flex;
  flex-direction: column;
`
const Item = styled.span`
  ${PgSmall};
`
const Name = styled(Item)`
  font-family: Work-Sans-Bold, sans-serif;
`
const SmallText = styled(PrivacyLink)`
  margin: 0 auto;
`
const SmallColumn = styled(Column)`
  max-width: 360px;
  height: 115px;
  @media screen and (max-width: ${bp.mobile}px){
    width: 100%;

  }
`
const Strong = styled.span`
  ${PgRegularBold};
`
const Features = () => {
    let initialState = true;
    const [clickedFirst, setClickedFirst] = useState(initialState);
    const [clickedSec, setClickedSec] = useState(initialState);
    const [clickedLast, setClickedLast] = useState(initialState);

    const {t} = useTranslation()

    return(
        <Fragment>
            <Section>
                <Grid align>
                    <Column>
                        <TitlePink pink>{t('servicesHeadingSmall1')}</TitlePink>
                        <H2>{t('servicesHeading1')}</H2>
                        <HeadingSubText>
                            {t('servicesSubText1')}
                        </HeadingSubText>
                        <DropColumnFirst clickedFirst={clickedFirst} onClick={()=>{setClickedFirst(!clickedFirst)}}>
                            <TitleContainer>
                                <Icon>
                                    <use href={compass + '#compass'}></use>
                                </Icon>
                                <Title>{t('toggleTitle1')}</Title>
                            </TitleContainer>
                            <TextAccordeon>
                                {t('toggleText')}
                            </TextAccordeon>
                            <Line ></Line>
                        </DropColumnFirst>
                        <DropColumnSec clickedSec={clickedSec} onClick={()=>{setClickedSec(!clickedSec)}}>
                        <TitleContainer>
                            <Icon>
                                <use href={house + '#house'}></use>
                            </Icon>
                            <Title>{t('toggleTitle2')}</Title>
                        </TitleContainer>
                        <TextAccordeon>
                            {t('toggleText')}

                        </TextAccordeon>
                        <Line ></Line>
                        </DropColumnSec>
                        <DropColumnLast clickedLast={clickedLast} onClick={()=>{setClickedLast(!clickedLast)}}>
                            <TitleContainer>
                                <Icon>
                                    <use href={files + '#files'}></use>
                                </Icon>
                            <Title>{t('toggleTitle3')}</Title>
                        </TitleContainer>
                        <TextAccordeon>
                            {t('toggleText')}
                        </TextAccordeon>
                        <Line></Line>
                            </DropColumnLast>
                    </Column>
                    <Screen src={screen}/>
                </Grid>
            </Section>
            <Section colored >
                <Grid align>
                    <Column>
                        <IlluDev src={illu1}/>
                        <SmallText>{t('illuSubText1')}</SmallText>
                    </Column>
                    <Column>
                        <TitleOrange>{t('servicesHeadingSmall2')}</TitleOrange>
                        <H2>{t('servicesHeading2')}</H2>
                        <HeadingSubText>
                            {t('servicesSubText2')}
                        </HeadingSubText>
                        <Quote>
                            <Text>
                                {t('testimonyContent')}
                            </Text>
                            <ProfileTag>
                                <Avatar src={profile} alt={'Profile Avatar'} />
                                <Desc>
                                    <Name>{t('testimonyAuthor')}</Name>
                                    <Item>{t('testimonyDesc')}</Item>
                                </Desc>
                            </ProfileTag>
                        </Quote>
                    </Column>
                </Grid>
            </Section>
            <Section>
                <ColumnGrid>
                    <Row>
                        <Column>
                            <TitleBlue>{t('servicesHeadingSmall3')}</TitleBlue>
                            <H2>{t('servicesHeading3')}</H2>
                            <HeadingSubText>
                                {t('servicesSubText3')}
                            </HeadingSubText>
                            <Button bgblue>{t('buttonStart')}</Button>
                        </Column>
                        <Column>
                            <IlluDev src={illu2} alt={''}/>
                            <SmallText>{t('illuSubText2')}</SmallText>
                        </Column>

                    </Row>
                    <Row>
                        <SmallColumn>
                            <Text><Strong>{t('servicesColumnStrong1')}</Strong>. {t('servicesColumnText')}</Text>
                            <TextLink>{t('servicesColumnLink1')}</TextLink>
                        </SmallColumn>
                        <SmallColumn>
                            <Text><Strong>{t('servicesColumnStrong2')}</Strong>. {t('servicesColumnText')}</Text>
                            <TextLink>{t('servicesColumnLink2')}</TextLink>
                        </SmallColumn>
                        <SmallColumn>
                            <Text><Strong>{t('servicesColumnStrong3')}</Strong>. {t('servicesColumnText')}</Text>
                            <TextLink>{t('servicesColumnLink3')}</TextLink>
                        </SmallColumn>
                    </Row>
                </ColumnGrid>
            </Section>
        </Fragment>

    )
}

export default Features
