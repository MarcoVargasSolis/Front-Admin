import React from "react";

const ProductItem = ({ product, onEdit, onDelete }) =>{
    return(
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.description}</td>
            <td>
                <button onClick={onEdit}>Editar</button>
                <button onClick={onDelete}>Eliminar</button>
            </td>
        </tr>
    );
};

export default ProductItem;