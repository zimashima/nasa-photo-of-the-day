import React, {useState, useEffect} from "react";
import "./App.css";
import styled from 'styled-components';

import APODCreate from "./Components/APOD/APODcreate";
import {Header, Footer} from "./Components/HeaderFooter"

const OneDivToRuleThemAll = styled.div`
  background-color: black
`

function App() {
  const [datepicked, setDate] = useState()

  useEffect(()=>{
    setDate(datepicked)
  },[datepicked])

  return (
    <OneDivToRuleThemAll>
      <Header />
      <APODCreate />
      <Footer />
    </OneDivToRuleThemAll>
  );
}

export default App;
