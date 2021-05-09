import styled from "styled-components";
import {bp, Grid} from "../../utils/CommonStyle";

import Apple from "../../assets/img/section-brands/apple.svg";
import Google from "../../assets/img/section-brands/google.svg"
import Forbes from "../../assets/img/section-brands/forbes.svg"
import TNY from "../../assets/img/section-brands/tny.svg"
import WSJ from "../../assets/img/section-brands/wsj.svg"
import Mashable from "../../assets/img/section-brands/mashable.svg"




const Section = styled.section`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
   @media screen and (max-width: ${bp.tablet}px){
      height: 100%;
      padding: 30px 0;
   }
  
  
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${bp.tablet}px){
    flex-wrap: wrap;
    max-width: 600px;
   }
`
const ImgContainer = styled.div`
  position: relative;
  display: flex;
  width: 150px;
  height: 110px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${bp.tablet}px){
    width: 120px;
    &:nth-child(3n){
       margin-right: 0;
    }
    margin-right: 65px;
   }
     @media screen and (max-width: ${bp.mobile}px){
        margin-right: 0;
   }
`
const TNYImg = styled.img`
  width: 120px;
  height: auto;
`
const ForbesImg = styled.img`
  width: 90px;
  height: auto;
`
const MashableImg = styled.img`
  width: 120px;
  height: auto;
`
const WSJImg = styled.img`
  width: 64px;
  height: auto;
`
const AppleImg = styled.img`
  width: 50px;
  height: auto;
`
const GoogleImg = styled.img`
  width: 100px;
  height: auto;
`

const Brands = () => {
    return(
        <Section>
            <Grid center>
                <Row>
                    <ImgContainer>
                        <TNYImg src={TNY}/>
                    </ImgContainer>
                    <ImgContainer>
                        <ForbesImg src={Forbes}/>
                    </ImgContainer>
                    <ImgContainer>
                        <AppleImg src={Apple}/>
                    </ImgContainer>
                    <ImgContainer>
                        <MashableImg src={Mashable}/>
                    </ImgContainer>
                    <ImgContainer>
                        <WSJImg src={WSJ}/>
                    </ImgContainer>
                    <ImgContainer>
                        <GoogleImg src={Google}/>
                    </ImgContainer>
                </Row>
            </Grid>
        </Section>
    )
}
export default Brands
