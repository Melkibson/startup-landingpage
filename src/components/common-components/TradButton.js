import styled from 'styled-components'
import {PgRegularBold} from "../../utils/CommonStyle";
// import {useState, useEffect} from 'react'
import Translate from '../../utils/translation'

const Container = styled.div`
width: 100px;
position:fixed;
bottom: 0;
right: 0;
display: flex;
justify-content: space-between;
`
const Lang = styled.span`
  ${PgRegularBold};
  cursor: pointer
`
const TradButton = () => {
    console.log(Translate.lng)
    return(
        <Container>
            <Lang onClick={() => {Translate.lng = 'fr';     console.log('fr'+Translate.lng)
            }}>FRA</Lang>
            <Lang onClick={() => {Translate.lng = 'en';     console.log('en'+ Translate.lng)
            }}>ENG</Lang>
        </Container>
    )
}

export default TradButton
