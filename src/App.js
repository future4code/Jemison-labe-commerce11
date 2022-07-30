import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import styled from "styled-components";
import Home from './components/Home/home';
import { mockProdutos } from './mockpDados';
import Filtros from "./components/Filtros/Filtros";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";



const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`
const Site = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;
`

const ContainerFilter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #9AA1AB;
  width: 20%;
  min-height: 100%;
`
const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;
  min-height: 100%;
`

const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #9AA1AB;
  width: 20%;
  min-height: 100%;
`

const App = () => {

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

    if (existeNoCarrinho) {
      const novoCarrinho = carrinho.map(produto => {
        if (produto.id === produtoNovo.id) {
          return { ...produto, quantity: produto.quantity + 1 }
        }
        return produto
      })
      setCarrinho(novoCarrinho)
    } else {
      const umaQuantidade = { ...produtoNovo, quantity: 1 }
      setCarrinho([...carrinho, umaQuantidade])
    }
  }

  const removerCarrinho = (removerProduto) => {
    const existeNoCarrinho = carrinho.find(produto => produto.id === removerProduto.id)

    if (existeNoCarrinho) {
      const novoCarrinho = carrinho
        .map(produto => {
          if (produto.id === removerProduto.id) {
            return { ...produto, quantity: produto.quantity - 1 }
          }
          return produto
        })
        .filter((produto) => {
          return produto.quantity > 0
        })
      setCarrinho(novoCarrinho)
    }
  }

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
      <div>
        <Header />
      </div>
      <Site>
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
            produtos={carrinho} removerProduto={removerCarrinho}
          />
        </ContainerCart>
      </Site>
      <div>
        <Footer/>
      </div>
    </MainContainer>
  );
}

export default App;
