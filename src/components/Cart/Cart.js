import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 10px;
    color: #016ABC;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const Produto = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: black;
    padding-right: 20px;
    gap: 8px;
`
const BotaoRemover = styled.button`
    font-size: 15px;
    height: 30px;
    cursor: pointer;
    background: #016ABC;
    color: #fff;
    border: none;
    border-radius: 5px;
    text-shadow:none;
`

const ValorTotal = styled.p`
    font-weight: bold;
`

const Cart = (props) => {

    const produtosCarrinho = props.produtos.map((item, index) => {
        return (
            <Produto key={index}>
                <p>{item.quantity}x</p>
                <p>{item.name}</p>
                <BotaoRemover onClick={() => props.removerProduto(item)}>Remover</BotaoRemover>
            </Produto>
        )
    })

    const totalCompra = props.produtos.reduce((a, b) => a + b.price * b.quantity, 0)

    return (
        <Container>
            <h2>Carrinho</h2>
            {produtosCarrinho}
            <ValorTotal>
                <span>Valor Total: R$ </span>
                {totalCompra > 0 &&
                    totalCompra.toFixed(2)}
            </ValorTotal>
        </Container>
    )
}

export default Cart;