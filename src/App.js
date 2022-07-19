import React from "react";
import Cart from "./components/Cart/Cart";
import styled from "styled-components";
import Home from './Home/home';
import { produtos } from './mockpDados';


const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
`
const ContainerFilter = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 25%;
  height: 100%;
`
const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 50%;
  height: 100%;
`

const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 25%;
  height: 100%;
`

function App() {
 
  return (
    <MainContainer>
      <ContainerFilter>
        Sou Filtro
      </ContainerFilter>
      <ContainerHome>
        <Home produtos={produtos} />
      </ContainerHome>
      <ContainerCart>
        <Cart />
      </ContainerCart>
    </MainContainer>
  );
}

export default App;
