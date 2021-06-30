import styled from "styled-components";
import {bp, colors, NavLinkDropHeading, PgRegular} from "../../../utils/CommonStyle";

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
  ${PgRegular};
`
const DropDownColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 45%;
  justify-content: space-evenly;
`


const Dropdown = ({clicked}) => {
    return(
        <DropDownLink clicked={clicked}>
            <DropDownColumn>
                <NavLinkDropHeading>Acquire Users</NavLinkDropHeading>
                <DropDownText>Work with the tools and services you use.</DropDownText>
                <NavLinkDropHeading>Book Appointments</NavLinkDropHeading>
                <DropDownText>We offer measures like 2FA to ensure the safety.</DropDownText>
            </DropDownColumn>
            <DropDownColumn>
                <NavLinkDropHeading>Engage Customers</NavLinkDropHeading>
                <DropDownText>Get started with our simple snippet of JavaScript.</DropDownText>
                <NavLinkDropHeading>Generate Leads</NavLinkDropHeading>
                <DropDownText>Become a better designer by learning this courses.</DropDownText>
            </DropDownColumn>
        </DropDownLink>
    )
}

export default Dropdown
