import axios from "axios"

//const BASE_URL = 'https://tienda-opal.vercel.app';

//Productos
export const createProduct = async (productData) => {
    const response = await axios.post(`https://tienda-opal.vercel.app/products`, productData);
    return response.data;
};

export const getProduct = async () =>{
    const response = await axios.get(`https://tienda-opal.vercel.app/products`);
    return response.data;
};

export const getProductById = async (id) => {
    const response = await axios.get(`https://tienda-opal.vercel.app/products/${id}`);
    return response.data;
};

export const updateProduct = async (id, productData) => {
    const response = await axios.put(`https://tienda-opal.vercel.app/products/${id}`, productData);
    return response.data;
};

export const deleteProduct = async (id) =>{
    const response = await axios.delete(`https://tienda-opal.vercel.app/products/${id}`);
    return response.data;
};

//pedidos
export const createOrder = async (orderData) => {
    const response = await axios.post(`https://tienda-opal.vercel.app/orders`, orderData);
    return response.data;
};

export const getOrders =async () => {
    const response = await axios.get(`https://tienda-opal.vercel.app}/orders`);
    return response.data;
};

export const getOrderById = async (id) => {
    const response = await axios.get(`https://tienda-opal.vercel.app/orders/${id}`);
    return response.data;
};

export const getOrdersByUser = async (userId) => {
    const response = await axios.get(`https://tienda-opal.vercel.app/orders/user/${userId}`);
    return response.data;
};

export const deleteOrder = async (id) => {
    const response = await axios.delete(`https://tienda-opal.vercel.app/orders/${id}`);
    return response.data;
};

//usuarios
export const createUser = async (userData) => {
    const response = await axios.post(`https://tienda-opal.vercel.app/users`, userData);
    return response.data;
};

export const getUsers = async () => {
    const response = await axios.get(`https://tienda-opal.vercel.app/users`);
    return response.data;
};