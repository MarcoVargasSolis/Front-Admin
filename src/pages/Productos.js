import React from "react";
import BackButton from "../BackButton";
import ProductList from "../componentesProductos/ProductList";

const Productos = () =>{
    return(
        <div>
            <ProductList />
            <BackButton />
        </div>
    );
};

export default Productos;