import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    // Función para obtener la lista de usuarios desde la API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://tienda-opal.vercel.app/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };

    useEffect(() => {
      fetchUsers();
    }, []);

    // Manejar cambios en el formulario
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    // Función para agregar un nuevo usuario
    const addUser = async (userData) => {
      try {
        await axios.post('https://tienda-opal.vercel.app/users', userData);
        fetchUsers(); // Actualiza la lista
        setFormData({ name: '', email: '', password: '' });
      } catch (error) {
        console.error('Error al agregar usuario:', error);
      }
    };

    // Función para actualizar un usuario existente
    const updateUser = async (userData) => {
      try {
        await axios.put(`https://tienda-opal.vercel.app/users/${userData.id}`, userData);
        fetchUsers(); // Actualiza la lista
        setEditingUser(null);
        setFormData({ name: '', email: '', password: '' });
      } catch (error) {
        console.error('Error al actualizar usuario:', error);
      }
    };

    // Función para eliminar un usuario
    const deleteUser = async (id) => {
      try {
        await axios.delete(`https://tienda-opal.vercel.app/users/${id}`);
        fetchUsers(); // Actualiza la lista
      } catch (error) {
        console.error('Error al eliminar usuario:', error);
      }
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
      e.preventDefault();
      if (editingUser) {
        // Si estamos editando, incluir el ID en el formData y actualizar el usuario
        updateUser({ ...formData, id: editingUser });
      } else {
        addUser(formData);
      }
    };

    // Establecer usuario en edición y cargar datos en el formulario
    const handleEdit = (user) => {
      setEditingUser(user.id); // Guardar el ID del usuario en edición
      setFormData({ name: user.name, email: user.email, password: '' }); // Cargar datos sin la contraseña
    };

    return (
      <div className="user-container">
        <h2>Gestión de Usuarios</h2>
        <form className="add-user-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required={!editingUser} // Hacerlo requerido solo al agregar un usuario
          />
          <button type="submit">{editingUser ? 'Actualizar Usuario' : 'Agregar Usuario'}</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo electrónico</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEdit(user)}>Editar</button>
                  <button onClick={() => deleteUser(user.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default UserList;