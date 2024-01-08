import React from "react";
import { Button as ButtonC } from "./styles";

function Button( { children, ...props } ) {

    return(
        <ButtonC { ...props } >{ children }</ButtonC>
    );
}

export default Button