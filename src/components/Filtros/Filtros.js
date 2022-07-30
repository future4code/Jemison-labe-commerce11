import React from "react";
import { Sessao } from './StyledFiltro.js';

function Filtros(props) {

    return (
        <Sessao>
            <h2>Filtros</h2>
            <form action="">
                <div>
                    <div>
                        <label>Buscar por nome</label>
                    </div>
                    <input type="text" value={props.query} onChange={props.updateQuery} />
                </div>
                <div>
                    <div>
                        <label>Menor Preço</label>
                    </div>
                    <input type="number" value={props.minPrice} onChange={props.updateMinPrice} />
                </div>
                <div>
                    <div>
                        <label>Maior preço</label>
                    </div>
                    <input type="number" value={props.maxPrice} onChange={props.updateMaxPrice} />
                </div>
            </form>
        </Sessao>
    )
}

export default Filtros;