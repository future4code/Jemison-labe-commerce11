import React from "react";
import Cart from "./components/Cart/Cart";
import styled from "styled-components";


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
        Sou Home
      </ContainerHome>
      <ContainerCart>
        <Cart />
      </ContainerCart>
    </MainContainer>
  );
}

export default App;
