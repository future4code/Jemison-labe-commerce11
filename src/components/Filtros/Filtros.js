import React from "react";
import {Sessao} from './StyledFiltro.js';

function Filtros(props){

    return(
        <Sessao>
            <h1>Filtros</h1>
            <form action="">
                <div>
                    <label>
                        Buscar por nome:
                        <input type="text" value={props.query} onChange={props.updateQuery} />
                    </label>
                </div>
                <div>
                    <label>
                        Menor Preço:
                        <input type="number" value={props.minPrice} onChange={props.updateMinPrice} />
                    </label>
                </div>
                <div>
                    <label>
                        Maior preço:
                        <input type="number" value={props.maxPrice} onChange={props.updateMaxPrice} />
                    </label>
                </div>


                <button type="submit" onClick={"submit"}>Filtrar</button>

            </form>
        </Sessao>
    )
}

export default Filtros;