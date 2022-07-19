import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

export const Filtros = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
`

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content:center;
    text-align: center;
    padding: 20px;
    gap: 15px;
    width: 80%;
    margin-left: 10%;
`

export const Prod = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    gap: 5px;
    align-items: center;

    img{
        width: 100%;
        height: 85%;
    }

    button{
        font-size: 15px;
        border-radius: 5px;
        height: 5%;
    }
`