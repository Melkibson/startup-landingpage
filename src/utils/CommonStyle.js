import React from 'react'
import {createGlobalStyle, css} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family:Work-Sans-Bold;
      src:url(../assets/fonts/work_sans/WorkSans-Bold.ttf);
    }
    @font-face {
      font-family:Work-Sans-Regular;
      src:url(../assets/fonts/work_sans/WorkSans-Regular-Italic.ttf);
    }
    @font-face {
      font-family:Work-Sans-Light;
      src:url(../assets/fonts/work_sans/WorkSans-Light.ttf);
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
    bg1: '#F3C6BD',
    bg2: '#F4F5F7',
    bg3: '#00A1C6',
    bg4: '#FFFFFF',
    bg5: '#FCF0E3',
    cta1: '#3040C4',
    cta2: '#3142C6',
    textMain: '#2B292D',
    text1: '#009B4D',
    text2: '#0189D1',
    text3: '#F1592B',
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
  font-family: Work-Sans-Bold, 'Open Sans', sans-serif;
`
const FontParagraph = css`
  font-family: Work-Sans-Regular, 'Open Sans', sans-serif;
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
  color: ${colors.textMain};
  opacity: 60%;
`

/*----------  GRID  ----------*/

export const Grid = styled.div`
  width:100%;
  max-width: 1200px;
  display: flex;
  flex-direction: ${props.row ? 'row' : 'column'};
  align-items: center;
  padding: 0 130px;
  @media screen and (max-width: ${bp.mobile}px){
    max-width: 650px;
    padding: 0 15px;
  }
`
/*----------  BUTTONS  ----------*/

export const Button = styled.span`
  display:flex;
  align-items:center;
  justify-content: center;
  ${PgRegular};
  background: ${props.bgblue ? colors.cta : colors.white};
  color: ${props.bgblue ? colors.white : colors.cta1};
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
  ${PgRegular};
  color: ${colors.textMain};
  &:hover{
    font-weight: bold;
  }
  
`
export const NavLinkHeading = styled(H3)`
  &:hover{
    color: ${colors.text1};
  }
`

export const TextLink = styled.span`
  ${PgRegular};
  color: ${colors.cta1};
`

export const FooterLink = styled.span`
  ${PgRegular};
  color: ${colors.textMain};
  opacity: 60%;
`

export const PrivacyLink = styled.span`
  ${PgTiny};
  color: ${colors.textMain};
  opacity: 60%;
`

const CommonStyle = () => {
    return(
        <GlobalStyle/>
    )
}

