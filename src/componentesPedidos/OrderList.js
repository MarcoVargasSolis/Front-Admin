import React, { useEffect, useState } from "react";
import axios from "axios";
import './OrderList.css';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    // Obtener todas las órdenes al montar el componente
    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get("https://tienda-opal.vercel.app/orders");
            setOrders(response.data);
        } catch (error) {
            console.error("Error al obtener las órdenes:", error);
        }
    };

    // Cambiar el estado de una orden
    const updateOrderStatus = async (orderId, newStatus) => {
        try {
            await axios.put(`https://tienda-opal.vercel.app/orders/${orderId}`, { status: newStatus });
            // Actualizar las órdenes en el estado local
            setOrders(orders.map(order => 
                order.id === orderId ? { ...order, status: newStatus } : order
            ));
        } catch (error) {
            console.error("Error al actualizar el estado de la orden:", error);
        }
    };

    // Eliminar una orden
    const deleteOrder = async (orderId) => {
        try {
            await axios.delete(`https://tienda-opal.vercel.app/orders/${orderId}`);
            setOrders(orders.filter(order => order.id !== orderId));
        } catch (error) {
            console.error("Error al eliminar la orden:", error);
        }
    };

    return (
        <div className="order-list">
            <h2>Lista de Órdenes</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Total</th>
                        <th>Dirección de entrega</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.userId}</td>
                            <td>${order.totalAmount}</td>
                            <td>{order.deliveryAddress}</td>
                            <td>{order.status}</td>
                            <td>
                                {/* Botón para actualizar el estado */}
                                <button onClick={() => updateOrderStatus(order.id, "completado")}>
                                    Marcar como completado
                                </button>
                                {/* Botón para eliminar la orden */}
                                <button onClick={() => deleteOrder(order.id)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;
