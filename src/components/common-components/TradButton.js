import styled from 'styled-components'
import {PgRegularBold} from "../../utils/CommonStyle";
// import {useState, useEffect} from 'react'
import Translate from '../../utils/translation'
import i18n from "i18next";

import flagFR from '../../assets/icons/FR.svg'
import flagGB from '../../assets/icons/GB.svg'

const Container = styled.div`
width: 50px;
height: 70px;
position:fixed;
flex-wrap: wrap;
top: 43px;
left: 20px;
display: flex;
justify-content: space-between;
`
const Lang = styled.span`
  transition: all 0.35s ease-in-out;  
  z-index: 2;
  ${PgRegularBold};
  cursor: pointer;
  width:  35px;
  &:hover {
    transform: scale(1.05);
  }
  @media (pointer: coarse){
    &:active{
       transform: scale(1.05);
    }
  }
`
const Flag = styled.img`
  width: 100%;
  height: auto;
`
const TradButton = () => {
    console.log(Translate.lng)
    return(
        <Container>
            <Lang onClick={() => {i18n.changeLanguage('fr')}}><Flag src={flagFR}/></Lang>
            <Lang onClick={() => {i18n.changeLanguage('en')}}><Flag src={flagGB}/></Lang>
        </Container>
    )
}

export default TradButton
