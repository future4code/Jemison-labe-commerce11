import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
`

const Produto = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const BotaoRemover = styled.button`

`

const ValorTotal = styled.p`

`

const Cart = (props) => {

    const produtos = props.listaCarrinho.map((item, index) => {
        return (
            <Produto key={index}>
                <p>{item.quantidade}X</p>
                <p>{item.name}</p>
                <BotaoRemover>Remover</BotaoRemover>
            </Produto>
        )
    })
    console.log(props.listaCarrinho);

    const total = props.listaCarrinho.map((item, index) =>)

    
    return(
        <Container>            
            <h2>Carrinho:</h2>
            {produtos}
            <ValorTotal>Valor Total: R$ 2.300,00</ValorTotal>
        </Container>
    )
}

export default Cart;