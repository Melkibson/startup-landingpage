import styled from "styled-components";
import {Grid} from "../../utils/CommonStyle";

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
  
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`
const ImgContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 150px;
  max-height: 110px;
  align-items: center;
  justify-content: center;
`
const BrandImg = styled.img`
  width: 100%;
`
const Brands = () => {
    return(
        <Section>
            <Grid>
                <Row>
                    <ImgContainer>
                        <BrandImg src={TNY}/>
                    </ImgContainer>
                    <ImgContainer>
                        <BrandImg src={Forbes}/>
                    </ImgContainer>
                    <ImgContainer>
                        <BrandImg src={Apple}/>
                    </ImgContainer>
                    <ImgContainer>
                        <BrandImg src={Mashable}/>
                    </ImgContainer>
                    <ImgContainer>
                        <BrandImg src={WSJ}/>
                    </ImgContainer>
                    <ImgContainer>
                        <BrandImg src={Google}/>
                    </ImgContainer>
                </Row>
            </Grid>
        </Section>
    )
}
export default Brands
