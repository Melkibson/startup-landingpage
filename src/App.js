import React from "react";
import CommonStyle from './utils/CommonStyle'
import Home from './components/Home'
import styled from 'styled-components'

const Main = styled.main`
  position: relative;
  width: 100%;
`
const App = () => {
  return (
      <Main>
        <CommonStyle/>
        <Home/>
      </Main>
  );
}

export default App;
