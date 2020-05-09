import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'

// class Persona {
//   constructor(nombre, apellido) {
//     this.nombre = nombre,
//     this.apellido = apellido
//   }

//   saludar() {
//     return "Hola"
//   }
// }

class App extends Component {

  handleClick = () => {
    alert("Me hicieron clic")
  }

  render() {
   return (
    <div className="App">
       <button onClick={this.handleClick}>Clic</button>
       <Card info="Hola"/>
    </div>
  )};
}

export default App;
