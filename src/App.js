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
  constructor(props) {
    super(props);
    this.state = {
      mostrarCard: true,
      infoQuePasoPorProps: 1,
    }

    this.handleClick = this.handleClick.bind(this)
  }

 handleClick = () => {
    this.setState({mostrarCard: false})
  }

  render() {
    // aca podemos escribir js 
   return (
    <div className="App">
       <button onClick={this.handleClick}>Ocultar Card</button>
       {this.state.mostrarCard && <Card info={"Hola"}/>}
    </div>
  )};
}

export default App;
