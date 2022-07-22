import React, { useState } from "react";
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

function App() {

  const [produtos, setProdutos] = useState(mockProdutos)
  const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [order, setOrder] = useState("")
  const [carrinho, setCarrinho] = useState([])

  const updateQuery = (e) => {
    setQuery(e.target.value)
  }

  const updateMinPrice = (e) => {
    setMinPrice(e.target.value)
  }

  const updateMaxPrice = (e) => {
    setMaxPrice(e.target.value)
  }

  const updateOrder = (e) => {
    setOrder(e.target.value)
  }

  const adicionaCarrinho = (produtoNovo) => {
    const existeNoCarrinho = carrinho.find(produto => produto.id === produtoNovo.id)

    if(existeNoCarrinho) {
      const novoCarrinho = carrinho.map(produto => {
        if(produto.id === produtoNovo.id) {
          return {...produto, quantity: produto.quantity + 1}
        }
        return produto
      })
      setCarrinho(novoCarrinho)
    } else {
      const umaQuantidade = {...produtoNovo, quantity: 1}
      setCarrinho([...carrinho, umaQuantidade])
    }
   }

   const removeCarrinho = (removerProduto) => {}

  const produtosFiltrados = produtos
    .filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase()) || query === ""
    })
    .filter((item) => {
      return item.price >= minPrice || minPrice === ""
    })
    .filter((item) => {
      return item.price <= maxPrice || maxPrice === ""
    })
    .sort((currentValue, nextValue) => {
      if (order === "asc") {
        if (currentValue.name > nextValue.name) {
          return 1
        }
        if (currentValue.name < nextValue.name) {
          return -1
        }
        return 0
      }
      if (order === "desc") {
        if (currentValue.name > nextValue.name) {
          return -1
        }
        if (currentValue.name < nextValue.name) {
          return 1
        }
        return 0
      }
    })


  return (
    <MainContainer>
      <ContainerFilter>
        <Filtros
          query={query}
          minPrice={minPrice}
          maxPrice={maxPrice}
          updateQuery={updateQuery}
          updateMinPrice={updateMinPrice}
          updateMaxPrice={updateMaxPrice}
        />
      </ContainerFilter>
      <ContainerHome>
        <Home produtos={produtosFiltrados} addCarrinho={adicionaCarrinho}
          order={order}
          updateOrder={updateOrder}
        />
      </ContainerHome>
      <ContainerCart>
        <Cart 
          produtos={carrinho}
        />
      </ContainerCart>
    </MainContainer>
  );
}

export default App;
