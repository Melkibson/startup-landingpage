import styled from 'styled-components'
import illu from '../../assets/img/section-header/header-illu.svg'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import translate from '../../utils/translation.js'
import Navigation from "../common-components/Navigation";

import {
    colors,
    Grid,
    Button,
    H1,
    PgBig,
    bp,
} from '../../utils/CommonStyle';

const Section = styled.header`
  width: 100%;
  height: 100vh;
  background: ${colors.paleOrange};
  display: flex;
  flex-direction: column;
  align-items: center;

`

const HeaderGrid = styled(Grid)`
  height: 100%;
  flex: 1 1 0;
  @media screen and (min-width: ${bp.mobile}px){
    flex-direction: row;
    
  }
`
const Column = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 700px;
  @media screen and (max-width: ${bp.tablet}px){
      width: calc(100% - 130px);
      height: ${props => props.illu ? '420px' :'560px'};
  }
  @media screen and (max-width: ${bp.mobile}px){
      width: 100%;
      align-items: center;
      display: ${props => props.illu ? 'none' : 'flex'};
  }
`

const HeadingSubText = styled.div`
  ${PgBig};
  width: 490px;
   @media screen and (max-width: ${bp.tablet}px){
      width: 100%;
  }

`
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  width: 350px;
  justify-content: space-between;
  @media screen and (max-width: ${bp.tablet}px){
      width: calc(100% - 50px);
  }
   @media screen and (max-width: ${bp.mobile}px){
      flex-direction: column;
      height: 110px;
  }
`
const Illu = styled.img`
  width: 600px;
  @media screen and (max-width: ${bp.tablet}px){
    padding-left: 30px ;
    width: 100%;
    height: 100%;
  }
  // @media screen and (max-width: ${bp.mobile}px){
  //   width: 300px;
  // }
`

i18n
    .use(initReactI18next)
    .init(
        translate
    );

const Header = () => {
    const { t } = useTranslation();

    return(

        <Section>
            <Navigation/>
            <HeaderGrid>
                <Column>
                    <H1>{t('title')}</H1>
                    <HeadingSubText>{t('subtitle')}</HeadingSubText>
                    <ButtonContainer>
                        <Button bgblue>{t('buttonStart')}</Button>
                        <Button>{t('buttonLearn')}</Button>
                    </ButtonContainer>
                </Column>
                <Column illu>
                    <Illu src={illu} alt={''}/>
                </Column>


            </HeaderGrid>
        </Section>

    )
}
export default Header
