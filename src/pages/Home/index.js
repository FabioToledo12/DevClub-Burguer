import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/* Importar styles de Home */
import { Image, Input } from "./styles";

/* Importar componentes react */
import Container from "../../components/Container";
import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Label from "../../components/Label";
//import Input from "../../components/Input";
import Button from "../../components/Button";

/* Importar imagens para a tela HTML */
import DevClubBurguer from "../../image/burger-tela-1.svg";
//import OrderBurguer from "../../image/burger-tela-2.svg";


function Home() {

    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const inputPedido = useRef();
    const inputNome = useRef();

    async function addNewOrder() {
        const { data: newOrder } = await axios.post("http://localhost:3001/order", {
            order: inputPedido.current.value,
            clientName: inputNome.current.value,
        });
        //console.log(newOrder)
        /* Acrescentar order em uma li estilazada pelo css, e pegando os valores dos inputs */
        //setOrders([...orders, { id: Math.random(), order: inputPedido.current.value, clientname: inputNome.current.value }])
        
        /* dentro da função faz uma desestruturação pegando só o data e da um apelido pra ele criar o array */
        setOrders([...orders, newOrder])
        /* Acessando a rota get para recuperar todos as ordem que existem lá no backend */
        /*const { data: newOrder }  = await axios.get("http://localhost:3001/order");
        setOrders(newOrder);*/

        navigate("/order");
    }

    return (
        <Container>
            <Image src={DevClubBurguer} alt="devClub-Burguer" />
            <ContainerItens>

                <H1>Faça Seu Pedido</H1>

                <Label>Pedido</Label>
                <Input ref={inputPedido} placeholder="Pedido" ></Input>

                <Label>Nome do Cliente</Label>
                <Input ref={inputNome} placeholder="Nome"></Input>

                <Button onClick={addNewOrder} >Novo Pedido</Button>

            </ContainerItens>
        </Container>
    );
}

export default Home