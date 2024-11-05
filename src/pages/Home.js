import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () =>{
    const navigate = useNavigate();

    return(
        <div style={styles.container}>
            <h1 className='title'>Panel de Control</h1>
            <button style={styles.button} onClick={() => navigate('/Productos')}>Productos</button>
            <button style={styles.button} onClick={() => navigate('/Pedidos')}>Pedidos</button>
            <button style={styles.button} onClick={() => navigate('/Usuarios')}>Usuarios</button>
        </div>
    );
};

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
    },

    title: {
      fontSize: '80px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
    },

    button: {
      margin: '10px',
      padding: '15px 30px',
      fontSize: '18px',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.2s, box-shadow 0.2s',
    },
    buttonHover: {
        transform: 'scale(1.05)',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
      },
};

export default Home;