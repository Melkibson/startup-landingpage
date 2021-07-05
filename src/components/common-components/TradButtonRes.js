import styled from 'styled-components'
import {PgRegularBold, bp} from "../../utils/CommonStyle";
import i18n from "i18next";

import flagFR from '../../assets/icons/FR.svg'
import flagGB from '../../assets/icons/GB.svg'

const ContainerRes = styled.div`
      display: none;
      flex-wrap: wrap;
      position: initial;
      width: 90px;
      height: auto;
      justify-content: space-evenly;
      @media screen and (max-width: ${bp.tablet}px){
        display: flex;
      }
`
const Lang = styled.span`
  transition: all 0.35s ease-in-out;  
  z-index: 2;
  ${PgRegularBold};
  cursor: pointer;
  width:  35px;
  height: auto;
  &:hover {
    transform: scale(1.05);
  }
  @media (pointer: coarse){
    &:active{
       transform: scale(1.05);
    }
  }
  @media screen and  (max-width: ${bp.tablet}px){
    width: 25px;
  }
`
const Flag = styled.img`
  width: 100%;
  height: auto;
  @media screen and  (max-width: ${bp.tablet}px){
    height: 100%;
  }
`
const TradButtonRes = () => {
    return(
            <ContainerRes>
                <Lang onClick={() => {i18n.changeLanguage('fr')}}><Flag src={flagFR}/></Lang>
                <Lang onClick={() => {i18n.changeLanguage('en')}}><Flag src={flagGB}/></Lang>
            </ContainerRes>

    )
}

export default TradButtonRes
