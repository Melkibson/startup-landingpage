import Header from "./home-components/Header";
import Who from "./home-components/Who";
import Brands from "./home-components/Brands";
import Features from "./home-components/Features";
import Audience from "./home-components/Audience";
import Testimony from "./home-components/Testimony";
import Jobs from "./home-components/Jobs";
import Trial from "./home-components/Trial";
import Footer from "./home-components/Footer";
import TradButton from "./common-components/TradButton";





import styled from "styled-components";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import translate from "../utils/translation";

const Main = styled.main`
  position: relative;
  width: 100%;
`
i18n
    .use(initReactI18next)
    .init(
        translate
    );
const Home = () => {
    return(
        <Main>
            <Header/>
            <Who/>
            <Brands/>
            <Features/>
            <Audience/>
            <Brands/>
            <Testimony/>
            <Jobs/>
            <Trial/>
            <Footer/>
            <TradButton/>
        </Main>
    )
}

export default Home
