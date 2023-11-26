import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from './components/Alert/Alert';
import { SocialButton } from './components/SocialButton/SocialButton';
import { Formulario } from './components/Fromulario/Formulario';
import './App.css';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    pass: '',
    passRepeat: '',
  });

  const [errors, setErrors] = useState({});

  function validate(input, value) {
    const newErrors = { ...errors };

    if (value.trim() === '') {
      newErrors[input] = 'El campo debe estar completo';
    } else {
      newErrors[input] = '';
    }

    const patron = /^[a-zA-Z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (input === 'email') {
      if (!patron.test(value)) {
        newErrors[input] = 'El campo debe ser un mail válido';
      }
    }

    setErrors(newErrors); 
  }

  function enviar(e) {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach(input => {
      validate(input, form[input]);
      if (errors[input] !== '') {
        newErrors[input] = errors[input];
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); 
      return;
    }

    console.log('Enviando el formulario...');
  }

  function changeInput(e) {
    const input = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [input]: value });
    validate(input, value);
  }

  return (
    <>
      <SocialButton />
      <Formulario enviar={enviar} changeInput={changeInput} />
      <Alert errors={errors} />
    </>
  );
}

export default App;