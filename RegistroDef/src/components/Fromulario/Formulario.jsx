import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Formulario = ({ enviar, changeInput }) => {
  const submitForm = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la validación de campos antes de enviar el formulario
    // Por ejemplo, verificar si los campos están completos y si el formato del email es válido

    // Luego, llama a la función 'enviar' si los datos son válidos
    enviar(e);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>O usa tu email para registrarte</Card.Title>
        <form onSubmit={submitForm}>
          <input type="text" placeholder='Nombre' name="name" onChange={changeInput} />
          <input type="email" placeholder='Email' name="email" onChange={changeInput} />
          <input type="password" placeholder='Password' name="pass" onChange={changeInput} />
          <input type="password" placeholder='Repetir Password' name="passRepeat" onChange={changeInput} />
          <Button variant="primary" type="submit">Registrar</Button>
        </form>
      </Card.Body>
    </Card>
  );
};
