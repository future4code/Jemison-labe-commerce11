import React, {useState} from "react";
import Cart from "./components/Cart/Cart";
import styled from "styled-components";
import Home from './Home/home';
import { mockProdutos } from './mockpDados';
import Filtros from "./components/Filtros/Filtros";
import Home from './components/Home/home';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  min-height: 100%;
`
const ContainerFilter = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
  min-height: 100%;
`
const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 60%;
  min-height: 100%;
`

const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
  min-height: 100%;
`

function App() {

  const [produtos, setProdutos] = useState(mockProdutos)
  
  const adicionaCarrinho = (produto) => {}

  return (
    <MainContainer>
      <ContainerFilter>
        <Filtros/>
      </ContainerFilter>
      <ContainerHome>
        <Home produtos={produtos} addCarrinho={adicionaCarrinho}/>
      </ContainerHome>
      <ContainerCart>
        <Cart />
      </ContainerCart>
    </MainContainer>
  );
}

export default App;
