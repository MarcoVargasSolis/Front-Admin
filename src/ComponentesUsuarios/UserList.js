import React, { useState, useEffect} from "react";
import './UserList.css';

const UserList = () => {
    const[users, setUsers] = useState([]);
    const[newUser, setNewUser] = useState({name: '', email: '', password: ''});
    const[editingUserId, setEditingUserId] = useState(null);

    useEffect(() =>{
        const sampleUsers = [
        { id: '1', name: 'Usuario 1', email: 'usuario1@algo.com', password: 'password1'},
        { id: '2', name: 'Usuario 2', email: 'usuario2@algo.com', password: 'password2'},
    ];
    setUsers(sampleUsers);
    }, []);

    const saveUser = () => {
        if (newUser.name && newUser.email && newUser.password){
            if (editingUserId){
                setUsers(users.map(user => user.id === editingUserId ? { ...user, ...newUser } : user));
                    setEditingUserId(null);
            } else {
                setUsers([...users, { ...newUser, id: Date.now().toString() }]);
            }
            setNewUser({ name: '', email: '', password: ''});
            }
        };

    const deleteUser = (id) =>{
        setUsers(users.filter(user => user.id !== id));
    };

    const editUser = (user) =>{
        setNewUser(user);
        setEditingUserId(user.id);
    };

    //funcion para mejorar los cambios en los inputs
    const handleInputChange = (e) =>{
        const { name, value } = e.target;
        setNewUser(prevState => ({ ...prevState, [name]: value}));
    };


    return (
        <div className="user-container">
          <h2>Gestión de Usuarios</h2>
          <div className="add-user-form">
            <input
              type="text"
              name="name"
              value={newUser.name}
              placeholder="Nombre"
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              value={newUser.email}
              placeholder="Correo"
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              value={newUser.password}
              placeholder="Contraseña"
              onChange={handleInputChange}
            />
            <button onClick={saveUser}>
              {editingUserId ? "Guardar Cambios" : "Agregar Usuario"}
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => editUser(user)}>Editar</button>
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