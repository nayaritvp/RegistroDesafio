import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Formulario = ({ onValidation, onRegistroExitoso}) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 

  const [error, setError] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault()
    if(nombre === '' || email === '' || password === '' || confirmPassword ===
    '') {
      setError(true);
      onValidation(true);
      return;
    } 
    setError(false);
    onValidation(false);
    onRegistroExitoso(true);
    setNombre('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>O usa tu email para registrarte</Card.Title>
        <form className="formulario" onSubmit={validarDatos}>
        {error ? <p>Todos los campos son obligatorios</p> : null}
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="form-group">
            <label>Confirma tu Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-success">
              Registrar</button>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};
 
export default Formulario;