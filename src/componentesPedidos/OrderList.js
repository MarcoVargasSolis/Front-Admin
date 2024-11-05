import React, { useState, useEffect } from "react";
import './OrderList.css';

const OrderList = () =>{
    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        const sampleOrders = [
            {
                id: "1",
                userId: "1",
                products: [
                    {productId: '1', quantity: 2},
                    {productId: '2', quantity: 1}
                ],
                totalAmount: 250,
                deliveryAddress: 'Av Siempre Viva 123',
                status: 'Pendiente',
                creationDate: '2023-11-03',
            },
            {
                id: '2',
                userId: '2',
                products: [{prodctId: '3', quantity: 1}],
                totalAmount: 100,
                deliveryAddress: 'calle nueva 123',
                status: 'enviado',
                creationDate: '2023-11-04',
            }
        ];
        setOrders(sampleOrders);
    }, []);

    const changeOrderStatus = (orderId, newStatus) => {
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.id === orderId ? { ...order, status: newStatus } : order
            )
        );
    };

    return(
        <div className="table-container">
            <h2>Gestión de Pedidos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Total</th>
                        <th>Dirección</th>
                        <th>Estado</th>
                        <th>Fecha de Creación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order =>(
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.totalAmount}</td>
                            <td>{order.deliveryAddress}</td>
                            <td>{order.status}</td>
                            <td>{order.creationDate}</td>
                            <td>
                                <select
                                    value={order.status}
                                    onChange={(e) => changeOrderStatus(order.id, e.target.value)}>
                                    <option value="pendiente">Pendiente</option>
                                    <option value="enviado">Enviado</option>
                                    <option value="entregado">Entregado</option>
                                    <option value="cancelado">Cancelado</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;