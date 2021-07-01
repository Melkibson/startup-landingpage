import styled from "styled-components";
import {bp, colors, NavLinkDropHeading, PgSmall} from "../../../utils/CommonStyle";
import {useTranslation} from "react-i18next";

const DropDownLink = styled.div`
  @media screen and (min-width: ${bp.desktop}px){
    box-shadow: #00000015 0px 1px 30px 0px;

    display: flex;
    justify-content:space-between;
    height: 250px;
    max-width: 615px;
    background: ${colors.white};
    padding: 30px;
    position: absolute;
    right: 21%;
    top: 80px;
    z-index: 0;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    ${props => props.clicked}{
      opacity: 100%;
      z-index: 9999;
    }
  }
`
const DropDownText = styled.div`
  ${PgSmall};
`
const DropDownColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 45%;
  justify-content: space-evenly;
`


const Dropdown = ({clicked}) => {
    const {t} = useTranslation()
    return(
        <DropDownLink clicked={clicked}>
            <DropDownColumn>
                <NavLinkDropHeading>{t('navHeader1')}</NavLinkDropHeading>
                <DropDownText>{t('navSub')}</DropDownText>
                <NavLinkDropHeading>{t('navHeader2')}</NavLinkDropHeading>
                <DropDownText>{t('navSub')}</DropDownText>
            </DropDownColumn>
            <DropDownColumn>
                <NavLinkDropHeading>{t('navHeader3')}</NavLinkDropHeading>
                <DropDownText>{t('navSub')}</DropDownText>
                <NavLinkDropHeading>{t('navHeader4')}</NavLinkDropHeading>
                <DropDownText>{t('navSub')}</DropDownText>
            </DropDownColumn>
        </DropDownLink>
    )
}

export default Dropdown
