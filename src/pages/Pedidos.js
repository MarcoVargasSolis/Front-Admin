import React from 'react';
import BackButton from '../BackButton';
import OrderList from '../componentesPedidos/OrderList';

const Pedidos = () => {
  return (
    <div>
      <OrderList />
      <BackButton />

    </div>
  );
};

export default Pedidos;