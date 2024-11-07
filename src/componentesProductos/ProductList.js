import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import ProductItem from "./ProductItem";
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://tienda-opal.vercel.app/products');
            setProducts(response.data);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }
    };

    const handleSave = () => {
        fetchProducts();
        setEditingProduct(null);
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
    };

    const handleDelete = () => {
        fetchProducts();
    };

    return (
        <div className="product-list-container">
            <ProductForm onSave={handleSave} product={editingProduct} />
            <h2>Lista de Productos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} onEdit={handleEdit} onDelete={handleDelete} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
