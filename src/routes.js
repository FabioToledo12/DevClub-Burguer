import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import Order from "./pages/Pedidos";

function Routed() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/order" element={ <Order/> } />
            </Routes> 
        </Router>
    );
}

export default Routed