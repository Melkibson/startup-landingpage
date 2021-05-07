import React from 'react'
import Header from "./home-components/Header";
import Who from "./home-components/Who";
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
        </Main>
    )
}

export default Home
