import React, { Fragment, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState();
  const [numero, setNumero] = useState();
  const [email, setEmail] = useState();

  const cambiarNombre = (event) => {
    // 'event' captura la acción, 'event.target.value' seria el valor de lo que se escribe en el input
    const value = event.target.value; // convierte el valor actual en el nuevo valor que está en 'event.target.value'
    console.log(value); // para imprimir en consola
    setNombre(value); // para actualizar el estado de useState() y contemporaneamente lo del DOM
  };

  const añadirNumero = (event) => {
    const value = event.target.value;
    console.log(value);
    setNumero(value);
  };

  const añadirEmail = (event) => {
    const value = event.target.value;
    console.log(value);
    setEmail(value);
  };

  const guardarClick = () => {
    console.log("Estos son mis datos: ", nombre + ", " + numero + ", " + email);
  };

  return (
    <Fragment>
      <div className="mi_formulario_container">
        <div className="mi_formulario_header">
          <h2 className="mi_formulario_title">Formulario</h2>
        </div>

        <div className="mi_formulario_body">
          <div className="mi_formulario_form">
            <label className="mi_formulario_label">Nombre completo: </label>
            <i className="fa fa-user"></i> &nbsp; {/* <-- icono user */}
            <input
              className="mi_formulario_input"
              id="nombre"
              placeholder="Escribe tu nombre.."
              name="nombre"
              value={nombre}
              onChange={cambiarNombre}
            ></input>
            <br /> <br />
            <label className="mi_formulario_label">Número telefono: </label>
            <i className="fa fa-phone"></i>
            <input
              className="mi_formulario_input"
              id="telefono"
              placeholder="Escribe tu número.."
              type="text"
              name="tel"
              value={numero}
              onChange={añadirNumero}
            ></input>
            <br /> <br />
            <label className="mi_formulario_label">Email: </label>
            <i class="fa fa-at"></i>
            <input
              className="mi_formulario_input"
              id="telefono"
              placeholder="Escribe tu email.."
              type="text"
              name="tel"
              value={email}
              onChange={añadirEmail}
            ></input>
            <br /> <br />
            <button className="button" type="submit" onClick={guardarClick}>
              Guardar
            </button>
          </div>
        </div>

        <div className="mi_formulario_footer">
          <div className="mi_formulario_group">
            <span className="mi_formulario_label">
              Mi primer formulario CSS con React
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

//   repositorio guardado
// import React, {Fragment, useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {

//   const [nombre, setNombre]=useState('Flavio Code!');
//   const [numero, setNumero]=useState();
//   const [email, setEmail]=useState();

//   const cambiarNombre=(event) => { // 'event' captura la acción, 'event.target.value' seria el valor de lo que yo escribo en el input
//     const value=event.target.value; // convierte el valor actual en el nuevo valor que está en 'event.target.value'
//     console.log(value) // para imprimir en consola
//     setNombre (value); // para actualizar el estado de useState() y contemporaneamente lo del DOM
//   }

//   const añadirNumero=(event) => {
//     const value=event.target.value;
//     console.log(value)
//     setNumero (value);
//   }

//    const añadirEmail=(event) => {
//     const value=event.target.value;
//     console.log(value)
//     setEmail (value);
//   }

//   const guardarClick=() => {
//     console.log('Estos son mis datos: ', nombre + ', ' + numero + ', ' + email);
//   };

//   return (
//     <Fragment >
//     <div className='App'>
//       <h1>Formulario</h1>
//      <label>Nombre: </label>
//      <input id="nombre" placeholder='Escribe tu nombre..' name='nombre' value={nombre} onChange={cambiarNombre}></input>
//        <br/> <br/>
//      <label>Número telefono: </label>
//      <input id="telefono" placeholder='Escribe tu número..' type='text' name='tel' value={numero} onChange={añadirNumero}></input>
//        <br/> <br/>
//         <label>Email: </label>
//      <input id="telefono" placeholder='Escribe tu número..' type='text' name='tel' value={email} onChange={añadirEmail}></input>
//        <br/> <br/>
//      <button type='submit' onClick={guardarClick}>Guardar</button>
//     </div>
//     </Fragment>
//   );
// }

// export default App;
