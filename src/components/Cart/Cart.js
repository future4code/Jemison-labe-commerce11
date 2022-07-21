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
    
    return(
        <Container>            
            <h2>Carrinho:</h2>
            <Produto>
                <p>2X</p>  {/* TODO: Modificar valor de id por valor de quantidade */}
                <p>Produto {01}</p>
                <BotaoRemover>Remover</BotaoRemover>
            </Produto>
            <ValorTotal>Valor Total: R$ 2.300,00</ValorTotal>
        </Container>
    )
}

export default Cart;