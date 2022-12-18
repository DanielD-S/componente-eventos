import React from 'react'
import Myinput from "./Components/Myinput.jsx"
import { useState } from 'react'

function App() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  
  const datos = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={datos}>
      <span>Nombre</span>
      <Myinput type="text" placeholder='Ingresa un Nombre' setValue={setNombre}></Myinput>
      <span>Constraseña</span> 
      <Myinput type="password" placeholder='Ingresa una Contraseña' setValue={setPassword} ></Myinput>  
      {(() => {
              if (password == '252525'){
                  return (
                      <button>Entrar</button>
                  )
              } 
              return null;
            })()}
      </form>
    </div>

  );
}

export default App;
