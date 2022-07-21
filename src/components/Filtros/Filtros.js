import React from "react";
import {Sessao} from './StyledFiltro.js';

function Filtros(props){

    return(
        <Sessao>
            <h1>Busca Avançada</h1>
            <form action="">
                <div>
                    <label>
                        Menor Preço:
                        <input type="number" value={''} onChane={''}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Maior preço:
                        <input type="number" value={''} onChange={''}/>
                    </label>
                </div>
                <div>
                    <label>
                        Buscar por nome:
                        <input type="text" value={''} onChange={''}/>
                    </label>
                </div>

                <button type="submit" onClick={"submit"}>Filtrar</button>

            </form>
        </Sessao>
    )
}

export default Filtros;