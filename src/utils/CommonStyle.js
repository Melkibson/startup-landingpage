import React from 'react'
import styled from 'styled-components'
import {createGlobalStyle, css} from 'styled-components'

import WorkSansBold from '../assets/fonts/work_sans/WorkSans-Bold.ttf'
import WorkSansRegular from '../assets/fonts/work_sans/WorkSans-Regular.ttf'
import WorkSansLight from '../assets/fonts/work_sans/WorkSans-Light.ttf'


export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family:Work-Sans-Bold;
      src:url(${WorkSansBold});
    }
   
    @font-face {
      font-family:Work-Sans-Regular;
      src:url(${WorkSansRegular});
    }
    @font-face {
      font-family:Work-Sans-Light;
      src:url(${WorkSansLight});
    }

    body, html, *
    
    {
      padding: 0px;
      margin: 0px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    body, html {
      width: 100%;
      height: 100%;
    }
    * {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6, i
    {
      font-weight: normal;
      font-style: normal;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    body.block
    {
      overflow:hidden;
    }
    
    /* ------------------------------------------------------------- */
    /* ********************* CONTAINER GENERAL ********************* */
    /* ------------------------------------------------------------- */
    
    main
    {
      position: relative;
      width: 100%;
    }

/* ----------------------------------------------------------------- */
/* ********************* END CONTAINER GENERAL ********************* */
/* ----------------------------------------------------------------- */

`
/*==============================
=            COLORS            =
==============================*/

export const colors = {
    black: '#000000',
    white: '#FFFFFF',
    paleOrange: '#FFD8BA',
    paleGrey: '#F4F5F7',
    pink: '#D36FA7',
    paleBlue: '#ECF4F3',
    blueGreen: '#229C92',
    darkViolet: '#2B292D',
    seaBlue: '#0189D1',
    orange: '#FC943F',
}

/*=====  End of COLORS  ======*/

/*=================================
=            TEXT SIZE            =
=================================*/

export const textSize = {
    desktop: {
        h1: 80,
        h2: 56,
        pgBig: 24,
        pgMedium: 22,
        pgRegular: 18,
        pgSmall: 16,
        pgTiny: 14,
    },
    mobile: {
        h1: 50,
        h2: 40,
        h3: 22,
    }

}

/*=====  End of TEXT SIZE  ======*/

/*===================================
=            BREAK POINT            =
===================================*/

export const bp = {
    desktopBig: 2250,
    tablet: 1250,
    mobile: 700,
}

/*=====  End of BREAK POINT  ======*/

/* ------------------------------------------------- */
/* ********************* MIXIN ********************* */
/* ------------------------------------------------- */

/*----------  HEADING  ----------*/


const FontHeading = css`
  font-family: 'Work-Sans-Bold', sans-serif;
`
const FontParagraph = css`
  font-family: 'Work-Sans-Regular', sans-serif;
`
/*----------  H1  ----------*/

export const H1 = styled.h1`
  ${FontHeading};
  font-size: ${textSize.desktop.h1}px;
  @media screen and (max-width: ${bp.mobile}px){
    font-size: ${textSize.mobile.h1}px;
  }
`
/*----------  H2  ----------*/

export const H2 = styled.h2`
  ${FontHeading};
  font-size: ${textSize.desktop.h2}px;
  @media screen and (max-width: ${bp.mobile}px){
    font-size: ${textSize.mobile.h2}px;
  }
`
/*----------  H3  ----------*/

export const H3 = styled.h3`
  ${FontHeading};
  font-size: ${textSize.desktop.h3}px;
  @media screen and (max-width: ${bp.mobile}px){
    font-size: ${textSize.mobile.h3}px;
  }
`
/*----------  PARAGRAPH BIG  ----------*/

export const PgBig = css`
  ${FontParagraph};
  font-size: ${textSize.desktop.pgBig}px;
`
/*----------  PARAGRAPH MEDIUM  ----------*/

export const PgMedium = css`
  ${FontParagraph};
  font-size: ${textSize.desktop.pgMedium}px;
`
/*----------  PARAGRAPH REGULAR  ----------*/

export const PgRegular = css`
  ${FontParagraph};
  font-size: ${textSize.desktop.pgRegular}px;
`
export const PgRegularBold = css`
  ${FontHeading};
  font-size: ${textSize.desktop.pgRegular}px;
`
/*----------  PARAGRAPH SMALL  ----------*/

export const PgSmall = css`
  ${FontParagraph};
  font-size: ${textSize.desktop.pgSmall}px;
`

/*----------  PARAGRAPH TINY  ----------*/

export const PgTiny = css`
  ${FontParagraph};
  font-size: ${textSize.desktop.pgTiny}px;
`

/*----------  PARAGRAPH FOOTER  ----------*/

export const FooterParagraph = styled.div`
  ${PgRegular};
  color: ${colors.darkViolet};
  opacity: 60%;
`

/*----------  GRID  ----------*/

export const Grid = styled.div`
  width:100%;
  max-width: 1440px;
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.between ? 'space-between' : 'normal'};
  padding: 0 130px;
  @media screen and (max-width: ${bp.mobile}px){
    max-width: 650px;
    padding: 0 15px;
  }
`
/*----------  BUTTONS  ----------*/

export const Button = styled.span`
  cursor: pointer;
  display:flex;
  align-items:center;
  justify-content: center;
  ${FontHeading};
  font-size: ${textSize.pgRegular}px;
  background: ${props => props.bgblue ? colors.blueGreen : colors.white};
  color: ${props => props.bgblue ? colors.white : colors.blueGreen};
  height: 48px;
  @media screen and (min-width: ${bp.mobile}px){
    width: 160px;
  }
  @media screen and (max-width: ${bp.mobile}px){
    width: 100%;
  }
`
/*----------  LINKS  ----------*/

export const NavLink = styled.span`
  cursor: pointer;

  ${PgRegular};
  display: flex;
  justify-content: center;
  min-width: 75px;
  color: ${colors.darkViolet};
  margin-right: 50px;
  &:hover{
    font-weight: bold;
  }
  
`
export const NavLinkDropHeading = styled(H3)`
  cursor: pointer;
  &:hover{
    color: ${colors.pink};
  }
`

export const TextLink = styled.span`
  cursor: pointer;
  ${PgRegularBold};
  color: ${colors.blueGreen};
  text-decoration: underline;
`

export const FooterLink = styled.span`
  cursor: pointer;

  ${PgRegular};
  color: ${colors.darkViolet};
  opacity: 60%;
`

export const PrivacyLink = styled.span`
  cursor: pointer;
  ${PgTiny};
  color: ${colors.darkViolet};
  opacity: 60%;
`

const CommonStyle = () => {
    return(
        <GlobalStyle/>
    )
}

export default CommonStyle
