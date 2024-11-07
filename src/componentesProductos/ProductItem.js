import React from "react";
import axios from "axios";

const ProductItem = ({ product, onEdit, onDelete }) =>{
    const handleDelete = async () => {
        try {
            await axios.delete(`https://tienda-opal.vercel.app/products/${product.id}`);
            alert('Producto eliminado con éxito');
            onDelete();  // Actualiza la lista en el componente padre
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            alert("No se pudo eliminar el producto");
        }
    };
    return(
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.description}</td>
            <td>
                <button onClick={() => onEdit(product)}>Editar</button>
                <button onClick={handleDelete}>Eliminar</button>
            </td>
        </tr>
    );
};

export default ProductItem;