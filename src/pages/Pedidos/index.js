import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/* Importar styles de Home */
import { Image, OrderList } from "./styles";

/* Importar componentes react */
import Container from "../../components/Container";
import ContainerItens from "../../components/ContainerItens";
import H1 from "../../components/Title";
import Button from "../../components/Button";

/* Importar imagens para a tela HTML */
//import DevClubBurguer from "../../image/burger-tela-1.svg";
import OrderBurguer from "../../image/burger-tela-2.svg"
import Trash from "../../image/trash.svg";

function Order() {

    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchOrders() {
          const { data: newOrders } = await axios.get("http://localhost:3001/order");
    
          setOrders(newOrders)
        }
    
        fetchOrders()
      }, []);

    async function deleteOrder(OrderId) {
        await axios.delete(`http://localhost:3001/order/${ OrderId }`);
        const newOrders = orders.filter( (order) => order.id !== OrderId );
        setOrders(newOrders);
    }

    function goBackPage(){
        navigate("/");
      }

    return (
        <Container>
            <Image src={OrderBurguer} alt="devClub-Burguer" />
            <ContainerItens>

                <H1>Pedidos</H1>

                <ul>
                    {orders.map((order) => (
                        <OrderList key={order.id}>
                            <div>
                                <p> {order.order} </p>
                                <p> {order.clientName} </p>
                            </div>
                            <button onClick={() => deleteOrder(order.id)} ><img src={Trash} alt="lata de lixo" /></button>
                        </OrderList>
                    ))}
                </ul>

                <Button isBack={ true } onClick={goBackPage} >Voltar</Button>

            </ContainerItens>
        </Container>
    ); 
}

export default Order