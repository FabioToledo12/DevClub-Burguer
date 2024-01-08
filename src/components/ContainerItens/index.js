import React from "react";

/* Importar componentes do styles */
import { ContainerItens as ContItens } from "./styles";



function ContainerItens( { children } ) {

    return(
        <ContItens>{ children }</ContItens>
    );
}

export default ContainerItens