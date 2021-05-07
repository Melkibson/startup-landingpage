import Header from "./home-components/Header";
import Who from "./home-components/Who";
import Brands from "./home-components/Brands";
import Features from "./home-components/Features";
import Audience from "./home-components/Audience";
import Testimony from "./home-components/Testimony";
import Jobs from "./home-components/Jobs";


import styled from "styled-components";

const Main = styled.main`
  position: relative;
  width: 100%;
`

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
        </Main>
    )
}

export default Home
