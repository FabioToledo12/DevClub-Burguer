import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    width: 300px;
    height: 68px;
    justify-content: center;
    align-items: center;
    background: ${ props => props.isBack ? "transparent" : "#D93856" };
    border: ${ props => props.isBack ? "4px solid #D93856" : "none" };
    
    border-radius: 10px;
    margin-top: 90px;

    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 2.5px;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
        transition: 1.2s;
    }

    &:active{
        opacity: 0.5
    }
`;