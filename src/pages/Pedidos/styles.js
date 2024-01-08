import styled from "styled-components";

export const Image = styled.img`
    width: 302px;
    height: 304px;
    margin-bottom: 10px; 
`;

export const OrderList = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    width: 300px;
    height: 100px;

    border: none;
    outline: none;
    margin-top: 20px;

    color: #fff;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 5px;
    border: 4px solid #6e35ba;

    div{
        width: 100%;

        p {
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 28px ;
            color: #FFFFFF;

            display: flex;
            justify-content: flex-start ;
            padding-left: 10px;
        }
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
        padding-right: 20px;
    }
`
