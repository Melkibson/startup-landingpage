import styled from 'styled-components'
import {PgBig, PgSmall, PgBigBold, colors, bp, ColumnGrid,} from '../../utils/CommonStyle'

import dot from '../../assets/icons/section-testimony/dot.svg'
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
const Column = styled.div`
  display: flex;
  width: 820px;
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
const Dot = styled.img`
  
`

const Testimony = () => {
    return(
        <Section>
            <ColumnGrid>
                <Column>
                    <Title>Trusted by the world’s most innovative businesses – big and small</Title>
                    <Quote>“Comprehensive set of startup tools for all imaginable entrepreneurial needs.
                        Create landing pages, send emails, find freelancers. Perfect for sales, marketing, and support”
                    </Quote>
                    <Desc>
                        <Name>Viella Malkovich</Name>
                        <Item>Creative Director at Johnson</Item>
                    </Desc>
                </Column>
                <Row>
                    <Dot src={dot}/>
                    <Dot src={dot}/>
                    <Dot src={dot}/>
                </Row>
            </ColumnGrid>
        </Section>
    )
}

export default Testimony
