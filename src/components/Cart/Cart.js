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

    const produtosCarrinho = props.produtos.map((item, index) => {
        return (
            <Produto key={index}>
                <p>{item.quantity}</p>  
                <p>{item.name}</p>
                <BotaoRemover>Remover</BotaoRemover>
            </Produto>
        )
    })

    const totalCompra = props.produtos.reduce((a, b) => a + b.price * b.quantity, 0)

    return (
        <Container>
            <h2>Carrinho:</h2>
            {produtosCarrinho}
            <ValorTotal>
                
                {totalCompra > 0 &&
                totalCompra.toFixed(2)}
            </ValorTotal>
        </Container>
    )
}

export default Cart;