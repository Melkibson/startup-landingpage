import  {Fragment} from 'react'
import styled from 'styled-components'
import {
    Grid, colors, H2, H3, PgBig, PgRegular, PgRegularBold,PgSmall, PrivacyLink, Button, TextLink
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
  height: 790px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.colored ? colors.paleBlue : colors.white};
  overflow-x: hidden;

`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 470px;
  height: 600px;
  justify-content: space-evenly;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
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
const TitleContainer = styled.div`
  display: flex;
  ${H3} {
    &:hover{
      color: ${colors.blueGreen}
    }
  }
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
const Text = styled.div`
  ${PgRegular};
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${colors.paleGrey};
  &:hover {
    height: 3px;
    background:${colors.blueGreen};
  }
`
const Screen = styled.img`
  position: absolute;
  height: 600px;
  transform: translateX(55%);
`
const IlluDev = styled.img`
  width: 480px;
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
  width: 360px;
  height: 115px;
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
                        <TitleContainer>
                            <Icon src={compass}/>
                            <H3>Acquire new customers</H3>
                        </TitleContainer>
                        <Text>
                            Everything you need to start building – including open-source code, documentation.
                        </Text>
                        <Line ></Line>
                        <TitleContainer>
                            <Icon src={house}/>
                            <H3>Engage users</H3>
                        </TitleContainer>
                        <Text>
                            Everything you need to start building – including open-source code, documentation.
                        </Text>
                        <Line ></Line>
                        <TitleContainer>
                            <Icon src={files}/>
                            <H3>Develop across platforms</H3>
                        </TitleContainer>
                        <Text>
                            Everything you need to start building – including open-source code, documentation.
                        </Text>
                        <Line></Line>
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
                            <Text><Strong>Felxible</Strong> Hours. Get started with our simple snippet of JavaScript or easy to install SDKs for iOS and Android.</Text>
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
