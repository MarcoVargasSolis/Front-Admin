import React, { useEffect, useState } from "react";

const Productform = ({onSave, product}) => {
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

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSave(formData);
        setFormData({ name: '', price: '', category: '', description: '', image: ''});
    };

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
            <input type="number" name="price" placeholder="Precio" value={formData.price} onChange={handleChange} required />
            <input type="text" name="category" placeholder="Categoria" value={formData.category} onChange={handleChange} />
            <textarea name="description" placeholder="Descripción" value={formData.description} onChange={handleChange} />
            <input type="text" name="image" placeholder="URL de Imagen" value={formData.image} onChange={handleChange} />
            <button type="submit">{product ? 'Actualizar Producto' : 'Agregar Producto'}</button>
        </form>
    );
};

export default Productform;