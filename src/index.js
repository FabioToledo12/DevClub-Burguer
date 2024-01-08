import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/globalStyle";
import Routes from "./routes";

//import Home from "./pages/Home";
//import Order from "./pages/Pedidos";

ReactDOM.render(
  <> 
      <Routes/>
      <GlobalStyles /> 
  </>, 
  document.getElementById("root")
);