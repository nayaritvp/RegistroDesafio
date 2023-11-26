import { useState } from 'react'
import { Alert } from './components/Alert/Alert';
import { Formulario } from './components/Fromulario/Formulario';
import './App.css'

function App() {
  const [form, setForm] = useState({
    name: "",
    email:"",
    pass:"",
    passRepeat:"",
  });

  const [error, setError] = useState(false);

  /*function validate(input,value){
    if (value.trim() === ""){
      setError({...error,[input]:"El campo debe estar completo"})
    }
    const patron = /^[a-zA-Z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(input === "email"){
      if(!patron.test(value)){
        setError({...error,[input]:"El campo debe ser un mail"})
      }
    }
  }*/

  function enviar(e){
    e.preventDefault()
    console.log("Enviando")
  }

  function changeInput(e){
    const input = e.target.name;
    const value = e.target.value;
    setForm({...form,[input]:value})
    //validate(input,value);
  }
  return (
    <>
    <Formulario enivar={enviar} changeInput={changeInput}/>
    {error ? <Alert msj="No se admiten campos vacíos"/> : null}
    </>
  )
}

export default App
