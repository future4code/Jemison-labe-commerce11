import React, {useState} from "react";
import Cart from "./components/Cart/Cart";
import styled from "styled-components";
import Home from './components/Home/home';
import { mockProdutos } from './mockpDados';
import Filtros from "./components/Filtros/Filtros";


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

const App = () => {

  // const [produtos] = useState(mockProdutos)

  const [listaSelecionada] = useState([
    {
      id: 1,
      name: 'Camiseta Unissex Astronaut Swing Moon Space Nasa',
      price: 79.90,
      quantidade: 1,
      photo: 'https://static3.tcdn.com.br/img/img_prod/460977/camiseta_masculina_unissex_astronaut_swing_moon_space_nasa_astronauta_balanco_na_lua_espaco_preta_ev_79625_1_e2852b083521f284cff8a5beaa512de0.jpg',
  },
  {
      id: 2,
      name: 'Camiseta Masculina Estampada Astronauta',
      price: 70.90,
      quantidade: 4,
      photo: 'https://images-americanas.b2w.io/produtos/4605995901/imagens/camiseta-masculina-estampada-astronauta-fora-do-espaco-m/4605995910_1_large.jpg',
  },
  {
      id: 3,
      name: 'Camiseta Astronauta Nasa',
      price: 59.90,
      quantidade: 2,
      photo: 'https://http2.mlstatic.com/D_NQ_NP_975188-MLB48852556716_012022-O.webp',
  }
  ])
  
  const adicionaCarrinho = (produto) => {}

  return (
    <MainContainer>

      <ContainerFilter>
        <Filtros/>
      </ContainerFilter>

      <ContainerHome>
        <Home produtos={mockProdutos} addCarrinho={adicionaCarrinho}/>
      </ContainerHome>

      <ContainerCart>
        <Cart listaCarrinho={listaSelecionada}/>
      </ContainerCart>

    </MainContainer>
  );
}

export default App;
