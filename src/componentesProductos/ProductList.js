import React, { useState, useEffect } from "react";
import ProductForm from './ProductForm';
import ProductItem from './ProductItem';
import './ProductList.css';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    //cargar productos desde la fuente de datos o api
    useEffect(() => {
        //Desde una api
        const initialProducts = [
            { id: '1', name: 'Producto 1', price: 100, category: 'Categoría 1', description: 'descripción 1', image: '/img1.jpg'},
            { id: '2', name: 'Producto 2', price: 200, category: 'Categoría 2', description: 'descripción 2', image: '/img2.jpg'}
        ];
        setProducts(initialProducts);
    }, []);
    //agregarProducto
    const handleAddProduct = (product) =>{
        setProducts([...products, {...product, id: Date.now().toString()}]);
    };
    //actualizarProducto
    const handleUpdateProduct = (updateProduct) => {
        setProducts(products.map((p) => (p.id === updateProduct.id ? updateProduct : p)));
        setEditingProduct(null);
    };
    //eliminarProducto
    const handleDeleteProducto = (productId) => {
        setProducts(products.filter((p) => p.id !== productId));
    };

    return (
        <div className="product-list-container">
            <h2>Gestión de Productos</h2>
            <ProductForm onSave={editingProduct ? handleUpdateProduct : handleAddProduct} product={editingProduct} />
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            onEdit={() => setEditingProduct(product)}
                            onDelete={() => handleDeleteProducto(product.id)}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;