import React from "react";

/* Importar componentes do styles */
import { Container } from "./styles";



function ContainerRoot( { children } ) {

    return(
        <Container>{ children }</Container>
    );
}

export default ContainerRoot