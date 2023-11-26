import React, { useState } from 'react';
import Formulario from '../Fromulario/Formulario';
import { SocialButton } from '../SocialButton/SocialButton';
import { Alert } from '../Alert/Alert';

export const Registro = () => {
  const [error, setError] = useState(false);
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const handleValidation = (value) => {
    setError(value);
  };

  const handleRegistroExitoso = (value) => {
    setRegistroExitoso(value);
  };

  return (
    <div>
      <SocialButton />
      <Formulario
        onValidation={handleValidation}
        onRegistroExitoso={handleRegistroExitoso} 
      />
      {error && <Alert msj="No se admiten campos vacíos" color="danger" />}
      {registroExitoso && <Alert msj="¡Registro exitoso!" color="success" />}
    </div>
  );
};
