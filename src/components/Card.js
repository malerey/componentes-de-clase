import React, { Component } from 'react';


// CICLO DE VIDA DE UN COMPONENTE
// Por fases

// La primera fase se llama "mounting", montado 
// montar implica agregar cosas al DOM 
// constructor(): se crea el estado inicial 
// getDerivedStateFromProps()
// render()
// componentDidMount()

// la segunda fase se llama "updating", actualiza informacion en mi componente
// cuando cambian el estado o las props
// getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// la tercera fase es el "unmounting", sacar a un componente del DOM
// componentWillUnmount()
// 

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "Malena",
      edad: 32,
      direccion: "Pinzon 461"
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=84e25ac11ad6125024e1d376337be05f")
    .then(res => res.json())
    .then(data => this.setState({peliculas: data.results}))
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=84e25ac11ad6125024e1d376337be05f")
    .then(res => res.json())
    .then(data => this.setState({peliculas: data.results}))
  }

componentDidUpdate() {
  console.log("component did update")
}

componentWillUnmount() {
  alert("VAMOS A SACAR EL COMPONENTE DEL DOM")
}

  render() {
    console.log("ESTOY EN EL RENDER")
    return(
      <div>
      <p>PROPS: {this.props.info}</p>
      <p>ESTADO: {this.state.nombre}</p>
      <button onClick={this.handleClick}>Cambiar estado</button>
      </div>
    )
  }
}

export default Card;
