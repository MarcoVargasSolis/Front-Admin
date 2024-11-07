import React, { useEffect, useState } from "react";
import { createProduct, updateProduct, deleteProduct } from "../services/api";

const Productform = ({onSave, product, onDelete}) => {
    const [formData, setFormData] = useState({ name: '', price: '', category: '', description: '', image: ''});

    useEffect(() =>{
        if (product){
            setFormData(product);
        }
    }, [product]);

    const handleChange = (e) => {
        const{ name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            if (product){
                await updateProduct(product.id, formData);
                alert('Producto Actualizado con Exito');
            } else{
                await createProduct(formData);
                alert('Producto Creado con Exito');
            }
        onSave(formData);
        setFormData({ name: '', price: '', category: '', description: '', image: ''});
        } catch (error){
                console.error("Error al guardar el producto", error);
        }
    };

    const handleDelete = async () =>{
        try{
            if(product){
                await deleteProduct(product.id);
                onDelete();
            }
        } catch (error){
            console.error("Error al eliminar el producto", error);
        }
    };

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <h1>Gestión de Productos</h1>
            <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
            <input type="number" name="price" placeholder="Precio" value={formData.price} onChange={handleChange} required />
            <input type="text" name="category" placeholder="Categoria" value={formData.category} onChange={handleChange} />
            <textarea name="description" placeholder="Descripción" value={formData.description} onChange={handleChange} />
            <input type="text" name="image" placeholder="URL de Imagen" value={formData.image} onChange={handleChange} />
            <button type="submit">{product ? 'Actualizar Producto' : 'Agregar Producto'}</button>
            {product && (
                <button type="button" onClick={handleDelete} style={{backgroundColor: "red", color: "white"}}>Eliminar Producto</button>
            )
        }
        </form>
    );
};

export default Productform;