import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  color: #4682B4;
`

const Produto = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
color: black;
`
const BotaoRemover = styled.button`
font-size: 15px;
       
       height: 30px;
        cursor: pointer;
       background: #016ABC;
       color: #fff;
       
       border: 1px solid #eee;
       border-radius: 5px;
       box-shadow: 5px 5px 5px #eee;
       text-shadow:none;
`

const ValorTotal = styled.p`
color: black;

`

const Cart = (props) => {

    const produtosCarrinho = props.produtos.map((item, index) => {
        return (
            <Produto key={index}>
                <p>{item.quantity}</p>  
                <p>{item.name}</p>
                <BotaoRemover onClick={()=> props.removerProduto(item)}>Remover</BotaoRemover>
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