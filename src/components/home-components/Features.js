import  {Fragment} from 'react'
import styled from 'styled-components'
import {
    Grid, colors, H2, H3, PgBig, PgRegular, PgRegularBold, PgSmall, PrivacyLink, Button, TextLink, bp
} from '../../utils/CommonStyle'

import compass from '../../assets/icons/section-features/compass.svg'
import house from '../../assets/icons/section-features/house.svg'
import files from '../../assets/icons/section-features/files.svg'
import screen from '../../assets/img/section-features/screen.png'
import profile from '../../assets/img/section-features/profile.png'
import illu1 from '../../assets/img/section-features/illu-1.svg'
import illu2 from '../../assets/img/section-features/illu-2.svg'




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
   @media screen and (max-width: ${bp.tablet}px){
     flex-direction: column;
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
const DropColumn = styled(Column)`
    justify-content: space-evenly;
    width: 100%;
    height: 60px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
      &:hover {
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
    }
`
const TitleContainer = styled.div`
  display: flex;
`
const HeadingSubText = styled.div`
  ${PgBig};
  margin-bottom: 30px;
`
const Icon = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 15px;
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
    return(
        <Fragment>
            <Section>
                <Grid>
                    <Column>
                        <TitlePink pink>Features</TitlePink>
                        <H2>Easily find leads and customers</H2>
                        <HeadingSubText>
                            Send one-off and automated email, push, and in-app messages to people. Create better stories.
                        </HeadingSubText>
                        <DropColumn>
                            <TitleContainer>
                                <Icon src={compass}/>
                                <Title>Acquire new customers</Title>
                            </TitleContainer>
                            <TextAccordeon>
                                Everything you need to start building – including open-source code, documentation.
                            </TextAccordeon>
                            <Line ></Line>
                        </DropColumn>
                        <DropColumn>

                        <TitleContainer>
                            <Icon src={house}/>
                            <Title>Engage users</Title>
                        </TitleContainer>
                        <TextAccordeon>
                            Everything you need to start building – including open-source code, documentation.
                        </TextAccordeon>
                        <Line ></Line>
                        </DropColumn>
                            <DropColumn>

                            <TitleContainer>
                            <Icon src={files}/>
                            <Title>Develop across platforms</Title>
                        </TitleContainer>
                        <TextAccordeon>
                            Everything you need to start building – including open-source code, documentation.
                        </TextAccordeon>
                        <Line></Line>
                            </DropColumn>
                    </Column>
                    <Screen src={screen}/>
                </Grid>
            </Section>
            <Section colored>
                <Grid row between>
                    <Column>
                        <IlluDev src={illu1}/>
                        <SmallText>Connect with customers and grow faster</SmallText>
                    </Column>
                    <Column>
                        <TitleOrange>Team Inbox</TitleOrange>
                        <H2>Manage conversations</H2>
                        <HeadingSubText>
                            One place to manage and respond to all conversations with leads and users. Receive messages from leads.
                        </HeadingSubText>
                        <Quote>
                            <Text>
                                “Great widgets. Great selection.
                                Great design and <Strong>easy to implement</Strong>.
                                Definitely a huge time saver for a web developer!”
                            </Text>
                            <ProfileTag>
                                <Avatar src={profile} alt={'Profile Avatar'} />
                                <Desc>
                                    <Name>Viella Malkovich</Name>
                                    <Item>Creative Director at Johnson</Item>
                                </Desc>
                            </ProfileTag>
                        </Quote>
                    </Column>
                </Grid>
            </Section>
            <Section>
                <Grid>
                    <Row>
                        <Column>
                            <TitleBlue>Communicate Better</TitleBlue>
                            <H2>Built for busy small teams</H2>
                            <HeadingSubText>
                                Three products that can be used independently or combined together for your company’s needs.
                            </HeadingSubText>
                            <Button bgblue>Get Started</Button>
                        </Column>
                        <Column>
                            <IlluDev src={illu2} alt={''}/>
                            <SmallText>A better way to acquire new users</SmallText>
                        </Column>

                    </Row>
                    <Row>
                        <SmallColumn>
                            <Text><Strong>Subscriptions</Strong>. Foundation works with the tools and services you already use every day.</Text>
                            <TextLink>Learn more about subscriptions</TextLink>
                        </SmallColumn>
                        <SmallColumn>
                            <Text><Strong>Flexible</Strong> Hours. Get started with our simple snippet of JavaScript or easy to install SDKs for iOS and Android.</Text>
                            <TextLink>Get more info about hours</TextLink>
                        </SmallColumn>
                        <SmallColumn>
                            <Text><Strong>Fast Communication</Strong>. We offer measures like 2FA and SSO to ensure the safety of your data.</Text>
                            <TextLink>Communication guidelines</TextLink>
                        </SmallColumn>
                    </Row>
                </Grid>
            </Section>
        </Fragment>

    )
}

export default Features
