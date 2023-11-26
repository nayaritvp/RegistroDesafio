import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Formulario = ({ enviar, changeInput }) => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>O usa tu email para registrarte</Card.Title>
          <Card.Text>
            <form onSubmit={enviar}>
              <input type="text" placeholder='Nombre' name="name" onChange={changeInput} />
              <input type="email" placeholder='Email' name="email" onChange={changeInput} />
              <input type="password" placeholder='Password' name="pass" onChange={changeInput} />
              <input type="password" placeholder='Repetir Password' name="passRepeat" onChange={changeInput} />
            </form>
          </Card.Text>
          <Button variant="success" onClick={enviar}>Registrar</Button>
        </Card.Body>
      </Card>
    );
  };
